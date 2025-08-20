var http = require('http');
var url = require('url');

const server = http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let parametros = url.parse(req.url,true);

    let mat = parametros.query.matricula;
    let pas = parametros.query.senha;

    let dados = null

    if (mat == "andre" && pas == "matos") {
        dados = {
            nome: "Diego",
            acesso: 10
        }
    }

    res.end(JSON.stringify(dados));
}).listen(8080, () => {
    console.log(`Servidor Rodando!`)
});

process.on('SIGINT', () => {
    console.log("\nRecebido o sinal de interrupção. Desligando...")

    server.close(() => {
    console.log('Servidor foi desligado com sucesso')
    process.exit(0)
    })
})

