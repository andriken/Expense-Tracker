import React, {useState} from 'react';

import ExpensesList from './ExpensesList';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import { Container } from 'reactstrap';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const datesList = props.items.map(expense => {
        return expense.date.getFullYear();
    });

    return (
        <div>
            <Container className='expenses'>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesFilter onChangeFilter={filterChangeHandler}
                    dyear={filteredYear}
                    datesList={datesList}/>
                <ExpensesList items={filteredExpenses} />
            </Container>
        </div>
    )
}

export default Expenses;
