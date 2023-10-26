import React from 'react'
import { Tabs } from 'antd';
import { BookTwoTone, CarTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import TabContent from '../../Fragments/TabContent';

const TabMenu = (props) => {
    const { daterange } = props
    return (
        <Tabs
            defaultActiveKey="1"
            items={[
                {
                    label: ( <span><BookTwoTone /> Pending</span> ),
                    key: 1,
                    children: <TabContent tab_type="pending" start={daterange.start} end={daterange.end}></TabContent>,
                },
                {
                    label: ( <span><CarTwoTone /> Process</span>),
                    key: 2,
                    children: <TabContent tab_type="process" start={daterange.start} end={daterange.end}></TabContent>,
                },
                {
                    label: ( <span><CheckCircleTwoTone /> Complete</span>),
                    key: 3,
                    children: <TabContent tab_type="done" start={daterange.start} end={daterange.end}></TabContent>,
                },
            ]}
        />
    )
}

export default TabMenu