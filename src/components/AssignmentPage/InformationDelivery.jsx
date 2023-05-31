import React from 'react'
import { Tabs } from 'antd';
import { AppleOutlined } from '@ant-design/icons';
import InformationDeliveryTab from './InformationDeliveryTab';

export default function InformationDelivery() {
    return (
        <Tabs
            defaultActiveKey="1"
            items={[
                {
                    label: (
                    <span>
                        <AppleOutlined />
                        Informasi Pengiriman
                    </span>
                    ),
                    key: 1,
                    children: <InformationDeliveryTab />,
                }
            ]}
        />
    )
}
