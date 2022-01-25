import logo from './logo.svg';
import './App.css';
import Form from './Form/Form';
import{Provider as StoreProvider} from 'react-redux'
import store from './Redux/store';

function App() {
  return (
    <StoreProvider store={store}>
      <Form/>
    </StoreProvider>
  );
}

export default App;
