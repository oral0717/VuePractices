<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData.dataList"
      border
      @selection-change="handleSelectionChange">
      <el-table-column
        v-for="item in tableData.tableColumn"
        :type="item.type"
        :key="item.id"
        :prop="item.prop"
        :label="item.label"
      />
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'Table',
  props: {
    tableData: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  methods: {
    handleSelectionChange(...rest) {
      console.log('所有参数', rest)
      // this.$emit('change', rest)
    }
  }
}
</script>