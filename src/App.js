import './App.css';
import Footer from './Footer';

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
