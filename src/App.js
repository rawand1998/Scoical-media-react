
import './App.css';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import PostInput from './Components/Posts/PostInput'

function App() {
  return (
    <div className="App">
    
    {/* <Register /> */}
    <Login />
    <PostInput />
    </div>
  );
}

export default App;
