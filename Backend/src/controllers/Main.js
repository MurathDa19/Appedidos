const datos = require('./Data.json')

/**
 * Funcion que devuelve un hola 
 * @param {*} req 
 * @param {*} res 
 */
const getHello = (req, res) => {
    res.json({ message: 'Hola desde Express.js' });
};
/**
 * Endpoint que trae los datos generales de todos los Pedidos
 * @param {*} req 
 * @param {*} res 
 * @returns {*} Datos
 */
const GetPedidos = (req, res) => {
    res.json(datos)
}


/**
 * Endpoint para encontrar datos de un Pedido por su ID
 * @param {*} req 
 * @param {*} res 
 * @returns {*} Resp
 */
const GetPedidoPorId = (req, res) => {
    const { id } = req.params;
    const Resp = datos.data.find(item => item.id === Number(id))

    if (!Resp) {
        return res.status(404).json({
            message: "Usuario no encontrado."
        })
    }
    return res.json(Resp);
};

/**
 * Endpoint para filtar pedidos por Area
 * @param {*} req 
 * @param {*} res 
 * @returns {*} res
 */
const GetPedidosxArea = (req, res) => {
    const { Area } = req.params
    const Resp = datos.data.filter(
        clientes => clientes.Area === Area
    )

    if (Resp.length === 0) {
        return res.status(404).json({
            message: "No se encontraron pedidos para esta área."
        });
    }
    return res.status(200).json({
        total: Resp.length,
        data: Resp
    });
}


module.exports = { getHello, GetPedidos, GetPedidoPorId, GetPedidosxArea };