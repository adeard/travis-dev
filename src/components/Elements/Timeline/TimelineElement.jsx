import React from 'react'
import { Timeline  } from 'antd';

const TimelineElement = (props) => {
    const {tasklogs} = props

    const historyList = tasklogs.data.map((obj, index) =>  {

        let date = obj.udate.split("T")
        let time = obj.utime.split("T")

        let datas = {
            "no" : index + 1,
            "key" : index + 1,
            "label" : date[0]+" "+time[1].slice(0, -1), 
            "children" : obj.new_value
        }

        return datas
    });

    return (
        <Timeline
            mode="left"
            items={historyList}
        />
    )
}

export default TimelineElement