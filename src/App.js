import logo from './logo.svg';
import './App.css';
import LoginProvider from './Components/LoginProvider';
import AccountDetails from './Components/AccountDetails';
import Home from './Components/Home';

function App() {
  return (
    <LoginProvider>
    <div className="App">
      <AccountDetails />
      <Home/>
    </div>
    </LoginProvider>
  );
}

export default App;
