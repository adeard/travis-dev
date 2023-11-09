import React, { useEffect, useState } from 'react'
import { Row } from 'antd';
import { getTaskStatistic, getTaskStatisticByDate } from '../../api/task.service';
import StatisticCardFrag from '../Fragments/StatisticCardFrag';
import StaticBar from '../Elements/Chart/StatisticBar';

const HomeLayout = () => {
    const [startedTotal, setStartedTotal] = useState(0)
    const [arrivedTotal, setArrivedTotal] = useState(0)
    const [assignedTotal, setAssignedTotal] = useState(0)
    const [completedTotal, setCompletedTotal] = useState(0)    
    const [unassignedTotal, setUnassignedTotal] = useState(0)
    const [notifyDriverTotal, setNotifyDriverTotal] = useState(0)
    const [statisticTaskDate, setStatisticTaskDate] = useState([])
    const serializedData = localStorage.getItem("logged_user");
   
    let requestParams = {}

    if (serializedData) {
        let loggedUser = JSON.parse(serializedData);

        requestParams.vendor_id = loggedUser.code
    }

    useEffect(() => {
        getTaskStatistic(requestParams, (status, result) => {
            if (status) {
                result.forEach(element => {                    
                    switch (element.task_status) {
                        case "UNASSIGNED":
                            setUnassignedTotal(element.total_task)
                            break;
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

        getTaskStatisticByDate(requestParams, (status, result) => {
            if (status) {
                setStatisticTaskDate(result)
            } else {
                console.log(result)
            }
        })
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Row gutter={16}>
                <StatisticCardFrag 
                    startedTotal={startedTotal} 
                    arrivedTotal={arrivedTotal}
                    assignedTotal={assignedTotal}
                    completedTotal={completedTotal}
                    unassignedTotal={unassignedTotal}
                    notifyDriverTotal={notifyDriverTotal} />
            </Row>
            <br />
            <Row gutter={16}>                
                <StaticBar statisticTaskDate={statisticTaskDate} />
            </Row>
        </>
    )
}

export default HomeLayout