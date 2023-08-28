import React,{useState} from 'react'
import { Col, Row } from 'antd';
import AssignmentFrag from '../Fragments/AssignmentFrag';
import TabMenu from '../Fragments/TabMenu';

const AssignmentLayout = () => {
    const [dateRangeValue, setDateRangeValue] = useState({}); 

    const handleDateRangeValue = (data) => {
        setDateRangeValue(data);
    };

    return (
        <div>
            <AssignmentFrag dateRangeValue={handleDateRangeValue}></AssignmentFrag>
            <Row>
                <Col span={24}>
                    <TabMenu daterange={dateRangeValue}></TabMenu>
                </Col>
            </Row>
        </div>
    )
}

export default AssignmentLayout