/*
 * @Descripttion:
 * @Author: Oral
 * @Date: 2022-07-29 13:55:14
 * @LastEditTime: 2022-07-29 17:08:18
 */
const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const Icons = require('unplugin-icons/webpack')
const { FileSystemIconLoader } = require('unplugin-icons/loaders')
const IconsResolver = require('unplugin-icons/resolver')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({ // element plus按需引用
        resolvers: [ElementPlusResolver()],
      }),
      Components({ // element plus按需引用
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
            prefix: 'icon',
            // 当图标集名字过长时，可使用集合别名
            alias: {
              system: 'system-uicons'
            },
            // 标识自定义图标集
            customCollections: ['home', 'about']
          })
        ],
      }),
      Icons({
        compiler: 'vue3',
        autoInstall: true, // 自动安装
        customCollections: {
          home: FileSystemIconLoader('src/assets/svg/home', svg => svg.replace(/^<svg /, '<svg fill="currentColor" ')),
          about: FileSystemIconLoader('src/assets/svg/about', svg => svg.replace(/^<svg /, '<svg fill="currentColor" ')),
        },
      }),
    ]
  },
  devServer: {
    allowedHosts: ['.test.com']
  }
})
