import React from 'react'
import { Form, Col, Row, DatePicker } from 'antd';
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
    console.log(fieldsValue)
    const values = {
      ...fieldsValue,
      'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
    };
    console.log('Received values of form: ', values);
};

const AssignmentFrag = () => {

    const { RangePicker } = DatePicker

    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
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
                    <Form.Item name="range-picker" id="range-picker" label="Tanggal DO" htmlFor='bldat' {...rangeConfig}>
                        {/* <InputForm type="rangepicker" name="bldat" id="bldat"></InputForm> */}
                        
                        <RangePicker id="bldat" name="bldat" />
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