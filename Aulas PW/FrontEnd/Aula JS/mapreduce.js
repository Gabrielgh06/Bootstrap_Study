const texts = [
    "Ola Mundo","Bem-vindo ao outro lado do Mundo","Mundo","Aula de Programação Web"
];

//Map: Transforma um array de texto em pares chave-valor

const map = texts.flatMap(text =>{
    return text.split(' ').map(word => ({word:word, cont: 1}));
})

console.log("Map: ", map);

// Fase de Redução
// Reduzir os pares chave-valor para contar a frequência das palavras
const reduce = map.reduce((acc, current) => {
    // Verifica se a palavra já existe no acumulador
    if (acc[current.word]) {
        // Se existir, incrementa o contador
        acc[current.word] += current.count;
    } else {
        // Se não existir, inicializa o contador
        acc[current.word] = current.count;
    }

    return acc;
}, {});

console.log('Reduce:', reduce);
