import React, { useEffect } from 'react'
import { Row, DatePicker, Col } from 'antd';
import { useDispatch } from 'react-redux'
import StatisticCardFrag from '../Fragments/StatisticCardFrag';
import StatisticBarFrag from '../Fragments/StatisticBarFrag';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { filterDate } from '../../redux/slices/dateSlice';

dayjs.extend(customParseFormat);

const HomeLayout = () => {
    const { RangePicker } = DatePicker
    const dispatch = useDispatch()
    const serializedData = localStorage.getItem("logged_user");

    let requestParams = {}

    if (serializedData) {
        let loggedUser = JSON.parse(serializedData);

        requestParams.vendor_id = loggedUser.code
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
                <StatisticCardFrag />
            </Row>
            <br />
            <Row gutter={16}>                
                <StatisticBarFrag />
            </Row>
        </>
    )
}

export default HomeLayout