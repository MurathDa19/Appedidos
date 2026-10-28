const API = import.meta.env.VITE_API_URL

export async function GetPedidos() {
    const respuesta = await fetch(`${API}Pedidos`)
    if (!respuesta.ok) { throw new Error("No se ha podido traer los datos.") }
    return await respuesta.json();
}
export async function GetPedidosId(Id) {
    if (!Id) return;
    const respuesta = await fetch(`${API}Pedidos/${encodeURIComponent(Id)}`)
    if (!respuesta.ok) { throw new Error("Ha ocurrido un error consultando la información") }
    return await respuesta.json()
}
export async function GetPedidosArea(Area) {
    if (!Area) return;
    const respuesta = await fetch(`${API}Pedidos/Area/${encodeURIComponent(Area)}`)
    if (!respuesta.ok) { throw new Error("Error al consultar pedidos por Area.") }
    return await respuesta.json()
}

export async function GetPedidosEstado(Estado){
    if(!Estado) return;
    const respuesta = await fetch(`${API}Pedidos/Estado/${encodeURIComponent(Estado)}`)
    if(!respuesta.ok){ throw new Error('Error al consultar pedidos por Estado.') }
    return await respuesta.json()
}



