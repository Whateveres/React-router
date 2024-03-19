//Imports
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";
import './App.css';


//Route imports
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/*Si esta parado en la ruta inicial ("/"), renderizo el componente "Home"*/}
        <Route path="contacto" element={<Contacto />} />
        {/*Si esta parado en la ruta "contacto", renderizo el componente "Contacto"*/}
        <Route path="*" element={<NotFound />} />
        {/*todas las rutas que no he colocado anteriormente (*), renderizo "Not Found"*/}
      </Routes>
      
    </>
  );
}

export default App;
