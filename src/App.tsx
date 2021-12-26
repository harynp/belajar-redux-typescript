import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator, State } from './state';

const App: React.FC = () => {
  
  const dispatch = useDispatch();
  
  const { depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(actionCreator, dispatch);
  
  const amount = useSelector((state: State) => state.bank);
  
  return (
    <div className='App'>
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1)}>Deposit</button>
      <button onClick={() => withdrawMoney(1)}>Withdraw</button>
      <button onClick={() => bankruptMoney()}>Bankrupt</button>
    </div>
  )
}

export default App;