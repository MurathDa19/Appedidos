async function fetchClientes() {
    let url = 'http://localhost:3000/api/Pedidos'
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Mal ahi")
        }

        const result = await response.json()
        console.log(result)
        const contenedor = document.getElementById('tabla')
        contenedor.innerHTML = ""
        result.data.forEach(element => {
            if (element.Estado == 'Pendiente') {

            }
            contenedor.innerHTML +=
                `
                <tr>
                <th scope="row">${element.id}</th>
                <td>${element.Pedido}</td>
                <td>${element.NitCliente}</td>
                <td>${element.Area}</td>
                <td>${element.Estado}</td>
                <td>${element.Ciudad}</td>
                <td>${element.FechaPedido}</td>
                <td>${element.ValorTotal}</td>
                <td>${element.Prioridad}</td>
                </tr>
        `
        });
    } catch (error) {
        alert("Error" + error)
    }
}
async function BuscarCliente() {
    const id = document.getElementById('buscar').value.trim()
    const contenedor = document.getElementById('tabla')

    if (!id || id == null) {
        await fetchClientes()
    }
    try {
        const url = `http://localhost:3000/api/Pedidos/${id}`
        const response = await fetch(url)
        if (response.status === 404) {
            contenedor.innerHTML = `
                <tr>
                    <td colspan="9" class="text-center">Pedido no encontrado o inexistente</td>
                </tr>
            `
            return
        }
        const result = await response.json()
        console.log(result)

        contenedor.innerHTML =
            `
                <tr>
                <th scope="row">${result.id}</th>
                <td>${result.Pedido}</td>
                <td>${result.NitCliente}</td>
                <td>${result.Area}</td>
                <td>${result.Estado}</td>
                <td>${result.Ciudad}</td>
                <td>${result.FechaPedido}</td>
                <td>${result.ValorTotal}</td>
                <td>${result.Prioridad}</td>
                </tr>
        `

    } catch (error) {
        alert("Error" + error)
    }

}

async function FiltrarxArea() {
    const Area = document.getElementById('selector').value
    const contenedor = document.getElementById('tabla')

    try {
        const url = `http://localhost:3000/api/Pedidos/Area/${Area}`
        const response = await fetch(url)
        if (response.status === 404) {
            contenedor.innerHTML = `
                <tr>
                    <td colspan="3" class="text-center">No se encontraron registros con ${Area}</td>
                </tr>
            `
            return
        }
        const result = await response.json()
        console.log(result)
        contenedor.innerHTML = ""

        result.data.forEach(element => {

            contenedor.innerHTML +=
                `
                <tr>
                <th scope="row">${element.id}</th>
                <td>${element.Pedido}</td>
                <td>${element.NitCliente}</td>
                <td>${element.Area}</td>
                <td>${element.Estado}</td>
                <td>${element.Ciudad}</td>
                <td>${element.FechaPedido}</td>
                <td>${element.ValorTotal}</td>
                <td>${element.Prioridad}</td>
                </tr>
        `
        });

    } catch (error) {
        alert('Error: ' + error)
    }


}

const Selector = document.getElementById('selector')
Selector.addEventListener('change', function () {
    FiltrarxArea()
    const M = document.getElementById('selector').value
    if (M === '---') {
        fetchClientes()
        
    }
})
fetchClientes()