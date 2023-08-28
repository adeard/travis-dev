import React from 'react'
import { Input, DatePicker } from 'antd';

const InputForm = props => {
  const {type, style = '', name = ""} = props

  switch (type) {
    case "textarea":
      return (<Input.TextArea style={style} />)
    case "password":
      return (<Input.Password />)
    case "rangepicker":
      const { RangePicker } = DatePicker
      return (<RangePicker id={name} name={name} />)
    default:
      return (<Input />)
  }
}

export default InputForm