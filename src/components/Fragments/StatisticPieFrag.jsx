import React, { useState, useEffect } from 'react'
import StatisticPie from '../Elements/Chart/StatisticPie';

const StatisticPieFrag = (props) => {
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

    const state = {
        labels: ['Assigned', 'Notify Driver', 'Started', 'Arrived', 'Completed'],
        datasets: [
        {
            label: '# of Task',
            data: [assignedTotal, notifyDriverTotal, startedTotal, arrivedTotal, completedTotal],
            backgroundColor: [
              '#9ee493',
              '#FFC8DD',
              '#e5b3fe',
              '#BDE0FE',
              '#6fffe9',
            ],
            borderWidth: 1,
        },
    ]}

    return (
        <StatisticPie state={state} />  
    )
}

export default StatisticPieFrag