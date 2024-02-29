import React, { useState, useEffect } from 'react'
import { List } from 'antd';
import { Link } from "react-router-dom";
import { BookTwoTone } from '@ant-design/icons';
import { useDispatch } from 'react-redux'
import { getTaskView } from '../../api/task.service';
import { filterDate } from '../../redux/slices/dateSlice';

const PendingTaskListHomeFrag = () => {

    const dispatch = useDispatch()
    const serializedData = localStorage.getItem("logged_user");
    const [pendingTask, setPendingTask] = useState([])

    let requestParams = {}

    if (serializedData) {
        let loggedUser = JSON.parse(serializedData);

        requestParams.vendor_id = loggedUser.code.split("_")[1]
    }

    useEffect(() => {
        dispatch(filterDate(requestParams))

        getTaskView({'task_status': "PENDING", "limit":5, "vendor_id": requestParams.vendor_id}, (status, result) => {
            if (status) {
                setPendingTask(result);
            } else {
                console.log(result)
            }
        })

        // eslint-disable-next-line
    }, [])

    return (
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
    )
}

export default PendingTaskListHomeFrag