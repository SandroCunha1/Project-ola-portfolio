import {BrowserRouter, Route, Routes} from "react-router-dom"
import AboutMe from "./paginas/AboutMe"
import Home from "./paginas/Home"
import Menu from "./components/Menu";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Menu/>


     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sobremim" element={<AboutMe/>}/>
      <Route path="*" element={<div>Página não encontrada</div>}/>
     </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App
