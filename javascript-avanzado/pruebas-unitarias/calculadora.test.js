const sumar = require('./calculadora');

describe('Pruebas en le componente calculadora',()=>{
    test('Pruebas en la funcion sumar',()=>{
        expect(sumar(3,5)).toBe(8);
    })
});