import './css/Account.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment,decrement,incrementByAmount} from '../actions'
function Account() {
    const [value, setValue] = useState(0);
    
    const amount = useSelector(state=>state.account.amount);
    const dispatch = useDispatch();

    return(


        <div>

            <h4>Account Details</h4>
                <p>
                    <h5>Amount:{amount}</h5>
                    <h5>point:</h5>
                </p>
            <div>
            <button onClick={()=>dispatch(increment())}>+ Increment</button>
            <button onClick={()=>dispatch(decrement())}>- Decrement</button>            
            <input type="text" onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={()=>dispatch(incrementByAmount(value))}>+ Increment By value</button>            
            </div>
        </div>

    );

}


export default Account;