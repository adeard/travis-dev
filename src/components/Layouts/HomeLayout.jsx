import React, { useEffect, useState } from 'react'
import { Row, DatePicker, Col } from 'antd';
import { getTaskStatistic, getTaskStatisticByDate } from '../../api/task.service';
import StatisticCardFrag from '../Fragments/StatisticCardFrag';
import StaticBar from '../Elements/Chart/StatisticBar';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const HomeLayout = () => {
    const { RangePicker } = DatePicker

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

    const handleChange = (values) => {

        if (values) {
            requestParams.start_date = values[0].format('YYYY-MM-DD') 
            requestParams.end_date = values[1].format('YYYY-MM-DD')
        }
        
        getTaskStatistic(requestParams, (status, result) => {
            if (status) {
                setUnassignedTotal(0)
                setAssignedTotal(0)
                setNotifyDriverTotal(0)
                setStartedTotal(0)
                setArrivedTotal(0)
                setCompletedTotal(0)
                
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
                <Col span={8}>
                </Col>            
                <Col span={8}>
                    <RangePicker id="date_range_statistic" name="date_range_statistic" onChange={handleChange} />                              
                </Col>
                <Col span={8}>
                </Col>       
            </Row>
            <br />
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