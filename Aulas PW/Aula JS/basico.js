var nome = "Gabriel Henrique";
var nome = "Priscila Santanna";

let idade = 26;
idade = 25;

console.log(nome);
console.log(idade);

console.log(1 + "1")

let a = 10;
let b = 10;
let c = 3;

if (a === 10){
    console.log("verdadeiro");
}else{
    console.log("falso");
}

//Quando constantes são nomeadas, sempre serão com caracteres MAIÚSCULOS, e separados com underscore (upper snake case) NOME_DA_CONSTANTE
const PI = 3.1415;
console.log(PI);

console.log(typeof nome);


//Array
let frutas = ["banana", "maçã", "uva", "morango", 6];

console.log(frutas[0])
console.log(frutas.length)
for (let i =0; i < frutas.length; i++){
    console.log(frutas[i])
}

let aluno = [
    {
        nome: "Gabriel",
        idade: 26,
        altura: 1.85,
        curso: "ADS",
        materias: ["PW", "Banco de Dados", "Engenharia de Software"]
    },
    {
        nome: "Priscila",
        idade: 25,
        curso: "Arquitetura",
        materias: ["Desenho", "Projeto", "Construção"]
    }
]

for(i = 0; i < aluno.length; i++){
    console.log(`O aluno ${aluno[i].nome} tem ${aluno[i].idade} anos, cursa ${aluno[i].curso} e está matriculado nas seguintes matérias: ${aluno[i].materias}`)
}
    

//Objeto
let pessoa = {
    nome: "Gabriel",
    idade: 26,
    altura: 1.85
}

//console.log(pessoa.nome + " tem " + pessoa.idade + " anos e " + pessoa.altura + "m de altura");

//Interpolação utiliza-se crase ``
//console.log(`Nome completo: ${pessoa.nome} tem ${pessoa.idade} anos e ${pessoa.altura}m de altura`);

//foreach ou forin
console.log("For each ou for in")
for (let a in aluno) {
    console.log(aluno[a])
};

//for of
console.log("For of")
for (let a of aluno) {
    console.log(a)
};
/*
//Foreach puro
console.log("Foreach")
aluno.materias.array.forEach(elemento => {
    console.log(elemento)
});
*/

//----------Json----------Json----------Json----------Json----------Json----------Json----------Json----------Json

let Objeto = {
    nome: "Gabriel",
    idade: 26
}

let exemploJson = {
    "nome": "Gabriel",
    "idade": 26,
    "Hobbies": ["Jogar", "Trilha", "Dormir"]
}

console.log(typeof Objeto)
console.log(exemploJson)

//Funções
//Função sem retorno = void = procedimento

function soma(){
    console.log(1+2)
}

//Função como retorno e parametros
function subtracao(a, b){
    return a-b;
}
console.log(subtracao(10,2))

//Arrow function
let exemplo = () => {
    return "Minha arrow function"
}

console.log(exemplo())