import js from '@eslint/js'
import pluginVue, { rules } from 'eslint-plugin-vue'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  {
    rules:{
      'vue/multi-word-component-names':0,//不要强制要求组件命名
    }
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
]
