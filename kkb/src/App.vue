<template>
  <div>
    <router-link to="/" name="home">首页</router-link>
    <router-link to="/cart" name="cart">购物车</router-link>
    <router-view/>
  </div>

</template>

<script>
export default {
}
</script>