import React from 'react'
import { 
    DatabaseFilled, 
    SoundFilled, 
    RocketFilled, 
    HomeFilled, 
    CheckCircleFilled 
} from '@ant-design/icons';
import { Col } from 'antd';
import TaskCard from '../Elements/Card/TaskCard';

const StatisticCardFrag = (props) => {
    const {
        startedTotal, 
        arrivedTotal, 
        assignedTotal, 
        completedTotal,
        notifyDriverTotal
    } = props;

    const cardList = [        
        {
            style: { backgroundColor:"#9ee493" },
            title: "Assigned",
            value: assignedTotal,
            prefix: <DatabaseFilled />
        },
        {
            style: { backgroundColor:"#FFC8DD" },
            title: "Notify Driver",
            value: notifyDriverTotal,
            prefix: <SoundFilled />
        },
        {
            style: { backgroundColor:"#e5b3fe" },
            title: "Started",
            value: startedTotal,
            prefix: <RocketFilled />
        },
        {
            style: { backgroundColor:"#BDE0FE" },
            title: "Arrived",
            value: arrivedTotal,
            prefix: <HomeFilled />
        },
        {
            style: { backgroundColor:"#6fffe9" },
            title: "Completed",
            value: completedTotal,
            prefix: <CheckCircleFilled />
        },
    ]

    return (
        <>
            <Col span={2}></Col>
            {cardList.map((task) => (                                
                <Col span={4} key={task.title}>
                    <TaskCard 
                        style={task.style} 
                        title={task.title}
                        value={task.value}
                        prefix={task.prefix}
                    />
                </Col>
            ))}    
            <Col span={2}></Col>
        </>   
    )
}

export default StatisticCardFrag