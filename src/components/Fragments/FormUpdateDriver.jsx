import React, {useState} from 'react'
import { Form, Modal, Button, Select, Input } from 'antd';
import { getVehicles } from '../../api/vehicle.service';
import { updateDriver } from '../../api/driver.service';
import { EditTwoTone } from '@ant-design/icons';

const FormUpdateDriver = (props) => {  
    const {driver_id, vehicle_id, username, driver_name, ktp, no_hp} = props  
    const { Option } = Select;
    const [vehicleId, setVehicleId] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [vendorVehicles, setVendorVehicles] = useState([]);    
    const serializedData = localStorage.getItem("logged_user");
    
    let loggedUser = JSON.parse(serializedData);
    let requestParams = {
        vendor_id : loggedUser.code
    }

    const showModal = () => {

        getVehicles(requestParams, (result) => {
            setVendorVehicles(result)
        })

        setVehicleId(vehicle_id)
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        document.getElementById("edit_driver").reset();
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        values.driver_id = driver_id

        updateDriver(values, (result) => {
            props.isUpdate(true)
            setIsModalOpen(false);
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
        
            <Button type="default" shape="circle" size='small' icon={<EditTwoTone />} onClick={showModal}></Button> 
            <Modal 
                open={isModalOpen} 
                onCancel={handleCancel} 
                footer={null}
                >
                <h3>User Access</h3>
                <Form
                    id='edit_driver'
                    name={driver_id}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{
                        vehicle_id : vehicleId,
                        username : username,
                        driver_name : driver_name,
                        ktp : ktp,
                        no_hp : no_hp
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item label="Vehicle ID" name="vehicle_id" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]}>
                        <Select placeholder="Plate No - Type">
                            {vendorVehicles.length > 0 && vendorVehicles.map((vehicle) => (
                                <Option key={vehicle.vehicle_id} value={vehicle.vehicle_id}>{vehicle.vehicle_no} - {vehicle.vehicle_type_name}</Option>
                            ))}                    
                        </Select>
                    </Form.Item>
                    
                    <Form.Item label="Username" name="username" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]}>
                        <Input title="username" name="username_form" autoComplete='off' />
                    </Form.Item>
                    <hr />
                    <h3>User Biodata</h3>
                    <Form.Item label="Driver Name" name="driver_name" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]}>
                        <Input title="driver_name" name="driver_name_form" autoComplete='off' />
                    </Form.Item>

                    <Form.Item label="KTP" name="ktp" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]}>
                        <Input title="ktp" name="ktp_form" autoComplete='off' />
                    </Form.Item>

                    <Form.Item label="No HP" name="no_hp" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]}>
                        <Input title="no_hp" name="no_hp_form" autoComplete='off' />
                    </Form.Item>

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

export default FormUpdateDriver