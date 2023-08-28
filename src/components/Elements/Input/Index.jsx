import React from 'react'
import { Form } from 'antd';
import InputForm from './InputForm';

const Index = (props) => {
    const {label, name, rules = "", type = "", style = ""} = props
    return (
        <Form.Item
        label={label}
        name={name}
        rules={rules}
        >
            <InputForm type={type} style={style}></InputForm>
        </Form.Item>
    )
}

export default Index