<template>
  <el-date-picker
    v-model="datePickerData.value"
    :editable="false"
    :type="datePickerData.type"
    :range-separator="datePickerData.rangeSepatator"
    :start-placeholder="datePickerData.startPlaceholder"
    :end-placeholder="datePickerData.endPlaceholder"
    :size="datePickerData.size"
    :style="datePickerData.style"
    :clearable="datePickerData.clearable"
    :disabled="datePickerData.disabled"
    :value-format="datePickerData.valueFormat"
    @change="change"
  >
  </el-date-picker>
</template>

<script>

export default {
  name: 'Select',
  props: {
    datePickerData: {
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