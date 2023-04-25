import {BrowserRouter, Route, Routes} from "react-router-dom"
import AboutMe from "./paginas/AboutMe"
import Home from "./paginas/Home"
import Menu from "./components/Menu";
import Footer from "./components/Footer"
import DefaultPage from "./components/DefaultPage";
import Post from "./paginas/Post";
import React from "react";


function App() {
  return (
    <BrowserRouter>
      <Menu/>


     <Routes>
      <Route path="/" element={<DefaultPage/>}>       
        <Route index element={<Home/>}/>
        <Route path="sobremim" element={<AboutMe/>}/>
        <Route path="posts/:id" element={<Post/>}/>
      </Route>

      <Route path="*" element={<div>Página não encontrada</div>}/>
     </Routes>

    <Footer/>
    </BrowserRouter>
  );
}

export default App
