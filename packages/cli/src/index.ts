import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import spawn from 'cross-spawn'
import minimist from 'minimist'
import FRAMEWORKS from './frameworks'
import pkgFromUserAgent from './pkgFromUserAgent'
import setupReactSwc from './setupReactSwc'
import emptyDir from './emptyDir'
import copy from './copyDir'
import getPrompts from './prompt'

const argv = minimist<{ t?: string; template?: string }>(process.argv.slice(2), { string: ['_'] })
const cwd = process.cwd()

const renameFiles: Record<string, string> = { _gitignore: '.gitignore' }

const defaultTargetDir = 'sy-app'

async function init() {
  const argTemplate = argv.template || argv.t
  const result = await getPrompts(argv, defaultTargetDir)
  if (!result) return
  const { framework, getProjectName, overwrite, packageName, targetDir, variant } = result

  const root = path.join(cwd, targetDir)

  if (overwrite) {
    emptyDir(root)
  } else if (!fs.existsSync(root)) {
    fs.mkdirSync(root, { recursive: true })
  }

  let template: string = variant || framework?.name || argTemplate
  let isReactSwc = false
  if (template.includes('-swc')) {
    isReactSwc = true
    template = template.replace('-swc', '')
  }

  const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent)
  const pkgManager = pkgInfo ? pkgInfo.name : 'npm'
  const isYarn1 = pkgManager === 'yarn' && pkgInfo?.version.startsWith('1.')
  const { customCommand } = FRAMEWORKS.flatMap((f) => f.variants).find((v) => v.name === template) ?? {}
  if (customCommand) {
    const fullCustomCommand = customCommand.replace(/^npm create/, `${pkgManager} create`)
      .replace('@latest', () => (isYarn1 ? '' : '@latest'))
      .replace(/^npm exec/, () => {
        if (pkgManager === 'pnpm') return 'pnpm dlx'
        if (pkgManager === 'yarn' && !isYarn1) return 'yarn dlx'
        return 'npm exec'
      })

    const [command, ...args] = fullCustomCommand.split(' ')
    const replacedArgs = args.map((arg) => arg.replace('TARGET_DIR', targetDir))
    const { status } = spawn.sync(command, replacedArgs, { stdio: 'inherit' })
    process.exit(status ?? 0)
  }

  console.log(`\n脚手架项目在 ${root}...`)

  const templateDir = path.resolve(fileURLToPath(import.meta.url), '../..', `template-${template}`)

  const write = (file: string, content?: string) => {
    const targetPath = path.join(root, renameFiles[file] ?? file)
    if (content) {
      fs.writeFileSync(targetPath, content)
    } else {
      copy(path.join(templateDir, file), targetPath)
    }
  }

  const files = fs.readdirSync(templateDir)
  for (const file of files.filter((f) => f !== 'package.json')) {
    write(file)
  }

  const pkg = JSON.parse(fs.readFileSync(path.join(templateDir, 'package.json'), 'utf-8'))
  pkg.name = packageName || getProjectName()
  write('package.json', JSON.stringify(pkg, null, 2) + '\n')
  if (isReactSwc) {
    setupReactSwc(root, template.endsWith('-ts'))
  }

  const cdProjectName = path.relative(cwd, root)
  console.log('\n创建完成，可执行命令:\n')
  if (root !== cwd) {
    console.log(`  cd ${cdProjectName.includes(' ') ? `"${cdProjectName}"` : cdProjectName}`)
  }
  switch (pkgManager) {
  case 'yarn':
    console.log('  yarn')
    console.log('  yarn dev')
    break
  default:
    console.log(`  ${pkgManager} install`)
    console.log(`  ${pkgManager} run dev`)
    break
  }
  console.log()
}

init().catch((e) => {
  console.error(e)
})
