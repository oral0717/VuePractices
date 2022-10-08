# 注意
1. 放置服务器前，需要将config/index.js修改静态文件相对路径
  assetsPublicPath: '/'改为
  assetsPublicPath: './'
  然后打包，打包成功后放到服务器上可以访问
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
## vue-cli生成项目
```js
npm install --global vue-cli // 全局安装vue-cli, 版本老，vue -V => 2.9.6
vue init webpack my-project // 创建一个基于webpack模板的新项目my-project
cd my-project
npm install
npm run dev
```

```js
cnpm install -g @vue/cli  // vue -V => 4.5.9
vue create xxx
```
生成项目代码过程中：
? Vue build // 选择采用的编译形式
> Runtime + Compiler: recommended for most users // 运行时编译，（推荐）
  Runtime-only：... // 运行时普通情况下的编译

## vue-cli生成的初级项目代码介绍
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
# Vue v2.5.2
## 基础学习：demo1
<div id="app">{{message}}</div>
<div id="app">
  <span v-bind:title="message2">鼠标hove我几秒钟出现气泡信息</span>
</div>
<div id="app">
  <p v-if="seen">是否能看到我</p>
</div>
<div id="app">
  <ul>
    <li v-for="todo in todos">{{todo.text}}</li>
  </ul>
</div>
<div id="app">
  <button v-on:click="change">点击我</button>
</div>
<div id="app">
  <p>{{ message }}</p>
  <input v-model="message" /><!-- v-model实现表单输入和应用状态之间的双向绑定 -->
</div>

```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'hello',
    message2: '这里是气泡信息',
    seen: false,
    todos: [
      {text: 'learn js'},
      {text: 'learn react'},
      {text: 'learn vue'}
    ]
  },
  methods: {
    change: function(){}
  }
})
```

## 组件化
1. 注册组件
<div id='app'>
  <ul>
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    ></todo-item>
  <ul>
</div>

```js
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})
var app = new Vue({
  el: "#app",
  data: {
    groceryList: [
      { id: 1, text: 'a'},
      { id: 2, text: 'b'},
      { id: 3, text: 'c'},
    ]
  }
})
```
## Vue实例
1. var vm = new Vue({

})
2. 一定要为数据创建初始值
3. 实例的属性和方法，加前缀`$`,自定义的属性没有`$`

## 语法
1. {{}}
2. v-once 一次性插值
3. v-html="" 识别html,绝不要对用户提供的内容使用插值,否则导致XSS攻击
4. v-bind:xx="", xx是html元素属性
5. v-if="", v-else="", v-else-if=""
6. v-on:xx="", xx是dom事件
7. v-on:submit.prevent="onSubmit", .prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：
8. key,管理可复用的元素
9. v-show=""，始终会被渲染并保留在 DOM 中，切换display,v-show 不支持 <template> 元素，也不支持 v-else。
10. v-for="(item,index) in items", 当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。
    <div v-for="(item,index) of items" :key="item.id"></div> , of与in作用相同，遍历数组
    <div v-for="(value,key,index) in Object" :key="item.id"></div>,在遍历对象时，是按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下是一致的
    <span v-for="n in 4">{{ n }} </span> // 取整数1，2，3，4

11. Vue.set()
    vm.$set()
12. v-model=""  //input，textarea上使用，创建双向数据绑定
    如果 v-model 表达式的初始值未能匹配任何选项，<select> 元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。
    因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐[像上面](https://cn.vuejs.org/v2/guide/forms.html)这样提供一个值为空的禁用选项。
13. v-text=""
14. is=""
15. <comp some-prop="1"></comp> // 传递字符串"1"
    <comp v-bind:some-prop="1"></comp>// 传递数字1， 使用v-bind，值当做js表达式计算





## 缩写
1. `v-bind:href="url"`, 缩写 `:href="url"`
2. `v-on:click="dosth"`, 缩写 `@click="dosth"`

## 计算属性
1. computed:{

}
## 方法
2. methods: {

}
## 侦听属性
3. watch: {

}

## vue项目加入element-ui
  1. 安装 yarn add element-ui
  2. 修改 .babelrc
      {
        "presets": [["es2015", { "modules": false }]],
        "plugins": [
          [
            "component",
            {
              "libraryName": "element-ui",
              "styleLibraryName": "theme-chalk"
            }
          ]
        ]
      }
  3. 安装包：yarn add babel-plugin-component -D
            yarn add babel-preset-env -D
            yarn add babel-preset-es2015 -D
  4. 组件内使用：
      import Vue from 'vue'
      import { Button } from 'element-ui'
      import 'element-ui/lib/theme-chalk/index.css'
      Vue.use(Button)

      <el-button type="success">默认按钮</el-button>

## vue项目加入iconfont， [iconfont网站](www.iconfont.cn)
  1. 访问网站，登录
  2. 选中图表加入购物车
  3. 去购物车将选中的icon生成线上css文件
  4. 将线上文件放入html模板文件index.html中
  5. 在组件中直接使用<i class="icon iconfont 图标名"></i>

## Vue3.0
```js
import {
  reactive, // 生成响应式数据
  toRefs,
  computed,
  onMounted, // 组件挂载
  onUnmounted // 组件销毁
} from 'vue'
export default {
  name: '',
  setup() {
    const state = reactive({
      id: 1,
      name: ''
    })
    const methods = {
      change1() {},
      change2() {}
    }
    return {
      ...toRefs(state), // es6的解构会取消双向数据绑定的特性，toRefs转为响应式数据
      ...methods
    }
  }
}
```
## 简写snippet
vb  生成vue组件

## vue3+vite

