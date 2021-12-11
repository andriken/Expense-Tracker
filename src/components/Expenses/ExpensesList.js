import React from 'react';

import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

    return (<div className={`expense-list mt-5`}>
        {props.items.map(expense => (
            <ExpenseItem key={
                    expense.id
                }
                title={
                    expense.title
                }
                amount={
                    expense.amount
                }
                date={
                    expense.date
                }/>
        ))}
    </div>)
}

export default ExpensesList;