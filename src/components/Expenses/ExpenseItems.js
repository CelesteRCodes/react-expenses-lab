import React, { useState } from 'react';
// useState allows us to define values as states where changes 
// to these values should be displayed (a special variable); a React hook

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItems.css';



const ExpenseItems = (props) => {

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>

                <div className="expense-item__description">
                    <h2>{props.title}</h2></div>
                <div className="expense-item__price">${props.amount}</div>

            </Card>
        </li>
    );
};

export default ExpenseItems;