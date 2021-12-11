import React, { useState } from 'react';

import {
    Button,
    Col,
    Row,
    Form,
    Label,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from 'reactstrap';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: + enteredAmount,
            date: new Date(enteredDate)
        };

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        props.onSaveExpenseData(expenseData);
    };


    return (
        <Col className='px-0'>
            <Col className={`col-11 new-expense__controls mt-5 mb-3 px-4 py-4 mx-auto`}>
                <Form>
                    <Row>
                        <Col md='8' lg='6'>
                            <Label for='title'>Title</Label>
                            <Input type='text'
                                value={enteredTitle}
                                onChange={titleChangeHandler}
                                className='form-control'
                                id='title'/>
                        </Col>
                        <Col md='4' lg='3'>
                            <Label for='amount'>Amount</Label>
                            <InputGroup className='mb-3'>
                                <InputGroupAddon addonType='prepend'>
                                    <InputGroupText>$</InputGroupText>
                                </InputGroupAddon>
                                <Input type='number' min='0.01' step='0.01'
                                    value={enteredAmount}
                                    onChange={amountChangeHandler}
                                    className='form-control'
                                    id='amount'
                                    aria-label='Dollar amount (with dot and two decimal places)'/>
                            </InputGroup>
                        </Col>
                        <Col lg='3' className='col-12'>
                            <Label for='date'>Date</Label>
                            <Input type='date' min='0.01' step='0.01'
                                value={enteredDate}
                                onChange={dateChangeHandler}
                                className='form-control'
                                id='amount'/>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col className={`col-11 new-expense__actions px-4 py-3 mx-auto 
                d-flex justify-content-end`}>
                <div>
                    <Button type="button"
                        onClick={
                            props.onCancelForm
                        }
                        className={`expense-controls__btn btn`}>Cancel</Button>
                    {' '}
                    <Button type="submit"
                        onClick={submitHandler}
                        className={`expense-controls__btn btn`}>Submit</Button>
                </div>
            </Col>
        </Col>
    )

}

export default ExpenseForm;
