<template>
  <div>
    <div><Select :selectData="selectData" @change="changeSelectOption"/></div>
    <div><Input :inputData="inputData" @change="changeInputValue"/></div>
    <div><Input :inputData="inputData2" @change="changeInputValue"/></div>
    <div><DatePicker :datePickerData="datePickerData" @change="changeDatePickerData"/></div>
    <div><Radio :radioData="radioData" @change="changeRadio"/></div>
    <div><SelectItems :selectItemsData="selectItemsData" /></div>
  </div>
</template>

<script>
import Select from './Select'
import Input from './Input'
import DatePicker from './DatePicker'
import Radio from './Radio'
import SelectItems from './SelectItems'
export default {
  name: 'Form',
  components: {
    Select,
    Input,
    DatePicker,
    Radio,
    SelectItems
  },
  data() {
    return {
      selectData: {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '选项2', // Select组件默认项
        size: '', // medium/small/mini
        placeholder: '请选择',
        style: 'width: 400px;',
        clearable: true,
        disabled: false
      },
      inputData: {
        type: 'text',
        value: 'xx',
        placeholder: '请输入优惠券面额',
        text: '元',
        style: 'width: 400px',
        clearable: true,
        disabled: false,
        maxlength: 10,
        showWordLimit: true
      },
      inputData2: {
        type: 'textarea',
        value: 'xx',
        placeholder: '请输入优惠券面额',
        text: '元',
        style: 'width: 400px',
        autosize: { minRows: 4},
        clearable: true,
        disabled: false,
        maxlength: 160,
        showWordLimit: true
      },
      datePickerData: {
        value: [],
        type: "daterange",
        rangeSeparator: "至",
        startPlaceholder: "开始日期",
        endPlaceholder: "结束日期",
        valueFormat: "yyyy-MM-dd",
        style: 'width: 400px',
        clearable: true,
        disabled: false,
      },
      radioData: {
        currentLabel: 3,
        list: [
          {
            label: 1,
            text: '全场通用'
          },
          {
            label: 2,
            text: '指定分类'
          },
          {
            label: 3,
            text: '指定品牌'
          },
          {
            label: 4,
            text: '指定分类&品牌'
          }
        ],
        disabled: false
      },
      selectItemsData: {
        value: 1
      }
    }
  },
  methods: {
    changeSelectOption(...rest) {
      console.log('selectout', rest)
    },
    changeInputValue(...rest) {
      console.log('inputout', rest)
    },
    changeDatePickerData(...rest) {
      console.log('changeDataPickerDataout', rest)
    },
    changeRadio(...rest) {
      console.log('changeRadioout', rest)
    }
  }
}
</script>