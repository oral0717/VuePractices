<template>
  <el-input
    v-model="inputData.value"
    :type="inputData.type"
    :placeholder="inputData.placeholder"
    :style="inputData.style"
    :clearable="inputData.clearable"
    :disabled="inputData.disabled"
    :maxlength="inputData.maxlength"
    :show-word-limit="inputData.showWordLimit"
    :autosize="inputData.autosize"
    @change="change"
  >
    <template v-if="inputData.text" slot="append">{{inputData.text}}</template>
    <el-button
      v-if="inputData.option"
      slot="append"
      :icon="inputData.icon"
      :loading="false"
      @click="handleClick"
    ></el-button>
  </el-input>
</template>

<script>

export default {
  name: 'Input',
  props: {
    inputData: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  methods: {
    change(...rest) {
      console.log('所有参数', rest)
      this.$emit('change', rest)
    },
    handleClick(e) {
      console.log(this.inputData.value, e)
    }
  }
}
</script>