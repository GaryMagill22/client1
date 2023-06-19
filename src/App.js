import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard"
import { Routes, Route } from 'react-router-dom'
import Create from './components/Create';
import Details from './components/Details';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
