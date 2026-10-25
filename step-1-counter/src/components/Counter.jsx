import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, add } from "../features/counter/counterSlice";

export default function Counter() {
  const value = useSelector((state) => state.counter.value); // READ
  const dispatch = useDispatch();                            // WRITE

  return (
    <div>
      <div className="count">{value}</div>
      <div className="row">
        <button onClick={() => dispatch(decrement())}>−1</button>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(add(10))}>+10</button>
        <button className="del" onClick={() => dispatch(reset())}>reset</button>
      </div>
    </div>
  );
}
