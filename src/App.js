import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Footer from './Footer';

import DisplayWeather from './DisplayWeather';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayWeather />
      </header>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}
