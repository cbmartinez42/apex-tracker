import icon from './assets/apex.svg';
import logo from './assets/images/apex-logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className='logo' alt='logo' />
        <img src={icon} className="App-logo" alt="icon" />

      </header>
    </div>
  );
}

export default App;
