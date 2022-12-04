import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Oportunidades from "./pages/Oportunidades";
import Cliente from "./pages/Cliente";


function Rotas(){
  return(
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={ <Cliente/> }/>
        <Route path="/oportunidades/:id" element={ <Oportunidades/>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  )


}
export default Rotas;