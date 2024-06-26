import React, {useState} from 'react'
import { Form, Modal, Button, Input, Alert } from 'antd';
import { updateDriver } from '../../api/driver.service';
import { ToolTwoTone } from '@ant-design/icons';

const FormChangePasswordDriver = (props) => {  
    const {driver_id} = props 
    const [alertMessage, setAlertMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        document.getElementById("change_password").reset();
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        values.driver_id = driver_id

        if (values.password !== values.retype_password) {
            setAlertMessage(<Alert message="password not matched !" type="error" />)
        } else {
            setAlertMessage(<Alert message="password updated !" type="success" />)
            document.getElementById("change_password").reset();
            updateDriver(values, (result) => {                
                setTimeout(function() {
                    setAlertMessage("")
                    props.isUpdate(true)
                    setIsModalOpen(false);
              }, 3000);
            })
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>        
            <Button type="default" shape="circle" size='small' icon={<ToolTwoTone />} onClick={showModal}></Button> 
            <Modal 
                open={isModalOpen} 
                onCancel={handleCancel} 
                footer={null}
                >
                <Form
                    id='change_password'
                    name={driver_id}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <h3>Change Password</h3>
                    <Form.Item label="New Password" name="password" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]}>
                        <Input.Password title="password" name="password_form" autoComplete='off' />
                    </Form.Item>

                    <Form.Item label="Retype Password" name="retype_password" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]}>
                        <Input.Password title="retype_password" name="retype_password_form" autoComplete='off' />
                    </Form.Item>

                    {alertMessage}

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

export default FormChangePasswordDriver