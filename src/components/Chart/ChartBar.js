import React from 'react';
import { Col } from 'reactstrap';

import './ChartBar.css';

const ChartBar = (props) => {
    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 89) + '%';
    }

    return (
        <Col className={`bar d-flex flex-column justify-content-end`}>
            <Col className={`fill p-0 flex-grow-0`} style={{height : barFillHeight, flexBasis : 'auto'}}>
            </Col>
            <Col className={`p-0 flex-grow-0`}>
                <span>{props.label}</span>
            </Col>
        </Col>
    )
}


export default ChartBar;