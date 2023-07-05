var x = prompt('Hola, dime tu Nombre');
var msjBienvenida = 'Hola, Bienvenido Productor/a' + x;
console.log(msjBienvenida);

var numero = prompt('Edad,Esto es una pagina a dedicacion a venta/compra');
switch (numero) {
    case 'edad': {
        console.log('Edad, Esto es una pagina a dedicacion a venta/compra.');
        break;
    }
    default:{
        console.log('eres mayor de edad');
    }
}