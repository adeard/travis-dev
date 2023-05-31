import React from 'react'
import { Button, DatePicker, Form, Col, Row, Tabs } from 'antd';
import { AppleOutlined } from '@ant-design/icons';
import PendingTab from './PendingTab';
import ProcessTab from './ProcessTab';
import DoneTab from './DoneTab';

const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
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

export default function Assignment() {

    return (
        <div>
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
                            <RangePicker />
                        </Form.Item>
                    </Col>
                    <Col span={12} key={2} pull={7}>
                        <Form.Item
                        wrapperCol={{
                            xs: {
                            span: 24,
                            offset: 0,
                            },
                            sm: {
                            span: 16,
                            offset: 8,
                            },
                        }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Col>    
                </Row>      
            </Form>

            <Row>
                <Col span={24}>
                    <Tabs
                        defaultActiveKey="1"
                        items={[
                            {
                                label: (
                                <span>
                                    <AppleOutlined />
                                    Pending
                                </span>
                                ),
                                key: 1,
                                children: <PendingTab />,
                            },
                            {
                                label: (
                                <span>
                                    <AppleOutlined />
                                    Proses
                                </span>
                                ),
                                key: 2,
                                children: <ProcessTab />,
                            },
                            {
                                label: (
                                <span>
                                    <AppleOutlined />
                                    Selesai
                                </span>
                                ),
                                key: 3,
                                children: <DoneTab />,
                            },
                        ]}
                    />
                </Col>
            </Row>
        </div>
    )
}
