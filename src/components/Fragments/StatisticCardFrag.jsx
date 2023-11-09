import React from 'react'
import { 
    DatabaseFilled, 
    SoundFilled, 
    RocketFilled, 
    HomeFilled, 
    CheckCircleFilled ,
    MessageFilled
} from '@ant-design/icons';
import { Col } from 'antd';
import TaskCard from '../Elements/Card/TaskCard';

const StatisticCardFrag = (props) => {
    const {
        startedTotal, 
        arrivedTotal, 
        assignedTotal, 
        completedTotal, 
        unassignedTotal, 
        notifyDriverTotal
    } = props;

    const cardList = [
        {
            style: { backgroundColor:"rgba(255, 99, 132, 0.2)" },
            title: "Unassigned",
            value: unassignedTotal,
            prefix: <MessageFilled />
        },
        {
            style: { backgroundColor:"rgba(255, 159, 64, 0.2)" },
            title: "Assigned",
            value: assignedTotal,
            prefix: <DatabaseFilled />
        },
        {
            style: { backgroundColor:"rgba(255, 205, 86, 0.2)" },
            title: "Notify Driver",
            value: notifyDriverTotal,
            prefix: <SoundFilled />
        },
        {
            style: { backgroundColor:"rgba(75, 192, 192, 0.2)" },
            title: "Started",
            value: startedTotal,
            prefix: <RocketFilled />
        },
        {
            style: { backgroundColor:"rgba(153, 102, 255, 0.2)" },
            title: "Arrived",
            value: arrivedTotal,
            prefix: <HomeFilled />
        },
        {
            style: { backgroundColor:"rgba(54, 162, 235, 0.2)" },
            title: "Completed",
            value: completedTotal,
            prefix: <CheckCircleFilled />
        },
    ]

    return (
        <>
            {cardList.map((task) => (                                
                <Col span={4}>
                    <TaskCard 
                        style={task.style} 
                        title={task.title}
                        value={task.value}
                        prefix={task.prefix}
                    />
                </Col>
            ))}    
        </>   
    )
}

export default StatisticCardFrag