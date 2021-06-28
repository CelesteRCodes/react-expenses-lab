import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() //randomly generates an id
        };
        props.onAddExpense(expenseData);
    };
    
    const startEditingHandler = () => {
        setIsEditing(true);
    };
    
    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return ( 
    <div className="new-expense">
        {!isEditing && <buton onClick={startEditingHandler}>Add New Expense</buton>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler} />}
    </div>
    );
};

export default NewExpense;