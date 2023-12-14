import React from 'react'
import { Form, Col, Row, DatePicker, Button } from 'antd';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { filterAssignmentDate, updateTaskList } from '../../redux/slices/dateSlice';
dayjs.extend(customParseFormat);

const AssignmentFrag = () => {
    const { RangePicker } = DatePicker
    const serializedData = localStorage.getItem("logged_user");
    const dispatch = useDispatch()

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
        let loggedUser = JSON.parse(serializedData);
        let data = {
            start_date : "",
            end_date : "",
            vendor_id : loggedUser.code
        }

        if (fieldsValue['range-picker']) {
            rangeValue = fieldsValue['range-picker'];
            
            data.start_date = rangeValue[0].format('YYYY-MM-DD')
            data.end_date = rangeValue[1].format('YYYY-MM-DD') 
        }

        dispatch(filterAssignmentDate(data))
        dispatch(updateTaskList({is_update:1}))
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