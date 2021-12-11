import React, { useState } from 'react';

import { Container } from 'reactstrap'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 100,
        date: new Date(2020, 7, 14)
    }, {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    }, {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28)
    }, {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12)
    },
];

const App = (props) => {
    
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    }

    return (
        <div>
            <Container className={`wrapper mt-5 py-4 rounded`}>
                <Container className='mb-5'>
                    <NewExpense onAddExpense={addExpenseHandler} />
                </Container>
                <Expenses items={expenses} />
            </Container>
        </div>
    );
}

export default App;
