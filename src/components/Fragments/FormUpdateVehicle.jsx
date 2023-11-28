import React, {useState} from 'react'
import { Form, Modal, Button, Select, Input } from 'antd';
import { EditTwoTone } from '@ant-design/icons';

const FormUpdateVehicle = (props) => {  
    const {vehicle_id, vehicle_no, vehicle_type, vehicle_types} = props  
    const { Option } = Select;
    const [isModalOpen, setIsModalOpen] = useState(false);   

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        document.getElementById("edit_vehicle").reset();
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        values.vehicle_id = vehicle_id
        props.handleUpdateVehicle(values)
        setIsModalOpen(false);
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
                <h3>Edit Vehicle</h3>
                <Form
                    id='edit_vehicle'
                    name={vehicle_id}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{
                        vehicle_id : vehicle_id,
                        vehicle_no : vehicle_no,
                        vehicle_type : vehicle_type
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item label="Plat no" name="vehicle_no" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]}>
                        <Input title="vehicle_no" name="vehicle_no" autoComplete='off' />
                    </Form.Item>

                    <Form.Item label="Vehicle Type" name="vehicle_type" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]}>
                        <Select placeholder="Vehicle Type">
                            {vehicle_types.length > 0 && vehicle_types.map((vehicle_type) => (
                                <Option key={vehicle_type.vehicle_type} value={vehicle_type.vehicle_type}>{vehicle_type.vehicle_type} - {vehicle_type.vehicle_type_name} - {vehicle_type.vehicle_type_category}</Option>
                            ))}                    
                        </Select>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 20, span: 15}} style={{paddingTop:30, marginBottom:1}}>
                        <Button type="primary" htmlType="submit">
                            Update
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default FormUpdateVehicle