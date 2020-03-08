## P6-1
```
npm install --global vue-cli // 全局安装vue-cli
vue init webpack my-project // 创建一个基于webpack模板的新项目my-project
cd my-project
npm install
npm run dev
```
生成项目代码过程中：
? Vue build // 选择采用的编译形式
> Runtime + Compiler: recommended for most users // 运行时编译，（推荐）
  Runtime-only：... // 运行时普通情况下的编译

## P6-2项目代码介绍
  index.html // 项目首页模板文件
  static //静态资源
  src//源代码
    main.js//入口
    App.vue//根组件
    router//所有路由
    assets//图片
  config
    index.js//基础配置
    dev.env.js//开发环境的配置
    prod.env.js//生产环境的配置
  build //项目打包的配置文件
  package.json
    dependencies: vue vue-router
## P6-3单文件组件和Vue中的路由
  1. <router-link to=""></router-link>
  2. Vue.use(router)
  3. <router-view/>
  4. 子路由注入：children
  5. 参数传递
    1. name传递(不实用，不常用)
        路由组件上配置name属性
        有子路由的路由没有name属性，由子路由的name来传值，取值{{ $route.name }}
    2. <router-link to="">标签上传值（官方推荐常用）：
      <router-link :to="{name: "路由组件注入的name", params: {username: 'oral'}}">
      指定组件上取值{{$route.params.username}}
    3. url传参
      1. <router-link to='/hi/123/do my best'>hi页</router-link>
      2. {
          path: '/hi/:id(\\d+)/:slogan', //参数后直接加（），里面写入正则，约束参数规则
          component: Hi
        }
      3. <div>{{ $route.params.id }}</div>
        <div>{{ $route.params.slogan }}</div>

  6. 多个模块<router-view/>，只能允许一个不加name
    <router-view/>
    <router-view name='left'/>
    <router-view name='right'/>
    {
      path: '/',
      name: 'HelloWorld',
      components: {  // 此处必为复数
        default: HelloWorld,
        left: Hi,
        right: Hi2
      }
    }
  7. 重定向 redirect
    1. <router-link to='/goHome'>返回首页</router-link>
      <router-link to='/goHi/456/never give up, fight!'>返回hi页</router-link>
    2. {
        path: '/goHome',
        redirect: '/'
      }, {
        path: '/goHi/:id(\\d+)/:slogan',
        redirect: '/hi/:id(\\d+)/:slogan'
      }




# todo
1. Vue.config.productionTip = false












