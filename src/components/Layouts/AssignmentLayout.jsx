import React from 'react'
import { Col, Row } from 'antd';
import AssignmentFrag from '../Fragments/AssignmentFrag';
import TabMenu from '../Fragments/TabMenu';

const AssignmentLayout = () => {
    return (
        <div>
            <AssignmentFrag></AssignmentFrag>
            <Row>
                <Col span={24}>
                    <TabMenu></TabMenu>
                </Col>
            </Row>
        </div>
    )
}

export default AssignmentLayout