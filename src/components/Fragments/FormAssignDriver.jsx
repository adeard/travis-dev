import React, { useState } from 'react'
import { Form, Button, Modal, Select, Tooltip } from 'antd';
import { CarTwoTone } from '@ant-design/icons';
import InputForm from '../Elements/Input/InputForm';
import { getDrivers, getDriverDetail } from '../../api/driver.service';
import { getVehicles, getVehicle } from '../../api/vehicle.service';
import { updateTask } from '../../api/task.service';
import { useDispatch } from 'react-redux';
import { updateTaskList } from '../../redux/slices/dateSlice';

const FormAssignDriver = (props) => {
    const { task_id } = props
    const { Option } = Select;     
    const dispatch = useDispatch()   
    const [driver, setDriver] = useState(null);
    const [drivers, setDrivers] = useState([]);
    const [vehicle, setVehicle] = useState(null);
    const [vehicles, setVehicles] = useState([]); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isChangeVehicle, setChangeVehicle] = useState(false)
    const tooltipText = <span>ganti kendaraan ?</span>;
    const serializedData = localStorage.getItem("logged_user");
    
 
    let loggedUser = JSON.parse(serializedData);
    let request_params = {
        vendor_id : loggedUser.code,
        page : 1,
        driver_status : "AKTIF"
    }

    let selectedVehicle = {
        "vehicle_no" : "",
        "vehicle_id" : "",
        "vehicle_type_desc" : ""
    }

    const showModal = () => {
        getDrivers(request_params, (result) => {
            setDrivers(result);
        })

        getVehicles(request_params, (vehicles) => {
            setVehicles(vehicles)            
        })
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleDriverChange = (driverId) => {
        getDriverDetail(driverId, (result) => {  
            setDriver(result)

            selectedVehicle.vehicle_id = result.vehicle_id
            selectedVehicle.vehicle_no = result.vehicle_no
            selectedVehicle.vehicle_type_desc = result.vehicle_type_desc

            setVehicle(selectedVehicle)
        })
    }

    const handleVehicleChange = (vehicleId) => {
        getVehicle(vehicleId, (vehicle) => {
            selectedVehicle.vehicle_id = vehicle.vehicle_id
            selectedVehicle.vehicle_no = vehicle.vehicle_no
            selectedVehicle.vehicle_type_desc = vehicle.vehicle_type_name

            setVehicle(selectedVehicle)
        })
    }

    const handleVehicleUpdate = () => {
        setChangeVehicle(true)
    }

    const onFinish = (values) => {

        let updateTaskData = {
            "task_id" : task_id,
            "driver_id" : driver.driver_id,
            "vehicle_no" : vehicle.vehicle_no,
            "driver_name" : driver.driver_name,
            "vehicle_type" : vehicle.vehicle_type_desc,
            "notes_fr_transp" : values.remark_to_driver,
            "task_status" : "NOTIFY DRIVER",
        }

        updateTask(updateTaskData, (status) => {            
            if (!status) {
                console.log(status)
            }
            setIsModalOpen(false);
            dispatch(updateTaskList({is_update:1}))
        })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Button shape="round" size="small" type="primary" onClick={showModal}>Assign</Button>
            <Modal 
                    title="Assign Driver" 
                    open={isModalOpen} 
                    onCancel={handleCancel} 
                    footer={null}
                    >
                <Form
                    name="assign_driver"
                    labelCol={{
                    span: 8,
                    }}
                    wrapperCol={{
                    span: 16,
                    }}
                    style={{
                    maxWidth: 600,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item label="Supir" name="driver" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]}>
                        <Select placeholder="Driver Name - Phone No" onChange={handleDriverChange}>
                            {drivers.length > 0 && drivers.map((driver) => (
                                <Option key={driver.driver_id} value={driver.driver_id}>{driver.driver_name} - {driver.no_hp}</Option>
                            ))}                    
                        </Select>
                    </Form.Item>

                    <Form.Item label="Plat No">
                        {vehicle && vehicle.vehicle_no}
                    </Form.Item>

                    <Form.Item label="Type">
                        {vehicle && vehicle.vehicle_type_desc}  
                        {vehicle && <Tooltip placement="top" title={tooltipText} >
                            <Button type='text' shape='circle' icon={<CarTwoTone />} onClick={handleVehicleUpdate}></Button>
                        </Tooltip>}                        
                    </Form.Item>

                    {isChangeVehicle && <Form.Item label="Ubah Kendaraan" name="vehicle_no">
                        <Select placeholder="Plat No - Type" onChange={handleVehicleChange}>
                            {vehicles.length > 0 && vehicles.map((vehicle) => (                                
                                <Option key={vehicle.vehicle_id} value={vehicle.vehicle_id}>
                                    {vehicle.vehicle_no} - {vehicle.vehicle_type_name}
                                </Option>
                            ))}                    
                        </Select>
                    </Form.Item>}                    

                    <InputForm type="textarea" label="Remark Ke Supir" name="remark_to_driver" rules={[
                                {
                                required: true,
                                message: 'Please input first !',
                                },
                    ]}></InputForm>

                    <Form.Item wrapperCol={{offset: 20, span: 15}} style={{paddingTop:30, marginBottom:1}}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default FormAssignDriver