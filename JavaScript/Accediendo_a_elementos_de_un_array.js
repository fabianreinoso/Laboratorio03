//Accediendo_a_elementos_de_un_array

const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++ ){
    console.log(i + ' : ' + autos[i]);
} 