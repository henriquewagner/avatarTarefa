import React from 'react';
import './App.css';
import { Home } from './components/home/Home';
import { Routes, Route, Link } from "react-router-dom";
import { AvatarLista } from './components/avatar/AvatarLista';
import { AvatarCadastro } from './components/avatar/AvatarCadastro';

function App() {
  return <>

    <ul>
      <li> <Link to="/">Home</Link> </li>
      <li> <Link to="/avatar">Avatar</Link> </li>
    </ul>
    <h1>Olá avatar</h1>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/avatar" element={<AvatarLista />} />
      <Route path="/avatar/cadastro" element={<AvatarCadastro />} />
    </Routes>


  </>

}

export default App;
