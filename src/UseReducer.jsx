import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from './recordSlice'  


export default function UseReducer(props) {
  const records = useSelector(function(store) {
    return store.record.value;
  });
  const dispatch = useDispatch();;



  // const maparraylist = records.map((eachitem) => <li>{eachitem}</li>);
  return (
    <div>
      <p style={{ backgroundColor: "lightgray" }}>Use Reducer</p>
      <ul>{records}</ul>
      <button onClick={()=>dispatch(increment())}>Add something</button>
      <button onClick={()=>dispatch(decrement())}>Delete Last</button>
    </div>
  );
}
