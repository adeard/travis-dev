import React,{ useState } from 'react'
import { Button, Modal, Timeline  } from 'antd';

export default function StatusTask() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [mode] = useState('right');
    return (
        <div>
            <Button type="default" onClick={showModal}>Status Task</Button>                
            <Modal 
            title="Status Task" 
            open={isModalOpen} 
            onOk={handleOk} 
            onCancel={handleCancel}
            footer={[]}
            >
                <p><b> Task Id : </b>58912372810</p>
                <Timeline
                    mode={mode}
                    items={[
                    {
                        label: '2015-09-01',
                        children: 'Create a services',
                    },
                    {
                        label: '2015-09-01 09:12:11',
                        children: 'Solve initial network problems',
                    },
                    {
                        children: 'Technical testing',
                    },
                    {
                        label: '2015-09-01 09:12:11',
                        children: 'Network problems being solved',
                    },
                    ]}
                />
            </Modal>
        </div>
    )
}
