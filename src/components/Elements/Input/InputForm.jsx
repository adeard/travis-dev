import React from 'react'
import { Input, DatePicker } from 'antd';

const InputForm = props => {
  const {type, style = ''} = props

  switch (type) {
    case "textarea":
      return (<Input.TextArea style={style} />)
    case "password":
      return (<Input.Password />)
    case "rangepicker":
      const { RangePicker } = DatePicker
      return (<RangePicker />)
    default:
      return (<Input />)
  }
}

export default InputForm