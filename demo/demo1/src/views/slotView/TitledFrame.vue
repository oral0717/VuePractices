<template>
  <div class="frame">
    <header>
      <h2>
        <slot name="header">title</slot>
      </h2>
      <h3>
        <slot name="demo">demo</slot>
      </h3>
    </header>
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