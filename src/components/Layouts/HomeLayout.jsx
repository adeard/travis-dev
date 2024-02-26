import React, { useEffect, useState } from 'react'
import { Row, DatePicker, Col, List } from 'antd';
import { useDispatch } from 'react-redux'
import StatisticCardFrag from '../Fragments/StatisticCardFrag';
import StatisticBarFrag from '../Fragments/StatisticBarFrag';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { filterDate } from '../../redux/slices/dateSlice';
import StatisticPieFrag from '../Fragments/StatisticPieFrag';
import { BookTwoTone, CarTwoTone } from '@ant-design/icons';
import { getTaskView } from '../../api/task.service';
import { Link } from "react-router-dom";

dayjs.extend(customParseFormat);

const HomeLayout = () => {
    const { RangePicker } = DatePicker
    const dispatch = useDispatch()
    const serializedData = localStorage.getItem("logged_user");
    const [pendingTask, setPendingTask] = useState([])
    const [processTask, setProcessTask] = useState([])

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
        dispatch(filterDate(requestParams))

        getTaskView({'task_status': "PENDING", "limit":5}, (status, result) => {
            if (status) {
                setPendingTask(result);
            } else {
                console.log(result)
            }
        })

        getTaskView({'task_status': "PROCESS", "limit":5}, (status, result) => {
            if (status) {
                setProcessTask(result);
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
                <Col span={24}>
                    <StatisticCardFrag />
                </Col>                
            </Row>
            <br />
            <Row gutter={8}>   
                <Col span={8}>
                    <br />
                    <Row justify='center' style={{height:'300px'}}>
                        <StatisticPieFrag />
                    </Row>
                </Col>    
                <Col span={16}>
                    <br />
                    <Row justify='center' style={{height:'300px'}}>
                        <StatisticBarFrag />                    
                    </Row>                    
                </Col>     
            </Row>
            <br />
            <Row gutter={16}>
                <Col span={12}>
                    <h3>
                        Pending Task
                    </h3>
                    <List
                    size='small'
                        itemLayout="horizontal"
                        dataSource={pendingTask}
                        renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                            avatar={<BookTwoTone />}
                            title={<Link to={`/information-delivery/${item.task_id}`}>{item.task_id}</Link>}
                            description={<span>{item.task_date} {item.task_status} {item.jenis_kirim}</span>}
                            />
                        </List.Item>
                        )}
                    />
                </Col>
                <Col span={12}>
                    <h3>
                        Process
                    </h3>
                    <List
                    size='small'
                        itemLayout="horizontal"
                        dataSource={processTask}
                        renderItem={(item) => (
                            <List.Item>
                            <List.Item.Meta
                            avatar={<CarTwoTone />}
                            title={item.task_id}
                            description={<span>{item.task_date} {item.task_status} {item.jenis_kirim}</span>}
                            />
                        </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </>
    )
}

export default HomeLayout