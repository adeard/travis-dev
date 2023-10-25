import React from 'react'
import TimelineElement from '../Elements/Timeline/TimelineElement';
import ModalFrag from './ModalFrag';

export default function StatusTask(props) {

    const {task_id, tasklogs} = props

    return (
        <ModalFrag button_title="History" modal_title="History">
            <p> Task Id : <b>{task_id}</b></p>
            <TimelineElement tasklogs={tasklogs}></TimelineElement>
        </ModalFrag>
    )
}
