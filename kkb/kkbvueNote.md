1. 初级购物车功能
商品列表，加入购物车
购物车功能
2. 拆分购物车功能组件，将购物车功能组件，component/Cart.vue
props 用于接收来自父组件的数据
components: {Cart} 父组件引用子组件
this.$emit 子组件将事件传递给父组件，然后父组件去改变数据，驱动子组件渲染
  vm.$emit( event, […args] )
3. computed: {} 计算属性，所有需要通过计算的数据，一律用computed去计算，这样某个属性发生变化时，会一起联动
4. Vue.use(ElementUI) 加载插件
