import React,{useState} from 'react'
import { Form, Input, Radio, Space, Button, Modal } from 'antd';
import { updateTaskList } from '../../redux/slices/dateSlice';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../api/task.service';

const FormRejectTask = (props) => {
    const {task_id} = props
    const dispatch = useDispatch()
    const [value, setValue] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    let reason = {
        "task_id" : task_id,
        "notes_fr_sales" : "",
        "task_status" : "UNASSIGNED"
    }

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleReasonChange = (e) => {
        reason.notes_fr_sales = e.target.value
    }

    const onFinish = (values) => {
        if (values.reject_reason !== "Lain - lain") {
            reason.notes_fr_sales = values.reject_reason   
        }

        updateTask(reason, (status) => {            
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
            <Button shape="round" size="small" type="primary" onClick={showModal} danger>Reject</Button>
            <Modal 
                    title="Reject Task" 
                    open={isModalOpen} 
                    onCancel={handleCancel} 
                    footer={null}
                    >
                <p><b> Task Id : </b>{task_id}</p>
                <Form
                    name='reject_reason_form'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item id="reject_reason" name="reject_reason" label="Alasan Reject">
                        <Radio.Group onChange={onChange}>
                            <Space direction="vertical" >
                                <Radio value={"Tidak ada armada kendaraan"}>Tidak ada armada kendaraan</Radio>
                                <Radio value={"Tidak ada akses ke lokasi pengiriman"}>Tidak ada akses ke lokasi pengiriman</Radio>
                                <Radio value={"Lain - lain"}>
                                Lain - lain
                                {value === "Lain - lain" ? (
                                    <Input.TextArea
                                    style={{
                                        width: 300,
                                        marginLeft: 10,
                                    }} name='reason_desc' onChange={handleReasonChange}
                                    />
                                ) : null}
                                </Radio>
                            </Space>
                        </Radio.Group>
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

export default FormRejectTask