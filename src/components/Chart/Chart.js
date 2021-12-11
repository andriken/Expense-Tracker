import React from 'react';

import ChartBar from './ChartBar.js';
import './Chart.css';
import { Row } from 'reactstrap';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <Row className={`chart flex-nowrap`}>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </Row>
    )
}

export default Chart;