 import React from "react";
 import { Link } from "react-router-dom";
 import logo from "../imagenes/logo.jpg"

 export function Rol() {
     return (
       <div>
        <img src={logo} width="300px" className="logo" />
         <h1 className="tituloRol">¿Cúal es tu rol en el Palace?</h1>
         <button className="btnMesero"><Link to="Menu" className="nomMesero">Mesero</Link></button>
         <button className="btnChef"><Link to="Cocina" className="nomChef">Chef</Link></button>
       </div>
     )
   }