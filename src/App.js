import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './redux/actionCreators';

function App() {
  const changeNumber = useSelector((state) => state.changereducer);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '30px',
      }}
    >
      <button onClick={() => dispatch(incNumber())}>+</button>
      <span style={{ margin: '0 30px 0 30px' }}>{changeNumber}</span>{' '}
      <button onClick={() => dispatch(decNumber())}>-</button>
    </div>
  );
}

export default App;
