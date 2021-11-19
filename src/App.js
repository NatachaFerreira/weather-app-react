import './App.css';
import Footer from './Footer';
import DisplayWeather from './DisplayWeather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <DisplayWeather defaultCity="Angra do Heroísmo" />
      </div>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}
