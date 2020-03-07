import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { increment , decrement , signin} from './Actions';

function App() {

  const counter = useSelector(state => state.counter);
  const log = useSelector(state => state.log);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter = {counter}</h1>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(signin())}>
        {log ? 'Sign Out' : 'Sign In'}  
      </button>
      { log ? <h1>User can see this text when Sign In</h1> : ''}
    </div>
  );
}

export default App;
