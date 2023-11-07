import React, {useState, useEffect} from 'react'
import { Tabs } from 'antd';
import { BookTwoTone, CarTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import TabContent from '../../Fragments/TabContent';
import { getTask } from '../../../api/task.service';

const TabMenu = (props) => {
    const { daterange, updateDateRange } = props
    const [posts, setPosts] = useState([]);
    const [taskStatus, setTaskStatus] = useState("PENDING");
    const [updateData, setUpdateData] = useState(false);
    const serializedData = localStorage.getItem("logged_user");
    
    let loggedUser = JSON.parse(serializedData);
    let requestParams = {
        start_date : daterange.start,
        end_date : daterange.end,
        vendor_id : loggedUser.code,
    }

    const handleClick = (values) => {        
        switch (values) {
            case 2:
                setTaskStatus("PROCESS")
                requestParams.task_status = "PROCESS"
                break;
            case 3:
                setTaskStatus("COMPLETE")
                requestParams.task_status = "COMPLETE"
                break;        
            default:
                setTaskStatus("PENDING")
                requestParams.task_status = "PENDING"
                break;
        }

        getTask(requestParams, (status, result) => {
            if (status) {
                setPosts(result);
            } else {
                console.log(result)
            }
        })

        props.handleDateRange(true)
    }

    if (updateDateRange) {
        requestParams.task_status = taskStatus

        getTask(requestParams, (status, result) => {
            if (status) {
                setPosts(result);
            } else {
                console.log(result)
            }
        })

        props.handleDateRange(true)
    }

    if (updateData) {
        requestParams.task_status = taskStatus

        getTask(requestParams, (status, result) => {
            if (status) {
                setPosts(result);
            } else {
                console.log(result)
            }
        })
        setUpdateData(false)
    }

    useEffect(() => {
        requestParams.task_status = "PENDING"
        getTask(requestParams, (status, result) => {
            if (status) {
                setPosts(result);
            } else {
                console.log(result)
            }
        })
        // eslint-disable-next-line
    }, []);

    return (
        <Tabs
            onTabClick={handleClick}
            defaultActiveKey="1"
            items={[
                {
                    label: ( <span><BookTwoTone /> Pending</span> ),
                    key: 1,
                    children: <TabContent tab_type="pending" posts={posts} updateData={setUpdateData}></TabContent>,
                },
                {
                    label: ( <span><CarTwoTone /> Process</span>),
                    key: 2,
                    children: <TabContent tab_type="process" posts={posts}></TabContent>,
                },
                {
                    label: ( <span><CheckCircleTwoTone /> Complete</span>),
                    key: 3,
                    children: <TabContent tab_type="done" posts={posts}></TabContent>,
                },
            ]}
        />
    )
}

export default TabMenu