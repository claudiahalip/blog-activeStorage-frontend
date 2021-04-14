
import './App.css';
import Posts from './components/Posts'
import Home from './components/Home'
import PostForm from './components/PostForm'
import {Route} from 'react-router-dom'
import PostsF from './components/PostsF'
import NavBar from './components/NavBar'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path = "/">
        <Home/>
      </Route>
      <Route exact path ='/posts/new'>
      <PostForm/>
      </Route>
      
      <Route exact path ='/posts'>
      <Posts/>
      </Route>
      <Route exact path = '/postsF'>
        <PostsF/>
      </Route>
     
    </div>
  );
}

export default App;
