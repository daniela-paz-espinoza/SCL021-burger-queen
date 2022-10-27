import React from "react";
import logo from "../imagenes/logo.jpg";
import Menu from "../componentes/menu.json";
console.log(Menu.desayuno);

const desayuno = Menu.desayuno;


export function Desayuno() {
    return (
        <div>
            <img src={logo} width="300px" className="logo" />
            <h1 className="tituloDesayuno">Escoge tu menú</h1>
            <div className="json">
                {desayuno.map(items => (
                    <ul>

                        <button className="btnesDesayuno">{items.name} <br /> {items.price} <br /> {items.imagen}</button>
                    </ul>

                ))}

            </div>

        </div>
    )
}