// Framework Web para node.js
const express = require('express');

// Biblioteca para trabalhar com mongo db
const mongoose = require('mongoose');

// cors "meio campo" para permitir requisições entre diferentes domínios(hosts / servidor)
const cors = require('cors');

const app = express();

app.use(cors()) // permite que o front acesse a API
app.use(express.json()); // permite o envio de dados no formato JSON para que a API os receba

// Conexão com o banco de dados
mongoose.connect('mongodb://localhost/produtos', { useNewUrlParser: true, UseUnifiedTopology: true});

//definir o schema para os produtos
const produtosSchema = new mongoose.Schema({
    nome: String,
    quantidade: Number,
    imagem: String,
    preco: Number
})

//definir o modelo para os produtos
const Produto = mongoose.model('Produto', produtosSchema);

// '/produtos' é uma rota para adicionar todos os produtos
app.post('/produtos', async (req, res) => {
    const novoProduto = new Produto(req.body);
    await novoProduto.save();
    resposta.json(produto);
})

// '/produtos' é uma rota para obter todos os produtos
app.get('/produtos', async (requisicao, resposta) => {
    const produtos = await Produto.find();
    resposta.json(produtos);
})

// '/produtos/:id' é uma rota para obter um produto específico
app.put('/produtos/:id', async (req, res) => {
    const produtoAtualizado = await Produto.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(produtoAtualizado);
    res.json({message: "Produto editado"});
})

// '/produtos/:id' é uma rota para deletar um produto específico
app.delete('/produtos/:id', async (req, res) => {
    await Produto.findByIdAndDelete(req.params.id);
    res.json({message: "Produto deletado"});
})

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})