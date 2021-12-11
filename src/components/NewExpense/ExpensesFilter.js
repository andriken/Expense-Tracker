import React from 'react';

import { Input, Label, FormGroup } from 'reactstrap';

const ExpensesFilter = (props) => {

    const dropdownChangeHandler = (e) => {
        props.onChangeFilter(e.target.value);
    }

    return (<FormGroup className='mt-5 col-sm-4 col-md-3 col-lg-2'>
        <Label for="exampleSelect">Filter By Year</Label>
        <Input onChange={dropdownChangeHandler} value={props.dyear} 
            type="select" name="select" id="exampleSelect">
            <option value='All'>All</option>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
        </Input>
      </FormGroup>
    );
};

export default ExpensesFilter;
