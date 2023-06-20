import React from 'react'
import { Form, Col, Row } from 'antd';
import InputForm from '../Elements/Input/InputForm';
import ButtonElement from '../Elements/Button/Button';

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
};
const rangeConfig = {
    rules: [
        {
            type: 'array',
            message: 'Please select time!',
        },
    ],
};
const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const rangeValue = fieldsValue['range-picker'];
    const values = {
      ...fieldsValue,
      'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
    };
    console.log('Received values of form: ', values);
};

const AssignmentFrag = () => {
    return (
        <Form
            name="time_related_controls"
            {...formItemLayout}
            onFinish={onFinish}
            style={{
            maxWidth: 1300,
            }}
        >
            <Row gutter={[16, 16]}>
                <Col span={12} key={1} pull={2}>
                    <Form.Item name="range-picker" label="Tanggal DO" {...rangeConfig}>
                        <InputForm type="rangepicker"></InputForm>
                    </Form.Item>
                </Col>
                <Col span={12} key={2} pull={7}>
                    <Form.Item
                        wrapperCol={{
                            xs: { span: 24, offset: 0 },
                            sm: { span: 16, offset: 8 },
                        }}
                    >
                        <ButtonElement>Submit</ButtonElement>
                    </Form.Item>
                </Col>    
            </Row>      
        </Form>
    )
}

export default AssignmentFrag