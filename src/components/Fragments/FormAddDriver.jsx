import React, {useState, useEffect} from 'react'
import { Form, Modal, Button, Select } from 'antd';
import InputForm from '../Elements/Input/InputForm';
import { addDriver } from '../../api/driver.service';
import { getVehicles } from '../../api/vehicle.service';

const FormAddDriver = (props) => {    
    const { Option } = Select;
    const [loadings, setLoadings] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [vendorVehicles, setVendorVehicle] = useState([]);
    const serializedData = localStorage.getItem("logged_user");
    
    let loggedUser = JSON.parse(serializedData);
    let requestParams = {
        vendor_id : loggedUser.code
    }

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        setLoadings(true)

        values.vendor_id = requestParams.vendor_id

        addDriver(values, () => {
            setIsModalOpen(false);            
            setLoadings(false)

            props.isUpdate(true)
        })   
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        getVehicles(requestParams, (result) => {
            setVendorVehicle(result)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Button type="primary" onClick={showModal}>Tambah Supir</Button> 
            <Modal 
                open={isModalOpen} 
                onCancel={handleCancel} 
                footer={null}
                >
                <h3>User Access</h3>
                <Form
                    name="add_driver"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
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

                    <InputForm type="text" label="Username" name="username" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]} />

                    <InputForm type="password" label="Password" name="password" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]} />
                    <hr />
                    <h3>User Biodata</h3>
                    <InputForm type="text" label="Driver Name" name="driver_name" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]} />

                    <InputForm type="text" label="KTP" name="ktp" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]} />

                    <InputForm type="text" label="No HP" name="no_hp" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]} />

                    

                    <Form.Item wrapperCol={{offset: 20, span: 15}} style={{paddingTop:30, marginBottom:1}}>
                        <Button type="primary" htmlType="submit" loading={loadings}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default FormAddDriver