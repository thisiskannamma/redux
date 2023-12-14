import react from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Quantity from './Quantity';
import './style.css'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>REACT REDUX TASK</h1>
        <Quantity />
      </div>
    </Provider>

  );
}

export default App
