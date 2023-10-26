import React from 'react'
import { Button } from 'antd';
import { SmileTwoTone, FrownTwoTone } from '@ant-design/icons';
import { updateDriver } from '../../../api/driver.service';

const UpdateDriverStatus = (props) => {  
    const {driver_id, status} = props  

    const handleUpdateStatus = () => {
        let statusData = {
            "driver_id" : driver_id,
            "driver_status" : status
        }

        if (status === "AKTIF") {
            statusData.driver_status = "TIDAK AKTIF"   
        } else {
            statusData.driver_status = "AKTIF"   
        }

        updateDriver(statusData, (result) => {
            props.isUpdate(true)
        })
    }

    if (status === "AKTIF") {
        return (
            <Button 
            type="default" 
            shape="circle" 
            size='small' 
            icon={<SmileTwoTone twoToneColor="#52c41a"/>} onClick={handleUpdateStatus} />
        )    
    }

    return (
        <Button 
        type="default" 
        shape="circle" 
        size='small' 
        icon={<FrownTwoTone twoToneColor="#eb2f96"/>} onClick={handleUpdateStatus} />
    )
}

export default UpdateDriverStatus