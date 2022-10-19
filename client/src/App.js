import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import History from './Pages/History';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
         <Route path="/" element={<HomePage />} /> 
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={  <Login />} />
         <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
