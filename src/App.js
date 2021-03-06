
import './App.css';
import Posts from './components/Posts'
import Home from './components/Home'
import PostForm from './components/PostForm'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path = "/">
        <Home/>
      </Route>
      <Route exact path ='/posts/new'>
      <PostForm/>
      </Route>
      
      <Route exact path ='/posts'>
      <Posts/>
      </Route>
     
    </div>
  );
}

export default App;
