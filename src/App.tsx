import 'bootstrap/dist/css/bootstrap.min.css';
import EventsIndex from './components/EventsIndex';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename='/tech-eventboard'>
      <div className="min-vh-100 vh-100 d-flex flex-column">
      <EventsIndex />
      </div>
    </BrowserRouter>
  );
}

export default App;
