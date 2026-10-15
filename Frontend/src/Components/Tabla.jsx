export function Tabla(params) {
    return (
        <>
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
                                <select id="selector">
                                    <option value="---">-----</option>
                                    <option value="Comercial">Comercial</option>
                                    <option value="Logística" selected>Logística</option>
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
                        
                    </tbody>
                    <tfoot>

                    </tfoot>
            </table>

        </>
    )

}