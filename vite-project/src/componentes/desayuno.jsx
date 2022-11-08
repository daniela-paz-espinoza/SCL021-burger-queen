import React, { useState } from "react";
import { Comanda } from "./comanda";
import logo from "../imagenes/logo.jpg";
import Menu from "../componentes/menu.json";


const desayunoBeber = Menu.beber;
const desayunoComer = Menu.comer

export function Desayuno() {
    const [estado, setEstado] = useState("beber")
    const [orden, setOrden] = useState([])

    return (
        <div className="bodyDesayuno">

            <img src={logo} width="300px" className="logo" />
            <h1 className="tituloDesayuno">Realiza el Pedido</h1>
            <section>
                <Comanda
                cantidad = {1}
                producto = "items.name"
                valor = {2}
                />
            </section>
            <button className="btnesDesayuno" onClick={() => { setEstado("beber") }}>Para Beber</button> 
            <button className="btnesDesayuno" onClick={() => { setEstado("comer") }}>Para Comer</button>           
            <div className="json">
                {estado === "beber" ? (<>{desayunoBeber.map(items => (
                    <div className="divContainer">
                        <button className="btnesBeber" onClick={() => { setOrden(items) }}>{items.name} {items.price} <img src={items.picture} width="70px" /></button>
                    </div>
                ))}</>) : null}
            </div>
            
            <div className="jsonDos">
                {estado === "comer" ? (<>{desayunoComer.map(items => (
                    <div className="divContainer">
                        <button className="btnesComer" >{items.name} {items.price} <img src={items.picture} width="70px" /></button>
                    </div>
                ))}</>) : null}
                
                </div>

        </div>
            )
}
console.log(Object.values(items.picture))