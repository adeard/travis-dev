import React from 'react'
import { Tabs } from 'antd';
import { AppleOutlined } from '@ant-design/icons';
import TabContent from './TabContent';

const TabMenu = (props) => {
    const { daterange } = props
    return (
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
                    children: <TabContent tab_type="pending" start={daterange.start} end={daterange.end}></TabContent>,
                },
                {
                    label: (
                    <span>
                        <AppleOutlined />
                        Proses
                    </span>
                    ),
                    key: 2,
                    children: <TabContent tab_type="process"></TabContent>,
                },
                {
                    label: (
                    <span>
                        <AppleOutlined />
                        Selesai
                    </span>
                    ),
                    key: 3,
                    children: <TabContent tab_type="done"></TabContent>,
                },
            ]}
        />
    )
}

export default TabMenu