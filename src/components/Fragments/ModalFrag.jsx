import React,{ useState } from 'react'
import { Button, Modal } from 'antd';

export default function ModalFrag(props) {
    const {button_type, button_title, modal_title, children} = props
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

    return (
        <div>
            <Button type={button_type} onClick={showModal}>{button_title}</Button>            
            <Modal title={modal_title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {children}
            </Modal>
        </div>
    )
}
