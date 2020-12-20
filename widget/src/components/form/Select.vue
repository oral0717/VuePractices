<template>
  <el-select
    v-model="selectData.value"
    :size="selectData.size"
    :placeholder="selectData.placeholder || '请选择'"
    :style="selectData.style"
    :clearable="selectData.clearable"
    :disabled="selectData.disabled"
  >
    <el-option
      v-for="item in selectData.options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>

export default {
  name: 'Select',
  props: {
    selectData: {
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