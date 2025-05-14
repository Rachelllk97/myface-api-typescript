
import './App.scss'
import PostsPage from './Components/Posts/Posts/PostsPage'
import UserPage from './Components/UserPage/UserPage'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import CreateUser from './Components/CreateUser/CreateUser';

function App() {

  return (
     <Router>
        <Routes>
            <Route path = "/posts" element = {<PostsPage/>}/>
            <Route path = "/users/:userId" element = {<UserPage/>}/>
            <Route path = "/users/create" element = {<CreateUser/>}/>
            <Route path="*"
                  element={<div>
                  Sorry - that page doesn't exist, try these:
                  <Link to="/posts"/>
                  <Link to="/users/:userId"/>
                  <Link to="/users/create"/>
                  </div>}/>
        </Routes>
    </Router>
  )
}

export default App
