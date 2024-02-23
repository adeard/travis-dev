import React from 'react'
import { Pie } from "react-chartjs-2";
import { 
    Chart as ChartJS, 
    ArcElement, 
    Tooltip
} from 'chart.js';

const StatisticPie = (props) => {
    const {state} = props

    if (!state) {
        return
    }

    ChartJS.register(ArcElement, Tooltip)

    return (
        <Pie
            data={state}
            options={{
                title:{
                    display:false,
                    text:'Task Statistic',
                    fontSize:20
                },
                plugins:{
                    legend:{
                        display:false,
                        position:'right'
                    }
                },
                
                
                animations: {
                    y: {
                        easing: 'easeInOutElastic',
                        from: (ctx) => {
                            if (ctx.type === 'data') {
                                if (ctx.mode === 'default' && !ctx.dropped) {
                                    ctx.dropped = true;
                                    return 0;
                                }
                            }
                        }
                    }
                },
            }}
        />  
    )
}

export default StatisticPie