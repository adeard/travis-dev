import React from 'react'
import { Form, Col, Row, DatePicker, Button } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

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

const AssignmentFrag = (props) => {
    const { RangePicker } = DatePicker

    const onFinish = (fieldsValue) => {
        // Should format date value before submit.
        const rangeValue = fieldsValue['range-picker'];
        const values = {
          ...fieldsValue,
          'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        };
        console.log('Received values of form: ', values);

        const data = {
            start :rangeValue[0].format('YYYY-MM-DD'),
            end : rangeValue[1].format('YYYY-MM-DD')
        }

        props.dateRangeValue(data)
        props.isUpdate(true)
    };

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
                    <Form.Item                    
                    name="range-picker" 
                    id="range-picker" 
                    label="Tanggal DO" 
                    htmlFor='bldat' 
                    {...rangeConfig}>
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
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Col>    
            </Row>      
        </Form>
    )
}

export default AssignmentFrag