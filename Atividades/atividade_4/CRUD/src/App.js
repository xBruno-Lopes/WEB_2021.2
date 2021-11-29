import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, Routes, Route} from 'react-router-dom'

import CreateAluno from "./components/aluno/CreateAluno"
import ListAluno from "./components/aluno/ListAluno"
import Home from "./components/Home"

function App() {
  return (
    <div className = 'container'>
      <nav className = 'navbar navbar-expand-lg navbar-light bg-light'>
        <Link to = {'/'} className = 'navbar-brand'>CRUD</Link>
        <div className = 'collapse navbar-collapse' id = 'navbarSupportedContent'>
          <ul className = 'navbar-nav mr-auto'>
            <li className = 'nav-item'> <Link to = {'/'} className = 'nav-link'>Home</Link> </li>
            <li className = 'nav-item'> <Link to = {'/createAluno'} className = 'nav-link'>Create Aluno</Link> </li>
            <li className = 'nav-item'> <Link to = {'/listAluno'} className = 'nav-link'>List Aluno</Link> </li>
          </ul>
        </div>

      </nav>
      <Routes>
        <Route exact path = '/' element = {<Home/>}/>
        <Route path = '/createAluno' element = {<CreateAluno/>}/>
        <Route path = '/listAluno' element = {<ListAluno/>}/>
      </Routes>
    </div>
  )
};

export default App;
