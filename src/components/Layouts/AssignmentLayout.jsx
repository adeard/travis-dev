import React, { useState, useEffect } from 'react'
import { Col, Row } from 'antd';
import AssignmentFrag from '../Fragments/AssignmentFrag';
import TabMenu from '../Elements/Menu/TabMenu';
import { getTask, updateTask } from '../../api/task.service';

const AssignmentLayout = () => {    
    const [posts, setPosts] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false)
    const [handleTabType, setHandleTabType] = useState("PENDING")
    const [dateRangeValue, setDateRangeValue] = useState({}); 
    const [updateDateRange, setUpdateDateRange] = useState(false)
    const [handleDateRange, setHandleDateRange] = useState(false)
    const [handleAssignDriver, setHandleAssignDriver] = useState()
    const [handleRejectDriver, setHandleRejectDriver] = useState()
    
    const serializedData = localStorage.getItem("logged_user");

    let loggedUser = JSON.parse(serializedData);
    let requestParams = {
        start_date : dateRangeValue.start,
        end_date : dateRangeValue.end,
        vendor_id : loggedUser.code,
    }

    if (isUpdate) {
        setIsUpdate(false)
        setUpdateDateRange(true)
    }

    if (handleDateRange) {
        setUpdateDateRange(false)
        setHandleDateRange(false)
    }

    

    useEffect(() => {
        requestParams.task_status = handleTabType
        getTask(requestParams, (status, result) => {
            if (status) {
                setPosts(result);
            } else {
                console.log(result)
            }
        })

        if (handleAssignDriver) {
            updateTask(handleAssignDriver, (status) => {            
                if (!status) {
                    console.log(status)
                }
            })

            getTask(requestParams, (status, result) => {
                if (status) {
                    setPosts(result);
                } else {
                    console.log(result)
                }
            })
        }

        if (handleRejectDriver) {
            updateTask(handleRejectDriver, (status) => {            
                if (!status) {
                    console.log(status)
                }
            })

            getTask(requestParams, (status, result) => {
                if (status) {
                    setPosts(result);
                } else {
                    console.log(result)
                }
            })
        }
        // eslint-disable-next-line
    }, [
        handleTabType, 
        dateRangeValue, 
        handleAssignDriver, 
        handleRejectDriver
    ]);

    return (
        <div>
            <Row>
                <Col span={24}>
                    <AssignmentFrag dateRangeValue={setDateRangeValue} isUpdate={setIsUpdate}></AssignmentFrag>
                </Col>
            </Row>  
            <Row>
                <Col span={24}>
                    <TabMenu 
                        daterange={dateRangeValue} 
                        updateDateRange={updateDateRange} 
                        handleDateRange={setHandleDateRange} 
                        posts={posts} 
                        handleTabType={setHandleTabType}
                        handleAssignDriver={setHandleAssignDriver}
                        handleRejectDriver={setHandleRejectDriver}
                        />
                </Col>
            </Row>
        </div>
    )
}

export default AssignmentLayout