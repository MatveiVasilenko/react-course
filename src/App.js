import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!!!
        </p>
        <a
          className="App-link"
          href="http://motich.mion.courses/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Motich Production
        </a>
      </header>
    </div>
  );
}

export default App;
