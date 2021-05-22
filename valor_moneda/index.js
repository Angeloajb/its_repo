const obtener_moneda = async () => {

    const respuesta = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales");

    const datos = await respuesta.json();

    
    let totalidad_filas = [];
        obtener_moneda.forEach(objeto => {
            let fila = `
    
                <tr>
                    <td>${objeto.url}</td>
                    <td>${objeto.url}</td>
                    <td>${objeto.url}</td>
                </tr>
    
            `;
    
            totalidad_filas.push(fila);
    
        });
    
        document.querySelector("#tb_mostrar").innerHTML = totalidad_filas.join("");
    }


    const boton = document.querySelector("#btn_mostrar");
    boton.addEventListener("clik", obtener_moneda);