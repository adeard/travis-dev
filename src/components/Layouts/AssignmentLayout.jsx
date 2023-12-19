import React, { useState, useEffect } from 'react'
import { Col, Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import AssignmentFrag from '../Fragments/AssignmentFrag';
import TabMenu from '../Elements/Menu/TabMenu';
import { getTask } from '../../api/task.service';
import { filterAssignmentDate, updateTaskList } from '../../redux/slices/dateSlice';

const AssignmentLayout = () => {    
    const dispatch = useDispatch()
    const [posts, setPosts] = useState([]);
    const dateStatistic = useSelector((state) => state.date_statistic)
    const serializedData = localStorage.getItem("logged_user");

    useEffect(() => {
        let loggedUser = JSON.parse(serializedData);

        dispatch(filterAssignmentDate({task_status:"PENDING", vendor_id:loggedUser.code}))
        dispatch(updateTaskList({is_update:1}))
        // eslint-disable-next-line
    }, [])

    useEffect(() => {        
        if (!dateStatistic.task_status || dateStatistic.is_update === 0) {
            return
        }

        dispatch(updateTaskList({is_update:0}))

        getTask(dateStatistic, (status, result) => {
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