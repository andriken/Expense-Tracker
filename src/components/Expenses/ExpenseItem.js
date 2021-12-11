import React from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import { Row, Col, Button } from 'reactstrap';

const ExpenseItem = (props) => {
    return (
        <Row className={`mx-2 expense-item mb-4 py-1`}>
            <Col sm='3' md='2' className={`p-3 d-none d-sm-block`}>
                <Button type="button" className={`expense-category px-lg-3 py-3 ml-lg-3 border-0`}>
                    Category
                </Button>
            </Col>
            <Col sm='7' md='8' className={`col-9 d-flex justify-content-center flex-column py-2`}>
                <h2 className="expense-title">{props.title}</h2>
                <ExpenseDate date={props.date}/>
            </Col>
            <Col sm='2' md='2' className={`col-3 d-flex align-items-center justify-content-center`}>
                <span className="expense-amount">${props.amount}</span>
            </Col>
        </Row>
    );
}

export default ExpenseItem;
