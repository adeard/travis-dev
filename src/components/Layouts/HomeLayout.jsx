import React, { useEffect, useState } from 'react'
import { Row, DatePicker, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import StatisticCardFrag from '../Fragments/StatisticCardFrag';
import StatisticBarFrag from '../Fragments/StatisticBarFrag';
import dayjs from 'dayjs';
import { getTaskStatisticByDate, getTaskStatistic } from '../../api/task.service';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { filterDate } from '../../redux/slices/dateSlice';
import StatisticPieFrag from '../Fragments/StatisticPieFrag';
import PendingTaskListHomeFrag from '../Fragments/PendingTaskListHome';
import ProcessTaskListHomeFrag from '../Fragments/ProcessTaskListHome';

dayjs.extend(customParseFormat);

const HomeLayout = () => {
    const { RangePicker } = DatePicker
    const dispatch = useDispatch()
    const serializedData = localStorage.getItem("logged_user");
    const dateStatistic = useSelector((state) => state.date_statistic)
    const [statisticTask, setStatisticTask] = useState([])
    const [statisticTaskDate, setStatisticTaskDate] = useState({})

    let requestParams = {}

    if (serializedData) {
        let loggedUser = JSON.parse(serializedData);

        requestParams.vendor_id = loggedUser.code.split("_")[1]
    }

    const handleChange = (values) => {

        requestParams.start_date = ""
        requestParams.end_date = ""

        if (values) {
            requestParams.start_date =  values[0].format('YYYY-MM-DD') 
            requestParams.end_date = values[1].format('YYYY-MM-DD')
        }

        dispatch(filterDate(requestParams))
    }

    useEffect(() => {

        getTaskStatisticByDate(dateStatistic, (status, result) => {
            if (status) {
                setStatisticTaskDate(result)
            } else {
                console.log(result)
            }
        })

        getTaskStatistic(dateStatistic, (status, result) => {
            if (status) {
                setStatisticTask(result)
            } else {
                console.log(result)
            }
        })
        // eslint-disable-next-line
    }, [dateStatistic.vendor_id])

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
                <Col span={24}>
                    <StatisticCardFrag statisticTask={statisticTask} />
                </Col>                
            </Row>
            <br />
            <Row gutter={8}>   
                <Col span={8}>
                    <br />
                    <Row justify='center' style={{height:'300px'}}>
                        <StatisticPieFrag statisticTask={statisticTask} />
                    </Row>
                </Col>    
                <Col span={16}>
                    <br />
                    <Row justify='center' style={{height:'300px'}}>
                        <StatisticBarFrag statisticTaskDate = {statisticTaskDate} />                    
                    </Row>                    
                </Col>     
            </Row>
            <br />
            <Row gutter={16}>
                <Col span={12}>
                    <h3>Pending Task</h3>
                    <PendingTaskListHomeFrag />
                </Col>
                <Col span={12}>
                    <h3>Process</h3>
                    <ProcessTaskListHomeFrag />
                </Col>
            </Row>
        </>
    )
}

export default HomeLayout