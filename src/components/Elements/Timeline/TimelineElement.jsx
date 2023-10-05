import React,{ useState } from 'react'
import { Timeline  } from 'antd';

const TimelineElement = () => {
    const [mode] = useState('right');
    return (
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
    )
}

export default TimelineElement