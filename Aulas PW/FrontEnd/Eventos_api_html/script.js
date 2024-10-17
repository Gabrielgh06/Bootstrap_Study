let nome = "Gabriel Henrique"

document.getElementById('clicavel').addEventListener('click', function(){alert('Botão foi clicado')})

function clicar(){
    //alert('Clique Novo')
    document.getElementById("titulo").innerHTML = `seja bem vindo ${nome}`;
}