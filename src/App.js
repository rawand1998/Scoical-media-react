
import './App.css';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import PostInput from './Components/Posts/PostInput'
import CommentInput from './Components/Comments/CommentInput'
import Likes from './Components/Likes/Likes'
import Posts from './Components/Posts/Posts';
function App() {
  return (
    <div className="App">
    
    {/* <Register /> */}
    <Login />
    <PostInput />
    <Posts />
    {/* <CommentInput /> */}
    {/* <Likes /> */}
    </div>
  );
}

export default App;
