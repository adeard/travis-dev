import React from 'react'
import { Space, Button } from 'antd';
import TableElement from '../Elements/Table/TableElement';
import ModalFrag from './ModalFrag';
import FormAssignDriver from './FormAssignDriver';
import FormRejectTask from './FormRejectTask';

const TabContent = (props) => {

    const {tab_type, start = "", end = ""} = props
    let opt_button = ""

    if (tab_type === "pending") {
        opt_button = <>
            <ModalFrag button_type="primary" button_title="Assign Supir" modal_title="Assign Supir">
                <FormAssignDriver></FormAssignDriver>
            </ModalFrag>
            <ModalFrag button_type="default" button_title="Reject Task" modal_title="Reject Task">
                <FormRejectTask></FormRejectTask>
            </ModalFrag>
        </>
    }

    return (
        <div>
            <Space wrap style={{float:'right', marginBottom:'16px'}}>
                {opt_button}
                <Button type="default">Status Task</Button>
            </Space>
            <TableElement type={tab_type} start_date={start} end_date={end}></TableElement>
        </div>
    )
}

export default TabContent