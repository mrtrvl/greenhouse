import './App.css';
import Sensors from './components/Sensors/Sensors';
import Relays from './components/Relays/Relays';

function App() {
  return (
    <div className="container">
      <h1>Sensors and relays</h1>
    <div className="row">
      <div className="col-md-6">
        <Sensors />
      </div>
      <div className="col-md-6">
        <Relays />
      </div>
    </div>
    </div>
  );
}

export default App;
