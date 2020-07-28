<template>
  <div class="frame">
    <heander>
      <h2>
        <slot name="header">title</slot>
      </h2>
      <h3>
        <slot name="demo">demo</slot>
      </h3>
    </heander>
    <section>section</section>
    <slot>默认</slot>
    <footer>footer</footer>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  }
}
</script>