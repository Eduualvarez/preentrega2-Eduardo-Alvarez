const arrayCuotas = [];
let interesesBase = 1;

const agregarObjetosArray = function (num) //funcion para agregar cuotas e intereses al array ===> la hace reutilizable :) .
{
    
for(let i = 0; i <=num; i++){
    let cuotas=i;
    let intereses = ((interesesBase+(i*0.02))).toFixed(2);
    let id=i;
    let objArray =
    { id: id,
      cuotas: cuotas,
      intereses: intereses        
    };
     arrayCuotas.push(objArray);
}}
agregarObjetosArray(24);// diferentes casos segun las cuotas que deseemos tener... 





//para validar el monto sino devuelve null  mas adelante si es null, voy a agregar algun aviso que sea visible en el dom 
const  validarMonto = function () {
 
    const montoInput = document.getElementById("monto");
    const monto = Number(montoInput.value);

    const montoValido = (!isNaN(monto) &&monto>0)? monto : null;
    return montoValido;
    
};
//para validar cuotas sino devuelve null          mas adelante si es null, voy a agregar algun aviso que sea visible en el dom 
const validarCuotas = function () {
    const cuotasInput = document.getElementById("cuotas");
    const cuotas = Number(cuotasInput.value);

    const cuotasValidas = (cuotas>=1 && cuotas<=24)? cuotas : null;
    return cuotasValidas;
}
//para guardar el monto y las cuotas en el localStorage, para depues buscar ahi el valor para aplicar los intereses y dar el resultado final sin iva.
const guardarDatos= function() {

    document.getElementById("enviar").addEventListener("click", 
        () =>  {
         
            const montoValido = validarMonto();
            const cuotasValidas = validarCuotas();
   
        if(montoValido!==null && cuotasValidas!==null)
            {
                localStorage.setItem("monto", montoValido);
                localStorage.setItem("cuotas", cuotasValidas);
            }
        })

};


const borrarLocalStorage =  function ()
    {
        document.getElementById("borrar").addEventListener("click",
            () => { localStorage.clear();
                   location.reload();
                })
};

guardarDatos();
borrarLocalStorage();
/*falta agregar que las funciones devuelvan cuando es error
hacer visual los objetos del [] 
funcion que calcule el valor final sin y con iva 
dar retoques en lo visual 
implementar json en algun lado
simplificar el codigo y agregar mas cosas ;)
*/