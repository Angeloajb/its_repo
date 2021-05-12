//Funcion de Calculos
const calcular_voltaje = () => {
    const d1 = document.querySelector("#inp_voltaje").Value;
    const d2 = document.querySelector("#inp_intensidad").Value;
    const d3 = document.querySelector("#inp_resistencia").Value;

    const r1 = d2 * d3; 
    

    document.querySelector("#inp_v").Value = r1;
}
const btn_producto = document.querySelector("#cal_vol");
btn_producto.addEventListener("click", calcular_voltaje);



const calcular_intensidad = () => {
    const d1 = document.querySelector("#inp_voltaje").Value;
    const d2 = document.querySelector("#inp_intensidad").Value;
    const d3 = document.querySelector("#inp_resistencia").Value;

    const r2 = d1 / d3;
    
    document.querySelector("#inp_i").Value = r2;
}
const btn_intensidad = document.querySelector("#cal_int");
btn_producto.addEventListener("click", calcular_intensidad);



const calcular_resistencia = () => {
    const d1 = document.querySelector("#inp_voltaje").Value;
    const d2 = document.querySelector("#inp_intensidad").Value;
    const d3 = document.querySelector("#inp_resistencia").Value;

    const r3 = d1 / d2;
    document.querySelector("#inp_r").Value = r3;
}
const btn_resistencia = document.querySelector("#cal_res");
btn_producto.addEventListener("click", calcular_resistencia);
