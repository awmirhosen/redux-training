import classes from './Counter.module.css';
import {useSelector, connect, useDispatch} from "react-redux";


const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)

    const handleIncrement = () => {
        dispatch({
            type : 'increment'
        })
    }

    const handleDecrement = () => {
        dispatch({
            type : 'decrement'
        })
    }

    const toggleCounterHandler = () => {};


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
        <div>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};




export default Counter ;
