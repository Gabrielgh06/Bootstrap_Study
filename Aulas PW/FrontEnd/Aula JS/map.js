const numbers = [1, 2, 3, 4, 5]; 
//variavel    chamada do array    num=numbers
const doubled = numbers.map(num => num * 2); 

console.log("Números: " + numbers);
console.log(`Dobrados: ${doubled}`); // fazer o total do valor de uma compra
// Output: [2, 4, 6, 8, 10]


console.log("\n Função Reduce")
const soma = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(`Elementos somados: ${soma}`)