async function Saludo(){
    let url = 'http://localhost:3000/api/'
    try{
        
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }
        const result = await response.json();
        console.log(response)
        const contenedor = document.getElementById('saludo')
        contenedor.innerHTML = `<h2>${result.message}</h2>`

    }catch(error){
        alert("Error"+error)
    }
    
}
Saludo()
