let producto ={
    vestido: {
        color: 'verde',
        corte:'A',
        talla:'M'
    },
    zapatilla:{
        color:'roja',
        tacon:5,
        talla:[23,24,25,25,27],
    },
    sueter:{
        color:'Café'
    },
    tenis:{
        color:'blanco'  
    }
}

console.log(producto.vestido);
console.log(producto.zapatilla.talla[3]);