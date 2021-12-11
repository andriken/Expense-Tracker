import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (props) =>  {
    const month = props.date.toLocaleString('en-Us', {month: 'long'});
    const day = props.date.toLocaleString('en-Us', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <span className='expense-date'>{`${day} ${month} ${year}`}</span>
    )
}

export default ExpenseDate;