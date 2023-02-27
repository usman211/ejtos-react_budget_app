import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget,dispatch,expenses,currency } = useContext(AppContext);
    
    const setBudget = (val) => {
        const totalExpenses = expenses.reduce((total,item)=>{
            return (total+=item.cost);
        },0);


        if (val>20000){
            alert("You cannot exceed the budget more than 20,000!");
        } else if(val < totalExpenses){
            alert("You cannot reduce the budget that is already allocated!");
        }
        else {
            dispatch({
                type: 'SET_BUDGET',
                payload: val,
            })
        }

    }

    return (
        <div className='alert alert-secondary'>
            {/* <span>Budget: £{budget}</span> */}
            <span>Budget: {currency}</span>
            <input 

            type='number'
            step='10' 
            id='budget'
            Value={budget} 
            onInput={(event) => setBudget(event.target.value)}
            >
            </input>
        </div>
    );
};
export default Budget;
