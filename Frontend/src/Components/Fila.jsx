import { useState } from "react";
import { useEffect } from "react";
import './style.css'
const API = import.meta.env.VITE_API_URL

function Fila() {
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState('')
    const [pedidos, setPedidos] = useState([])
    const [area, setArea] = useState('')

    async function GetPedidosArea(Area){
        setArea(Area)
        setError('')
        setPedidos([])
        
        if (!area) return;
        try{
            const respuesta = await fetch(
                `${API}Pedidos/Area/${encodeURIComponent(area)}`
            )
            if(!respuesta.ok){
                throw new Error("Error al consultar.")
            }
            const resultados = await respuesta.json()
            console.log(resultados)
            
        }catch (error){
            setError(error)
        }finally{
            setCargando(false)
        }

    }


    useEffect(()=>{
        fetch(`${API}Pedidos`)
        .then(respuesta =>{
            if(!respuesta.ok){
                throw new Error("Algo fallo")
            }
            console.log(respuesta)
            return respuesta.json()
        })
        .then(datos =>{
            
            setPedidos(datos.data)
        })
        .catch(error =>{
            setError(error.message)
        })
        .finally(()=>{
            setCargando(false)
        })
    }, [])

    return (
        <>
            {cargando && <h1>Cargando Pedidos...</h1>}
            {error && <p>Error: {error}</p>}
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