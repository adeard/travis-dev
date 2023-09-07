import React from 'react'
import { Input, DatePicker, Form } from 'antd';

const InputForm = props => {
    const {type, style = {}, name = "", rules = {}, label = ""} = props
    let input = ""

    switch (type) {
        case "textarea":
            input = <Input.TextArea style={style} title={name} name={name} />
            break;
        case "password":
            input = <Input.Password title={name} name={name} autoComplete='off' />
            break;
        case "rangepicker":
            const { RangePicker } = DatePicker
            input = <RangePicker title={name} name={name} />
            break;
        default:
            input = <Input title={name} name={name} autoComplete='off' />
    }

    return (
        <Form.Item label={label} name={name} rules={rules}>
            {input}
        </Form.Item>
    )
}

export default InputForm