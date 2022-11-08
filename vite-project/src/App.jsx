import { Menu } from "./componentes/menu";
import { Rol } from "./componentes/rol";
import { Cocina } from "./componentes/cocina";
import { Routes, Route } from "react-router-dom";
import { Desayuno } from "./componentes/desayuno";
import { Almuerzo } from "./componentes/almuerzo";
import { Comanda } from "./componentes/comanda";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Rol />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Desayuno" element={<Desayuno />} />
        <Route path="/Almuerzo" element={<Almuerzo />} />
        <Route path="/Cocina" element={<Cocina />} />
        <Route path="/Comanda" element={<Comanda />} />
      </Routes>
    </>
  );
};

//export default App;
