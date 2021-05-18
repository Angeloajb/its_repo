
function mostrar()
{
    let info = {
        nombre:'Amgelo',
        apellido:'Briceño',
        correos: {
            gmail:'briceño@gmail.com',
            hotmail:'briceño@hotmail.com',
        }
    }

    console.log(`
        Mi Nombre es: ${info.nombre}
        Mi Apellido es: ${info.apellido}
        Correo: ${info.correos.gmail}
    `);

}

function mostrar_elementos_arreglo()
{
    let valores =[44,10,8,99];
    console.log(valores[2]);
}


function mostrar_array_objetos()
{
    let arreglo_objetos = [
        {
            taller:'Programacion 1',
            anio:'5to',
            escuela:'cet30',
        },
        {
            taller:'web2',
            anio:'6to',
            escuela:'cet30',
        }
    ];

    /*arreglo_objetos.forEach(objeto => {
        console.log(`
            Escuela: ${objeto.escuela}
            Taller: ${objeto.taller}
            Año: ${objeto.anio}
        `)
    });*/
    let totalidad_filas = [];
    arreglo_objetos.forEach(objeto => {
        let fila = `

            <tr>
                <td>${objeto.escuela}</td>
                <td>${objeto.taller}</td>
                <td>${objeto.anio}</td>
            </tr>

        `;

        totalidad_filas.push(fila);

    });

    document.querySelector("#tb_datos").innerHTML = totalidad_filas.join("");
}