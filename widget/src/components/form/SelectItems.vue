<template>
  <div>
    <div><Input :inputData="inputData"/></div>
    <el-alert
      :title="`已选中 ${total} 个${title}`"
      type="warning"
      :description="`购买以下${title}商品可使用优惠券抵扣金额`"
      show-icon>
    </el-alert>
    <div style="width: 400px">
      <Table :tableData="tableData" />
    </div>
  </div>
</template>

<script>
import Input from './Input'
import Table from './Table'

export default {
  name: 'SelectItems',
  components: {
    Input,
    Table
  },
  props: {
    selectItemsData: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      title: '品牌',
      total: 1123,
      inputData: {
        type: 'text',
        value: 'xx',
        placeholder: '请输入优惠券面额',
        text: '',
        style: 'width: 400px',
        clearable: true,
        disabled: false,
        maxlength: 10,
        option: 'search',
        icon: 'el-icon-search',
        showWordLimit: true
      },
      tableData: {
        dataTotal: 2,
        dataList: [{
          name: '品牌1',
          dd: '分类1',
          id: 1,
          id3: 11
        },{
          name: '品牌2',
          dd: '分类2',
          id: 2,
          id3: 22
        }],
        tableColumn: [{
          type: 'selection',
          id: 0
        },{
          label: '名称',
          prop: 'name',
          id: 1
        },{
          label: '分类',
          prop: 'dd',
          id: 4
        },{
          label: 'ID2',
          prop: 'id',
          id: 2
        },{
          label: 'ID3',
          prop: 'id3',
          id: 3
        }]
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