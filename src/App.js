
import './App.css';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';

import Home from './Components/Home/Home'
import Comments from './Components/Comments/Comments';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/comment/:id" element={<Comments/>}/>
      </Routes>
    </Router>
   
    </div>
  );
}

export default App;
