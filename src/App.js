import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const { value } = useSelector(state => state.testReducer);
  const dispatch = useDispatch();

  const onIncrementAsync = () => {
    dispatch({ type: 'INCREMENT_ASYNC' })
  };

  const onIncrement = () => {
    dispatch({ type: 'INCREMENT' })
  };

  const onDecrement = () => {
    dispatch({ type: 'DECREMENT' })
  };

  return (
    <div className="App">
      <button onClick={onIncrementAsync}>
        Increment after 1 second
      </button>
      {' '}
      <button onClick={onIncrement}>
        Increment
      </button>
      {' '}
      <button onClick={onDecrement}>
        Decrement
      </button>
      <hr />
      <div>
        Clicked: {value} times
      </div>
    </div>
  );
}

export default App;
