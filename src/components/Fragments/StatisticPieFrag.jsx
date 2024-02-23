import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getTaskStatistic } from '../../api/task.service';
import StatisticPie from '../Elements/Chart/StatisticPie';

const StatisticPieFrag = () => {
    const [startedTotal, setStartedTotal] = useState(0)
    const [arrivedTotal, setArrivedTotal] = useState(0)
    const [assignedTotal, setAssignedTotal] = useState(0)
    const [completedTotal, setCompletedTotal] = useState(0)    
    const [notifyDriverTotal, setNotifyDriverTotal] = useState(0)
    const dateStatistic = useSelector((state) => state.date_statistic)

    useEffect(() => {
        console.log("masuk")
        setAssignedTotal(0)
        setNotifyDriverTotal(0)
        setStartedTotal(0)
        setArrivedTotal(0)
        setCompletedTotal(0)

        getTaskStatistic(dateStatistic, (status, result) => {
            if (status) {
                result.forEach(element => {                    
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
            } else {
                console.log(result)
            }
        })
        // eslint-disable-next-line
    }, [])

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
            borderColor: [
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