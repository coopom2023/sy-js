import fs from 'node:fs'
import path from 'node:path'
import { red, reset } from 'kolorist'
import minimist from 'minimist'
import prompts from 'prompts'
import { isEmpty } from './emptyDir'
import FRAMEWORKS, { Framework } from './frameworks'
import maps, { layers } from './maps'

const TEMPLATES = FRAMEWORKS.map((f) => (f.variants && f.variants.map((v) => v.name)) || [f.name]).reduce((a, b) => a.concat(b), [])

function formatTargetDir(targetDir: string | undefined) {
  return targetDir?.trim().replace(/\/+$/g, '')
}

function isValidPackageName(projectName: string) {
  return /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(projectName)
}

function toValidPackageName(projectName: string) {
  return projectName.trim().toLowerCase().replace(/\s+/g, '-').replace(/^[._]/, '').replace(/[^a-z\d\-~]+/g, '-')
}

async function getPrompts(argv: { t?: string; template?: string } & minimist.ParsedArgs, defaultTargetDir: string) {
  const argTargetDir = formatTargetDir(argv._[0])
  const argTemplate = argv.template || argv.t

  let targetDir = argTargetDir || defaultTargetDir
  const getProjectName = () => targetDir === '.' ? path.basename(path.resolve()) : targetDir

  let result: prompts.Answers<'projectName' | 'overwrite' | 'packageName' | 'framework' | 'variant'>
  // let method: string | undefined
  try {
    result = await prompts(
      [
        // {
        //   type: 'select',
        //   name: 'method',
        //   message: reset('选择方式:'),
        //   hint: '使用上下键移动，回车确认',
        //   initial: 0,
        //   choices: [
        //     { title: green('创建新项目'), value: 'create' },
        //     { title: cyan('添加组件到当前项目'), value: 'add' },
        //   ],
        //   onState: (state) => {
        //     method = state.value
        //   }
        // },
        {
          type: argTargetDir ? null : 'text',
          name: 'projectName',
          message: reset('项目名称:'),
          initial: defaultTargetDir,
          onState: (state) => {
            targetDir = formatTargetDir(state.value) || defaultTargetDir
          },
        },
        {
          type: () => !fs.existsSync(targetDir) || isEmpty(targetDir) ? null : 'confirm',
          name: 'overwrite',
          message: () => (targetDir === '.' ? '当前目录' : `目录 "${targetDir}"`) + ' 不是空的. 确认删除?',
        },
        {
          type: (_, { overwrite }: { overwrite?: boolean }) => {
            if (overwrite === false) {
              throw new Error(red('✖') + ' 操作取消')
            }
            return null
          },
          name: 'overwriteChecker',
        },
        {
          type: () => (isValidPackageName(getProjectName()) ? null : 'text'),
          name: 'packageName',
          message: reset('Package 名称:'),
          initial: () => toValidPackageName(getProjectName()),
          validate: (dir) => isValidPackageName(dir) || '错误的 package.json 名称',
        },
        {
          type: (argTemplate && TEMPLATES.includes(argTemplate)) ? null : 'select',
          name: 'framework',
          message: typeof argTemplate === 'string' && !TEMPLATES.includes(argTemplate) ? reset(`"${argTemplate}" 不是正确的模版. 请选择: `) : reset('选择框架:'),
          hint: '使用上下键移动，回车确认',
          initial: 0,
          choices: FRAMEWORKS.map((framework) => {
            const frameworkColor = framework.color
            return { title: frameworkColor(framework.display || framework.name), value: framework }
          }),
        },
        {
          type: (framework: Framework) => framework && framework.variants ? 'select' : null,
          name: 'variant',
          message: reset('选择类型:'),
          hint: '使用上下键移动，回车确认',
          choices: (framework: Framework) =>
            framework.variants.map((variant) => {
              const variantColor = variant.color
              return { title: variantColor(variant.display || variant.name), value: variant.name }
            }),
        },
        {
          type: 'select',
          name: 'maps',
          message: reset('选择地图引擎:'),
          hint: '使用上下键移动，回车确认',
          initial: 0,
          choices: maps.map((m) => {
            return { title: m.color(m.display || m.name), value: m }
          }),
        },
        {
          type: 'select',
          name: 'maps',
          message: reset('选择地图底图:'),
          hint: '使用上下键移动，回车确认',
          initial: 0,
          choices: layers.map((m) => {
            return { title: m.color(m.display || m.name), value: m }
          }),
        },
      ],
      {
        onCancel: () => {
          throw new Error(red('✖') + ' 操作取消')
        },
      },
    )
  } catch (cancelled) {
    if (cancelled instanceof Error) {
      console.log(cancelled.message)
    } else {
      console.log(cancelled)
    }
    return
  }
  const { framework, overwrite, packageName, variant } = result

  return {
    getProjectName,
    projectName: '',
    framework,
    overwrite,
    packageName,
    variant,
    targetDir
  }
}

export default getPrompts
