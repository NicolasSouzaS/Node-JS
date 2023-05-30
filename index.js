// Importação do modulo express
const express = require("express");

// Instânciando o express como app 
const app = express();

// Definir que o express deve lidar com conteúdos em json
/*
 JSON -> JS(JavaScript) O(On) N(Notation)
 é uma notação em javaScript, ou sejá, uma forma estruturada
 de transitar com os dados, enviando para o servidor ou para
 o usuário. É uma forma de trocar dados entre cliente-servidor
 usando objetos javaScript.Ex.:
    lstProdutos: [
        {
            id:51,
            nome:"Mouse"
        },
        {
            id:52,
            nome:"Sofá"
        }
    ]
*/

app.use(express.json());
app.use(coletarDados); //Usando o middleware
// Vamos criar a primeira rota com a solicitação get
app.get("/",(req,res)=>{
    // Responder ao usuário passando o status code e a mensagem
    res.status(200).send("Olá, você está na rota Raiz");
});

app.get("/clientes/listar",(req,res)=>{
    res.status(200).send(["Marcão","Sofi","Thereo"]);

});

app.post("/clientes/cadastrar",(req,res)=>{
    res.status(201).send({rs:"Vejá os dados enviados",dados:req.body})
});

function coletarDados(req,res,next){
    console.log(req);
    next();
}

app.listen(3030,()=>console.log("http://127.0.0.1:3030"));