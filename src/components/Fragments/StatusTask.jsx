import React, {useState} from 'react'
import TimelineElement from '../Elements/Timeline/TimelineElement';
import { Button, Modal } from 'antd';

export default function StatusTask(props) {
    const {task_id, tasklogs} = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    

    return (
        <>
            <Button type="default" onClick={showModal}>History</Button>            
            <Modal title="History" open={isModalOpen} onCancel={handleCancel} footer="">
                <p> Task Id : <b>{task_id}</b></p>
                <TimelineElement tasklogs={tasklogs}></TimelineElement>
            </Modal>
        </>
    )
}
