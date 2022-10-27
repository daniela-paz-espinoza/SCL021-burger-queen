import React from "react";
import logo from "../imagenes/logo.jpg";
import { Link } from "react-router-dom"


export function Menu() {
  return (
    <div>
      <img src={logo} width="300px" className="logo" />
      <h1 className="tituloMenu">Escoge el menú solicitado</h1>
      <button className="btnDesayuno"><Link to="/Desayuno" className="nomDesayuno">Desayuno</Link></button>
      <button className="btnAlmuerzo"><Link to="/Almuerzo" className="nomAlmuerzo">Almuerzo</Link></button>
      
    </div>
  )
}