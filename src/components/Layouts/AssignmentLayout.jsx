import React,{useState} from 'react'
import { Col, Row } from 'antd';
import AssignmentFrag from '../Fragments/AssignmentFrag';
import TabMenu from '../Elements/Menu/TabMenu';

const AssignmentLayout = () => {
    const [dateRangeValue, setDateRangeValue] = useState({}); 
    const [isUpdate, setIsUpdate] = useState(false)
    const [updateDateRange, setUpdateDateRange] = useState(false)
    const [handleDateRange, setHandleDateRange] = useState(false)

    if (isUpdate) {
        setIsUpdate(false)
        setUpdateDateRange(true)
    }

    if (handleDateRange) {
        setUpdateDateRange(false)
        setHandleDateRange(false)
    }

    return (
        <div>
            <Row>
                <Col span={24}>
                    <AssignmentFrag dateRangeValue={setDateRangeValue} isUpdate={setIsUpdate}></AssignmentFrag>
                </Col>
            </Row>  
            <Row>
                <Col span={24}>
                    <TabMenu daterange={dateRangeValue} updateDateRange={updateDateRange} handleDateRange={setHandleDateRange}></TabMenu>
                </Col>
            </Row>
        </div>
    )
}

export default AssignmentLayout