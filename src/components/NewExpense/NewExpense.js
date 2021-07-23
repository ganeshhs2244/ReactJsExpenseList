import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsVisible(false);

  };
  const [isVisble,setIsVisible]=useState(false);
  const startVisibleHandler=()=>{
    setIsVisible(true);
  };
  const onCancelHandler=()=>{
    setIsVisible(false);
  }
  return (
    <div className='new-expense'>
      {!isVisble &&<button onClick={startVisibleHandler}>New Expense</button>}
      {isVisble &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onCancelHandler}/>}
    </div>
  );
};

export default NewExpense;
