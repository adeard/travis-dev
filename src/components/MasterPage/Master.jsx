import React from 'react'
import { Tabs } from 'antd';
import { AppleOutlined } from '@ant-design/icons';
import DriverTab from './DriverTab';
import VehicleTab from './VehicleTab';

export default function Master() {
  return (
    <Tabs
    defaultActiveKey="1"
    items={[
        {
            label: (
            <span>
                <AppleOutlined />
                Supir
            </span>
            ),
            key: 1,
            children: <DriverTab />,
        },
        {
            label: (
            <span>
                <AppleOutlined />
                Kendaraan
            </span>
            ),
            key: 2,
            children: <VehicleTab />,
        }
    ]}
    />
  )
}
