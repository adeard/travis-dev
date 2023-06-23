import React from 'react'
import TimelineElement from '../Elements/Timeline/TimelineElement';
import ModalFrag from './ModalFrag';

export default function StatusTask() {
    return (
        <ModalFrag button_title="Status Task" modal_title="Status Task">
            <p><b> Task Id : </b>58912372810</p>
            <TimelineElement></TimelineElement>
        </ModalFrag>
    )
}
