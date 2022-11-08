export function Comanda({cantidad, producto, valor}) {
    return (
        <div className="bodyComanda">
            <h1 className="nMesa">N° de Mesa</h1>
            <input placeholder="N°" className="inputNumero"></input>
            <h1 className="nombreCliente">Nombre Cliente</h1>
            <input placeholder="Nombre" className="inputNombre"></input>

            <table>
                <thead>
                    
                        <th>Cantidad</th>
                        <tr>{cantidad}</tr>
                        <th>Producto</th>
                        <tr>{producto}</tr>
                        <th>Valor</th>
                        <tr>{valor}</tr>
                    
                </thead>
            </table>
            <input placeholder="Comentario" className="inputComentario"></input>
            <br />
            <button>Enviar a Cocina</button>


        </div>
    )
}