import React, { useState, useEffect } from 'react'
import { Col, Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import AssignmentFrag from '../Fragments/AssignmentFrag';
import TabMenu from '../Elements/Menu/TabMenu';
import { getTaskVolum } from '../../api/task.service';
import { filterAssignmentDate, updateTaskList } from '../../redux/slices/dateSlice';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const AssignmentLayout = () => {    
    const dispatch = useDispatch()
    const [posts, setPosts] = useState([]);
    const dateStatistic = useSelector((state) => state.date_statistic)
    const serializedData = localStorage.getItem("logged_user");

    useEffect(() => {
        let loggedUser = JSON.parse(serializedData);

        dispatch(filterAssignmentDate({
            task_status:"PENDING", 
            vendor_id:loggedUser.code.split("_")[1],
            start_date : dayjs().add(-30, 'day').format("YYYY-MM-DD"),  
            end_date : dayjs().format("YYYY-MM-DD")
        }))
        dispatch(updateTaskList({is_update:1}))
        // eslint-disable-next-line
    }, [])

    useEffect(() => {        
        if (!dateStatistic.task_status || dateStatistic.is_update === 0) {
            return
        }

        dispatch(updateTaskList({is_update:0}))

        getTaskVolum(dateStatistic, (status, result) => {
            if (status) {
                setPosts(result);
            } else {
                console.log(result)
            }
        })
        // eslint-disable-next-line
    }, [dateStatistic]);

    return (
        <div>
            <Row>
                <Col span={24}>
                    <AssignmentFrag></AssignmentFrag>
                </Col>
            </Row>  
            <Row>
                <Col span={24}>
                    <TabMenu posts={posts} />
                </Col>
            </Row>
        </div>
    )
}

export default AssignmentLayout