import { useState } from "react";
import { useEffect } from "react";
import { GetPedidoPorId, GetPedidos, GetPedidosArea } from "./Funciones/Asincronas";

import './style.css'

function Fila() {
    const [valor, setValor] = useState(Number)

    return (
        <>

            {cargando && <h1>Cargando Pedidos...</h1>}
            {error && <p>Error: {error}</p>}

            <label htmlFor="Buscador">Buscar por ID</label>
            <input 
                type="text" 
                id="Buscador" 
                placeholder="ID"
                onChange={(e) => setValor(e)}
            />

            <button onClick={() => GetPedidoPorId(valor)}>
                Buscar
            </button>
            <table>
                <caption>
                    Tabla Clientes
                </caption>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Pedido</th>
                        <th>NIT</th>
                        <th>Area
                            <select 
                            id="selector" 
                            defaultValue="-----"
                            onChange={(e) => GetPedidosArea(e.target.value)}>
                                <option value="---">-----</option>
                                <option value="Comercial">Comercial</option>
                                <option value="Logística" >Logística</option>
                                <option value="Servicio al Cliente">Servicio al Cliente</option>
                                <option value="Facturación">Facturación</option>
                            </select>
                        </th>
                        <th>Estado</th>
                        <th>Ciudad</th>
                        <th>Fecha Pedido</th>
                        <th>Valor Total</th>
                        <th>Prioridad</th>
                    </tr>
                </thead>
                <tbody id="tabla">
                    {pedidos.map((pedido) => (
                        <tr key={pedido.id}>
                            <th scope="row">{pedido.id}</th>
                            <td>{pedido.Pedido}</td>
                            <td>{pedido.NitCliente}</td>
                            <td>{pedido.Area}</td>
                            <td>{pedido.Estado}</td>
                            <td>{pedido.Ciudad}</td>
                            <td>{pedido.FechaPedido}</td>
                            <td>{pedido.ValorTotal}</td>
                            <td>{pedido.Prioridad}</td>
                        </tr>

                    ))}
                </tbody>
                <tfoot>

                </tfoot>
            </table>

        </>
    )
}
export default Fila