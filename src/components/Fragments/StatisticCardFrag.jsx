import React, { useState, useEffect } from 'react'
import { 
    DatabaseFilled, 
    SoundFilled, 
    RocketFilled, 
    HomeFilled, 
    CheckCircleFilled 
} from '@ant-design/icons';
import { List } from 'antd';
import TaskCard from '../Elements/Card/TaskCard';

const StatisticCardFrag = (props) => {
    const { statisticTask } = props

    const [startedTotal, setStartedTotal] = useState(0)
    const [arrivedTotal, setArrivedTotal] = useState(0)
    const [assignedTotal, setAssignedTotal] = useState(0)
    const [completedTotal, setCompletedTotal] = useState(0)    
    const [notifyDriverTotal, setNotifyDriverTotal] = useState(0)

    useEffect(() => {

        setAssignedTotal(0)
        setNotifyDriverTotal(0)
        setStartedTotal(0)
        setArrivedTotal(0)
        setCompletedTotal(0)

        statisticTask.forEach(element => {                    
            switch (element.task_status) {
                case "ASSIGNED":
                    setAssignedTotal(element.total_task)
                    break;
                case "NOTIFY DRIVER":
                    setNotifyDriverTotal(element.total_task) 
                    break;
                case "STARTED":
                    setStartedTotal(element.total_task) 
                    break;
                case "ARRIVED":
                    setArrivedTotal(element.total_task) 
                    break;
                case "COMPLETED":
                    setCompletedTotal(element.total_task) 
                    break;
                default:
                    break;
            }
        });

        
        // eslint-disable-next-line
    }, [statisticTask])

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
        <List
            grid={{
            gutter: 16,
            column: 5,
            }}
            dataSource={cardList}
            renderItem={(task) => (
            <List.Item>
                <TaskCard 
                        style={task.style} 
                        title={task.title}
                        value={task.value}
                        prefix={task.prefix}
                    />
            </List.Item>
            )}
        />
    )
}

export default StatisticCardFrag