import fs from 'node:fs'
import path from 'node:path'

function editFile(file: string, callback: (content: string) => string) {
  const content = fs.readFileSync(file, 'utf-8')
  fs.writeFileSync(file, callback(content), 'utf-8')
}

function setupReactSwc(root: string, isTs: boolean) {
  editFile(path.resolve(root, 'package.json'), (content: string) => {
    return content.replace(/"@vitejs\/plugin-react": ".+?"/, '"@vitejs/plugin-react-swc": "^3.0.0"')
  })
  editFile(path.resolve(root, `vite.config.${isTs ? 'ts' : 'js'}`), (content: string) => {
    return content.replace('@vitejs/plugin-react', '@vitejs/plugin-react-swc')
  })
}

export default setupReactSwc
