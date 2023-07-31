import { blue, cyan, green, yellow } from 'kolorist'
// import { blue, cyan, green, lightGreen, lightRed, magenta, red, reset, yellow } from 'kolorist'

type ColorFunc = (str: string | number) => string
export type Framework = {
  name: string
  display: string
  color: ColorFunc
  variants: FrameworkVariant[]
}
type FrameworkVariant = {
  name: string
  display: string
  color: ColorFunc
  customCommand?: string
}

const frameworks: Framework[] = [
  {
    name: 'vue',
    display: 'Vue',
    color: green,
    variants: [
      { name: 'vue', display: 'JavaScript', color: yellow },
      { name: 'vue-ts', display: 'TypeScript', color: blue },
      // { name: 'custom-create-vue', display: 'Customize with create-vue ↗', color: green, customCommand: 'npm create vue@latest TARGET_DIR' },
      // { name: 'custom-nuxt', display: 'Nuxt ↗', color: lightGreen, customCommand: 'npm exec nuxi init TARGET_DIR' },
    ],
  },
  {
    name: 'react',
    display: 'React',
    color: cyan,
    variants: [
      { name: 'react', display: 'JavaScript', color: yellow },
      { name: 'react-ts', display: 'TypeScript', color: blue },
      { name: 'react-swc', display: 'JavaScript + SWC', color: yellow },
      { name: 'react-swc-ts', display: 'TypeScript + SWC', color: blue },
    ],
  },
  // {
  //   name: 'vanilla',
  //   display: 'Vanilla',
  //   color: yellow,
  //   variants: [
  //     { name: 'vanilla', display: 'JavaScript', color: yellow },
  //     { name: 'vanilla-ts', display: 'TypeScript', color: blue },
  //   ],
  // },
  // {
  //   name: 'preact',
  //   display: 'Preact',
  //   color: magenta,
  //   variants: [
  //     { name: 'preact', display: 'JavaScript', color: yellow },
  //     { name: 'preact-ts', display: 'TypeScript', color: blue },
  //   ],
  // },
  // {
  //   name: 'lit',
  //   display: 'Lit',
  //   color: lightRed,
  //   variants: [
  //     { name: 'lit', display: 'JavaScript', color: yellow },
  //     { name: 'lit-ts', display: 'TypeScript', color: blue },
  //   ],
  // },
  // {
  //   name: 'svelte',
  //   display: 'Svelte',
  //   color: red,
  //   variants: [
  //     { name: 'svelte', display: 'JavaScript', color: yellow },
  //     { name: 'svelte-ts', display: 'TypeScript', color: blue },
  //     { name: 'custom-svelte-kit', display: 'SvelteKit ↗', color: red, customCommand: 'npm create svelte@latest TARGET_DIR' },
  //   ],
  // },
  // {
  //   name: 'others',
  //   display: 'Others',
  //   color: reset,
  //   variants: [
  //     { name: 'create-vite-extra', display: 'create-vite-extra ↗', color: reset, customCommand: 'npm create vite-extra@latest TARGET_DIR' },
  //   ],
  // },
]

export default frameworks
