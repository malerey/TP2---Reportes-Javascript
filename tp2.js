var local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
  
    ventas: [
      { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
      { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
      { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ],
  
    precios: [
      { componente: "Monitor GPRS 3000", precio: 200 },
      { componente: "Motherboard ASUS 1500", precio: 120 },
      { componente: "Monitor ASC 543", precio: 250 },
      { componente: "Motherboard ASUS 1200", precio: 100 },
      { componente: "Motherboard MZI", precio: 30 },
      { componente: "HDD Toyiva", precio: 90 },
      { componente: "HDD Wezter Dishital", precio: 75 },
      { componente: "RAM Quinston", precio: 110 },
      { componente: "RAM Quinston Fury", precio: 230 }
    ]
  };

//   precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.

function precioMaquina(componentes) {
    var precioComponente = 0;
    for(var i = 0; i < componentes.length; i++){
        //console.log(componentes[i]);
        for(var j = 0; j < local.precios.length; j++){
           if(componentes[i] == local.precios[j].componente){
               precioComponente += local.precios[j].precio;   
           }
        }
    }
    return precioComponente
}

precioMaquina(["HDD Wezter Dishital","RAM Quinston"])
console.log("Precio de la maquina con los componentes seleccionados: $" + precioMaquina(["HDD Wezter Dishital","RAM Quinston"]))

///////////////////////
//en el segundo for hay que cambiar el nombre de la variable i. las variables solo pueden declararse una vez, de lo contrario daria error
//se ejecuta el primer for y da una vuelta, entra al segundo for y da 8 vueltas (hasta cumplir la condicion del for, 8 es la longitud del array). se termina el segundo for y vuelve al primero, ahi da la segunda y ultima vuelta y despues vuelve a entrar al segundo for y vuelve a dar 8 vueltas
//////////////////////

// cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas.

 function cantidadVentasComponente(componente){
     var totalCantidadVentasComponente = 0;
     for(var i = 0; i < local.ventas.length; i++){
         //console.log(local.ventas[i].componentes)
         for(var j = 0; j < local.ventas[i].componentes.length; j++){
            //console.log(local.ventas[i].componentes[j])
            if(componente == local.ventas[i].componentes[j]){
                totalCantidadVentasComponente += 1;
            }
         }
     }
     return totalCantidadVentasComponente
 }

 cantidadVentasComponente("Monitor ASC 543");
 console.log("Cantidad de ventas del componente: " + cantidadVentasComponente("Monitor ASC 543"));

//  vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina.

// function vendedoraDelMes(mes, anio){
//     var ventasDelMes = [];
//     for (var i = 0; i < local.ventas.length; i++) {
//         //console.log(local.ventas[i].fecha)
//         var fecha = local.ventas[i].fecha;
//         var queAnio = fecha.getFullYear();
//         //console.log(queAnio)
//         var queMes = fecha.getMonth() +1;
//         //console.log(queMes)
//         if(queAnio == anio && queMes == mes){
//             //console.log("OK")
//             ventasDelMes.push(local.ventas[i]);
//             //console.log(ventasDelMes);
//         } 
//     }
//     var arrayVentasDelMesAda = [];
//     var arrayVentasDelMesGrace = [];
//     for (var i = 0; i < ventasDelMes.length; i++){
//         //console.log(ventasDelMes[i].nombreVendedora)
//         if(ventasDelMes[i].nombreVendedora == "Ada"){
//             arrayVentasDelMesAda.push(ventasDelMes[i].componentes);
//             //console.log("Array de ventas de Ada: " + arrayVentasDelMesAda)
//         }else if(ventasDelMes[i].nombreVendedora == "Grace"){
//             arrayVentasDelMesGrace.push(ventasDelMes[i].componentes);
//             //console.log("Array de ventas de Grace: " + arrayVentasDelMesGrace)
//         }
//     }
//     var ventasDelMesAda = [];
//     for (var i = 0; i < arrayVentasDelMesAda.length; i++){
//         //console.log(arrayVentasDelMesAda[i]);
//         for(var j = 0; j < arrayVentasDelMesAda[i].length; j++){
//             var pepe = arrayVentasDelMesAda[i];
//             //console.log("Array de ventas j: " + pepe[j])
//             ventasDelMesAda.push(pepe[j]);
//         }
//     }
//     //console.log("Venta del mes de Ada: " + ventasDelMesAda);

//     var ventasDelMesGrace = [];
//     for (var i = 0; i < arrayVentasDelMesGrace.length; i++){
//         //console.log(arrayVentasDelMesGrace[i]);
//         for(var j = 0; j < arrayVentasDelMesGrace[i].length; j++){
//             var pepe = arrayVentasDelMesGrace[i];
//             //console.log("Array de ventas j: " + pepe[j])
//             ventasDelMesGrace.push(pepe[j]);
//         }
//     }
//     //console.log("Venta del mes de Grace: " + ventasDelMesGrace);


//     var totalVentasMesAda = precioMaquina(ventasDelMesAda);
//     //console.log("Total de ventas del mes de Ada: $" + totalVentasMesAda);
//     var totalVentasMesGrace = precioMaquina(ventasDelMesGrace);
//     //console.log("Total de ventas del mes de Grace: $" + totalVentasMesGrace);

//     if(totalVentasMesAda > totalVentasMesGrace){
//         var mejorVendedoraDelMes = console.log("Ada fue la mejor vendedora del mes")
//     }else{
//         var mejorVendedoraDelMes = console.log("Grace fue la mejor vendedora del mes")
//     }

//     return mejorVendedoraDelMes
// }

// vendedoraDelMes(0, 2019); 

function vendedoraDelMes (mes,anio){
    var arrayVendedoras = [];
    for(var j = 0; j < local.vendedoras.length; j++){
        var objetoNuevo = 
        {   nombre: local.vendedoras[j],
            ventas: 0,
        }
        for(var i = 0; i < local.ventas.length; i++){
            if(local.ventas[i].fecha.getMonth()+1 == mes && local.ventas[i].fecha.getFullYear() == anio){
                if(objetoNuevo.nombre == local.ventas[i].nombreVendedora){
                        objetoNuevo.ventas = objetoNuevo.ventas + precioMaquina(local.ventas[i].componentes)
                }
            }
        }
        arrayVendedoras.push(objetoNuevo)
    }
    //console.log(arrayVendedoras)
    var valorMaximo = 0;
    var nombreVendedora = "";
    for(var k = 0; k < arrayVendedoras.length; k++){
        if(valorMaximo < arrayVendedoras[k].ventas){
            valorMaximo = arrayVendedoras[k].ventas;
            nombreVendedora = arrayVendedoras[k].nombre;
        }
    }
    return nombreVendedora
}

vendedoraDelMes(1,2019)
console.log("La vendedora del mes es: " + vendedoraDelMes(1,2019))

// ventasMes(mes, anio): Obtener las ventas de un mes.

function ventasDelMes(mes, anio){
    var ventasDelMes = [];
    for (var i = 0; i < local.ventas.length; i++) {
        //console.log(local.ventas[i].fecha)
        var fecha = local.ventas[i].fecha;
        var queAnio = fecha.getFullYear();
        //console.log(queAnio)
        var queMes = fecha.getMonth() + 1;
        //console.log(queMes)
        if(queAnio == anio && queMes == mes){
            //console.log("OK")
            ventasDelMes.push(local.ventas[i]);
            //console.log(ventasDelMes);
        }
    }
    //console.log(ventasDelMes)
    var arrayComponentesDelMes = [];
    for(var i = 0; i < ventasDelMes.length; i++){
        //console.log(ventasDelMes[i])
        for(var j = 0; j < ventasDelMes[i].componentes.length; j++){
            //console.log(ventasDelMes[i].componentes[j])
            arrayComponentesDelMes.push(ventasDelMes[i].componentes[j]);
        }
    }
    //console.log(arrayComponentesDelMes)
    return precioMaquina(arrayComponentesDelMes)
}

ventasDelMes(1,2019);
console.log("El total vendido en el mes fue de: $" + ventasDelMes(1,2019));

// ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.

function ventasVendedora(nombre){
    var arrayVentasTotalesVendedora = [];
    for(var i = 0; i < local.ventas.length; i++){
        if(local.ventas[i].nombreVendedora == nombre){
            arrayVentasTotalesVendedora.push(local.ventas[i].componentes)
        }
    }
    //console.log(arrayVentasTotalesVendedora)
    var VentasTotalesVendedora = [];
    for(var i = 0; i < arrayVentasTotalesVendedora.length; i++){
        //console.log(arrayVentasTotalesVendedora[i])
        for(var j = 0; j < arrayVentasTotalesVendedora[i].length; j++){
            var pepe = arrayVentasTotalesVendedora[i];
            VentasTotalesVendedora.push(pepe[j]);
        }
    }
    //console.log(VentasTotalesVendedora)
    return precioMaquina(VentasTotalesVendedora);
}

ventasVendedora("Grace");
console.log("El historico de ventas de la vendedora es de: $" + ventasVendedora("Grace"));

// componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente

function componenteMasVendido(){
    var arrayComponentes = [];
    var arrayComponentesVendidos = [];
    for(var i = 0; i < local.ventas.length; i++){
        for(var j = 0; j < local.ventas[i].componentes.length; j++){
            arrayComponentesVendidos.push(local.ventas[i].componentes[j])
        }
    }
    //console.log(arrayComponentesVendidos)
    for(var i = 0; i < local.precios.length; i++){
        arrayComponentes.push({
            nombreComponente: local.precios[i].componente,
            cantidadVentas: 0,
        })
    }
    //console.log(arrayComponentes);
    for(var i = 0; i < arrayComponentesVendidos.length; i++){
        for(var j = 0; j < arrayComponentes.length; j++){
            //console.log(arrayComponentes[i].nombreComponente);
            if(arrayComponentesVendidos[i] == arrayComponentes[j].nombreComponente){
               arrayComponentes[j].cantidadVentas++;  
            }
        }
    }
    //console.log(arrayComponentes)
    var mayor = 0;
    var nombreMayor = "";
    for(var i = 0; i < arrayComponentes.length; i++){
         if(mayor < arrayComponentes[i].cantidadVentas){
             mayor = arrayComponentes[i].cantidadVentas;
             nombreMayor = arrayComponentes[i].nombreComponente;
         }
    }
    //console.log(mayor);
    //console.log(nombreMayor);
    return nombreMayor
}

componenteMasVendido();
console.log("El componente mas vendido es: " + componenteMasVendido())


//huboVentas(mes, anio): que indica si hubo ventas en un mes determinado.

function huboVentas(mes, anio){

    for (var i = 0; i < local.ventas.length; i++) {
        //console.log(local.ventas[i].fecha)
        var fecha = local.ventas[i].fecha;
        var queAnio = fecha.getFullYear();
        //console.log(queAnio)
        var queMes = fecha.getMonth() +1;
        //console.log(queMes)
    }
    if(queAnio == anio && queMes == mes){
        var huboVentas = true;
    }else{
        huboVentas = false
    }
    return huboVentas;
}

huboVentas(3,2019);
console.log("Hubo ventas este mes? " + huboVentas(3,2019));

// Como se abrió una nueva sucursal en Caballito, ahora los datos de las ventas también tienen el nombre de la sucursal en la cual se realizó. Por ejemplo: { fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: 'Centro' }. Por este cambio, se pide:

// En las ventas ya existentes, tenemos que agregar la propiedad sucursal con el valor Centro (ya que es la sucursal original).

// Agregar al objeto principal la propiedad sucursales: ['Centro', 'Caballito']

// Cargar la siguiente información en el array ventas, creando sus respectivos objetos siguiendo el patrón: fecha, nombreVendedora, componentes, sucursal

// 12/02/2019, Hedy, [Monitor GPRS 3000, HDD Toyiva], Centro
// 24/02/2019, Sheryl, [Motherboard ASUS 1500, HDD Wezter Dishital], Caballito
// 01/02/2019, Ada, [Motherboard MZI, RAM Quinston Fury], Centro
// 11/02/2019, Grace, [Monitor ASC 543, RAM Quinston], Caballito
// 15/02/2019, Ada, [Motherboard ASUS 1200, RAM Quinston Fury], Centro
// 12/02/2019, Hedy, [Motherboard ASUS 1500, HDD Toyiva], Caballito
// 21/02/2019, Grace, [Motherboard MZI, RAM Quinston], Centro
// 08/02/2019, Sheryl, [Monitor ASC 543, HDD Wezter Dishital], Centro
// 16/02/2019, Sheryl, [Monitor GPRS 3000, RAM Quinston Fury], Centro
// 27/02/2019, Hedy, [Motherboard ASUS 1200, HDD Toyiva], Caballito
// 22/02/2019, Grace, [Monitor ASC 543, HDD Wezter Dishital], Centro
// 05/02/2019, Ada, [Motherboard ASUS 1500, RAM Quinston], Centro
// 01/02/2019, Grace, [Motherboard MZI, HDD Wezter Dishital], Centro
// 07/02/2019, Sheryl, [Monitor GPRS 3000, RAM Quinston], Caballito
// 14/02/2019, Ada, [Motherboard ASUS 1200, HDD Toyiva], Centro

function propiedadSucursal(){
    for(var i = 0; i < local.ventas.length; i++){
        local.ventas[i].sucursal = "Centro"
    }
}

propiedadSucursal()
//console.log(local.ventas)

function propiedadSucursales() {
    local.sucursales = ["Centro", "Caballito"]
}

propiedadSucursales()

function agregarVentas(){
    local.ventas.push({
        fecha: new Date(2019, 2, 12), 
        nombreVendedora: "Hedy", 
        componentes: ["Monitor GPRS 3000", "HDD Toyiva"],
        sucursal: "Centro",
    },
    {
        fecha: new Date(2019, 2, 24), 
        nombreVendedora: "Sheryl", 
        componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"],
        sucursal: "Caballito", 
    },
    {
        fecha: new Date(2019, 2, 1), 
        nombreVendedora: "Ada", 
        componentes: ["Motherboard MZI", "RAM Quinston Fury"],
        sucursal: "Centro",   
    },
    {
        fecha: new Date(2019, 2, 11), 
        nombreVendedora: "Grace", 
        componentes: ["Monitor ASC 543", "RAM Quinston"],
        sucursal: "Caballito",   
    },
    {
        fecha: new Date(2019, 2, 15), 
        nombreVendedora: "Ada", 
        componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"],
        sucursal: "Centro",   
    },
    {
        fecha: new Date(2019, 2, 12), 
        nombreVendedora: "Hedy", 
        componentes: ["Motherboard ASUS 1500", "HDD Toyiva"],
        sucursal: "Caballito",   
    },
    {
        fecha: new Date(2019, 2, 21), 
        nombreVendedora: "Grace", 
        componentes: ["Motherboard MZI", "RAM Quinston"],
        sucursal: "Centro",   
    },
    {
        fecha: new Date(2019, 2, 8), 
        nombreVendedora: "Sheryl", 
        componentes: ["Monitor ASC 543", "HDD Wezter Dishital"],
        sucursal: "Centro",   
    },
    {
        fecha: new Date(2019, 2, 16), 
        nombreVendedora: "Sheryl", 
        componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"],
        sucursal: "Centro",   
    },
    {
        fecha: new Date(2019, 2, 27), 
        nombreVendedora: "Hedy", 
        componentes: ["Motherboard ASUS 1200", "HDD Toyiva"],
        sucursal: "Caballito",   
    },
    {
        fecha: new Date(2019, 2, 22), 
        nombreVendedora: "Grace", 
        componentes: ["Monitor ASC 543", "HDD Wezter Dishital"],
        sucursal: "Centro",   
    },
    {
        fecha: new Date(2019, 2, 5), 
        nombreVendedora: "Ada", 
        componentes: ["Motherboard ASUS 1500", "RAM Quinston"],
        sucursal: "Centro",   
    },
    {
        fecha: new Date(2019, 2, 1), 
        nombreVendedora: "Grace", 
        componentes: ["Motherboard MZI", "HDD Wezter Dishital"],
        sucursal: "Centro",   
    },
    {
        fecha: new Date(2019, 2, 7), 
        nombreVendedora: "Sheryl", 
        componentes: ["Monitor GPRS 3000", "RAM Quinston"],
        sucursal: "Caballito",   
    },
    {
        fecha: new Date(2019, 2, 14), 
        nombreVendedora: "Ada", 
        componentes: ["Motherboard ASUS 1200", "HDD Toyiva"],
        sucursal: "Centro",   
    },
    )
}
agregarVentas()

//console.log(local.ventas)

// Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.

function ventasSucursal(sucursal){
    var totalVentasSucursal =  0;
    for(var i = 0; i < local.ventas.length; i++){
        if(local.ventas[i].sucursal == sucursal){
            totalVentasSucursal = totalVentasSucursal + precioMaquina(local.ventas[i].componentes)
        }
    }
    return totalVentasSucursal;
}

ventasSucursal("Centro");
console.log("El total de ventas de la sucursal fue de: $" + ventasSucursal("Centro"));

// Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina.


function sucursalDelMes(mes,anio){
    var totalSucursalDelMes = [];
    for(var i = 0; i < local.sucursales.length; i++){
        totalSucursalDelMes.push({
            nombreSucursal: local.sucursales[i],
            totalVentas: 0,
        })
    }
    //console.log(totalSucursalDelMes)
    for (var i = 0; i < local.ventas.length; i++) {
        //console.log(local.ventas[i].fecha)
        var fecha = local.ventas[i].fecha;
        var queAnio = fecha.getFullYear();
        //console.log(queAnio)
        var queMes = fecha.getMonth() +1;
        //console.log(queMes)
        if(queAnio == anio && queMes == mes){
            for(var j = 0; j < totalSucursalDelMes.length; j++){
                if(totalSucursalDelMes[j].nombreSucursal == local.ventas[i].sucursal){
                    totalSucursalDelMes[j].totalVentas =  totalSucursalDelMes[j].totalVentas + precioMaquina(local.ventas[i].componentes)
                }
            }
         }
    }
    //console.log(totalSucursalDelMes)
    var mayor = 0;
    var nombreMayor = "";
    for(var i = 0; i < totalSucursalDelMes.length; i++){
         if(mayor < totalSucursalDelMes[i].totalVentas){
             mayor = totalSucursalDelMes[i].totalVentas;
             nombreMayor = totalSucursalDelMes[i].nombreSucursal;
         }
    }
    //console.log(mayor);
    //console.log(nombreMayor);
    return nombreMayor
}

sucursalDelMes(1,2019);
console.log("La sucursal con mas ventas en ese mes fue: " + sucursalDelMes(1,2019));

// Para tener una mejor muestra de como está resultando el local, queremos desarrollar un reporte que nos muestre las ventas por sucursal y por mes. Para esto, necesitamos crear las siguientes funciones:

// renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año

function renderPorMes(){
 var meses = [1,2,3,4,5,6,7,8,9,10,11,12];
 var nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 var mensaje = "";
 var totalMes = [];
 
    console.log("Ventas por mes:")
    for(var i = 0; i < meses.length; i++){
            totalMes.push(ventasDelMes(meses[i],2019));
            //console.log(totalMes)
    }
    for(var i = 0; i < nombresMeses.length; i++){
        mensaje = console.log("Total de " + nombresMeses[i] + " 2019: " + totalMes[i]);
    }
return mensaje
}

renderPorMes();

// renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal

function renderPorSucursal(){
    var mensaje = "";
    console.log("Ventas por sucursal:")
    for(var i = 0; i < local.sucursales.length; i++){
        mensaje = console.log("Total de " + local.sucursales[i] + ": " + ventasSucursal(local.sucursales[i]))
    }
    return mensaje
}

renderPorSucursal();

// render(): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó

function render(){
    console.log("Reporte");
    renderPorMes();
    renderPorSucursal();
    console.log("Producto estrella: " + componenteMasVendido());

    function mejorVendedora(){
        var arrayVendedoras = [];
        for(var i = 0; i < local.vendedoras.length; i++){
            var objetoVendedoras = {
                nombreVendedora: local.vendedoras[i],
                totalVendedora: ventasVendedora(local.vendedoras[i]),
            }
            //console.log(objetoVendedoras)
            arrayVendedoras.push(objetoVendedoras);
        }
        //console.log(arrayVendedoras)
        var mayorVenta = 0;
        var nombreMayor = "";
        for(var i = 0; i < arrayVendedoras.length; i++){
            //console.log(arrayVendedoras[i])
            if(mayorVenta < arrayVendedoras[i].totalVendedora){
                mayorVenta = arrayVendedoras[i].totalVendedora;
                nombreMayor = arrayVendedoras[i].nombreVendedora;
            }
        }
        return nombreMayor
    }
    mejorVendedora()

    console.log("Vendedora que más ingresos generó: " + mejorVendedora())
}

render();