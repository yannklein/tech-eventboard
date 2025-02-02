import 'bootstrap/dist/css/bootstrap.min.css';
import EventsIndex from './components/EventsIndex';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="min-vh-100 vh-100 d-flex flex-column">
        <Routes>
          <Route path="/" element={<EventsIndex />} />
          <Route path="/events/:city" element={<EventsIndex  />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
