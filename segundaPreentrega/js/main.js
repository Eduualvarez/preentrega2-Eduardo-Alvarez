const array = [
    {cuota:1, interes:1.00},
    {cuota:2, interes:1.02},
    {cuota:3, interes:1.04},
    {cuota:4, interes:1.06},
    {cuota:5, interes:1.08},
    {cuota:6, interes:1.10},
    {cuota:7, interes:1.12},
    {cuota:8, interes:1.14},
    {cuota:9, interes:1.16},
    {cuota:10, interes:1.18},
    {cuota:11, interes:1.20},
    {cuota:12, interes:1.22},
    {cuota:13, interes:1.24},
    {cuota:14, interes:1.26},
    {cuota:15, interes:1.28},
    {cuota:16, interes:1.30},
    {cuota:17, interes:1.32},
    {cuota:18, interes:1.34},
    {cuota:19, interes:1.36},
    {cuota:20, interes:1.38},
    {cuota:21, interes:1.40},
    {cuota:22, interes:1.42},
    {cuota:23, interes:1.44},
    {cuota:24, interes:1.46},

];

const calcularIntereses = function ()
    {   
       const monto =parseFloat(prompt("ingrese su monto"));
       if(isNaN(monto) || monto<=0)
       {
            alert("Monto invalido, ingrese un valor positivo. ");
            return;
       }
    
       const numeroDeCuotas = parseInt(prompt("ingrese numero de cuotas(1-24)"))-1;
       if(isNaN(numeroDeCuotas) || numeroDeCuotas<0 || numeroDeCuotas>= array.length) 
        {
            alert("ingrese un numero de cuotas entre 1 y 24.");
            return;
        }
       const interes = array[numeroDeCuotas].interes;
       const totalPrestamo = interes*monto;
       console.log(`el total del prestamo es ${totalPrestamo}$ sin el Iva.`);
     

       const saberInteres=prompt("desea saber el interes segun las cuotas que eligio? (si-no)").toLowerCase();
       if(saberInteres==="si")
       {
        console.log(`El interés para ${array[numeroDeCuotas].cuota} cuotas, es de ${((interes-1)*100).toFixed(0)} % sobre el monto inicial.`);
         }
        const CalcularIva=totalPrestamo*1.21;
        const saberIva=prompt("desea saber el valor final del prestamo con el iva?(si-no)").toLowerCase();
        if(saberIva==="si")
            {
                console.log(`El valor final con el Iva es: ${(CalcularIva).toFixed(2)}$ en un total de ${array[numeroDeCuotas].cuota} cuotas, cada una con un valor de ${(CalcularIva/array[numeroDeCuotas].cuota).toFixed(2)}$`);
            }

    };

calcularIntereses();




