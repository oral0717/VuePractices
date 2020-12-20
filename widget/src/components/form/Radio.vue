<template>
  <el-radio-group
    v-model="radioData.currentLabel"
    :disabled="radioData.disabled"
    @change="change"
  >
    <el-radio
      v-for="item in radioData.list"
      :key="item.label"
      :label="item.label"
    >{{item.text}}</el-radio>
  </el-radio-group>
</template>

<script>

export default {
  name: 'Select',
  props: {
    radioData: {
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
    }
  }
}
</script>