const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Caminho para o nosso "banco de dados" JSON
const messagesFilePath = path.join(__dirname, 'messages.json');

// --- MIDDLEWARES ---
app.use((req, res, next) => {
    console.log(`Recebida requisição: ${req.method} ${req.url}`);
    next();
});
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// --- ROTAS DA API ---

// ROTA PARA PEGAR AS MENSAGENS (GET)
app.get('/api/messages', (req, res) => {
    fs.readFile(messagesFilePath, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return res.json([]);
            }
            return res.status(500).send('Erro ao ler as mensagens.');
        }

        // --- ESTA É A CORREÇÃO ---
        // Se o arquivo existir mas estiver vazio, 'data' será uma string vazia.
        // Verificamos isso antes de tentar o JSON.parse para evitar o erro.
        if (!data) {
            return res.json([]);
        }
        // --- FIM DA CORREÇÃO ---

        res.json(JSON.parse(data));
    });
});

// ROTA PARA SALVAR UMA NOVA MENSAGEM (POST)
app.post('/api/messages', (req, res) => {
    const newMessage = {
        name: req.body.name,
        message: req.body.message,
        timestamp: new Date().toISOString()
    };
    fs.readFile(messagesFilePath, 'utf8', (err, data) => {
        let messages = [];
        // Se o arquivo estiver vazio, data será uma string vazia.
        // Tratamos isso para não quebrar o JSON.parse.
        if (!err && data) {
            messages = JSON.parse(data);
        }
        messages.push(newMessage);
        fs.writeFile(messagesFilePath, JSON.stringify(messages, null, 2), (writeErr) => {
            if (writeErr) {
                return res.status(500).send('Erro ao salvar a mensagem.');
            }
            res.status(201).json(newMessage);
        });
    });
});

// --- MANIPULAÇÃO DE ERRO ---
app.use((err, req, res, next) => {
    console.error('--- UM ERRO INESPERADO OCORREU ---');
    console.error(err.stack);
    res.status(500).send('Algo deu errado no servidor!');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});