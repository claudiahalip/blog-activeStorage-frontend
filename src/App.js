
import './App.css';
import Posts from './components/Posts'
import PostForm from './components/PostForm'
import Post from './components/Post'

function App() {
  return (
    <div className="App">
      <PostForm/>
      <Posts/>
      <Post/>
    </div>
  );
}

export default App;
