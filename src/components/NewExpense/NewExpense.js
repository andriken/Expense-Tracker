import React, { useState }  from "react";

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { Button, Row } from "reactstrap";


const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenses = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenses);
        setIsEditing(false);
    }

    const isEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }


    return <Row className='new-expense' style={{fontSize : '1.05rem'}}>
        {!isEditing && <Button className={`expense-controls__btn btn-block mb-5`} onClick={isEditingHandler}>Add New Expense</Button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelForm={stopEditingHandler} />}
    </Row>
}


export default NewExpense;