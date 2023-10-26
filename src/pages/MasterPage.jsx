import React from 'react'
import { Tabs } from 'antd';
import { UserOutlined, CarOutlined } from '@ant-design/icons';
import ContentLayout from '../components/Layouts/ContentLayout'
import DriverTabLayout from '../components/Layouts/DriverTabLayout';
import VehicleTabLayout from '../components/Layouts/VehicleTabLayout';

const MasterPage = () => {
    return (
        <ContentLayout current_page="master">
            <Tabs
                defaultActiveKey="1"
                items={[
                    {
                        label: (<span><UserOutlined /> Supir</span>),
                        key: 1,
                        children: <DriverTabLayout />,
                    },
                    {
                        label: (<span><CarOutlined /> Kendaraan</span>),
                        key: 2,
                        children: <VehicleTabLayout />,
                    }
                ]}
            />
        </ContentLayout>
        
    )
}

export default MasterPage