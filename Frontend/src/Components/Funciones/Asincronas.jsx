import { useState } from "react"

const [pedidos, setPedidos] = useState([])
const API = import.meta.env.VITE_API_URL

export async function GetPedidos() {
    setError('')
    setPedidos([])
    
    const respuesta = await fetch(`${API}Pedidos`)
    
    if (!respuesta.ok) { throw new Error("No se ha podido traer los datos.") }

    const resultados = await respuesta.json()
    return resultados;
}

export async function GetPedidosId(Id) {
    const [index, setIndex] = useState(Number)
    setIndex(Id)
    setError('')
    setPedidos([])
    
    if (!Id) return;

    try {
        const respuesta = await fetch(`${API}Pedidos/${encodeURIComponent(index)}`)
        
        if (!respuesta.ok) { throw new Error("Ha ocurrido un error consultando la información") }
        const resultado = await respuesta.json()
        console.log(resultado)
        
    } catch (error) {
        setError(error)
    } finally {
        setCargando(false)
    }
}


export async function GetPedidosArea(Area) {
    const [area, setArea] = useState('')
    setArea(Area)
    setError('')
    setPedidos([])

    if (!area) return;

    try {
        const respuesta = await fetch(`${API}Pedidos/Area/${encodeURIComponent(area)}`)

        if (!respuesta.ok) { throw new Error("Error al consultar.") }
    
        const resultados = await respuesta.json()
        console.log(resultados)

    } catch (error) {
        setError(error)
    } finally {
        setCargando(false)
    }

}


