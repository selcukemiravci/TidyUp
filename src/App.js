import logo from './logo.svg';
import './App.css';
import TidyUp from './src/Components/TidyUp.jsx'; // Make sure the path is correct

function App() {
  return (
    <div className="App">
            <TidyUp />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
