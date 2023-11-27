import React from 'react'
import { Form, Col, Row, DatePicker, Button } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const AssignmentFrag = (props) => {
    const { RangePicker } = DatePicker

    const formItemLayout = {
        name:"time_related_controls",
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
    };

    const onFinish = (fieldsValue) => {
        // Should format date value before submit.
        let rangeValue = []
        let data = {
            start : "",
            end : ""
        }

        if (fieldsValue['range-picker']) {
            rangeValue = fieldsValue['range-picker'];
            data = {
                start :rangeValue[0].format('YYYY-MM-DD'),
                end : rangeValue[1].format('YYYY-MM-DD')
            }    
        }

        props.dateRangeValue(data)
    };

    return (
        <Form            
            {...formItemLayout}
            onFinish={onFinish}
        >
            <Row>
                <Col span={8} key={1}>
                    <Form.Item                    
                    name="range-picker" 
                    id="range-picker" 
                    label="Tanggal DO" 
                    htmlFor='bldat' 
                    >
                        <RangePicker id="bldat" name="bldat" />
                    </Form.Item>
                </Col>
                <Col span={2} key={2}>
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