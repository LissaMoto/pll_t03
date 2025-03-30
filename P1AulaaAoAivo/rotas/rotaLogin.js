import { Router } from "express";

const rotaLogin = new Router();

//"GET http://localhost:4000/login"
rotaLogin.get('/', (requisicao, resposta) => {
    resposta.redirect("/login.html");
})
.post('/', (requisicao, resposta) => {
    const dados = requisicao.body;
    const usuario = dados.usuario;
    const senha = dados.senha;
    if (usuario === "Veterinario0" && senha === "1234") {
        requisicao.session.usuarioAutenticado = true;
        resposta.redirect("/cadastroPaciente.html");
    } else {
        resposta.send("<p>Usuário ou senha inválidos !</p><button onclick='history.back();'>Tentar novamente</button>");
    }
})

export default rotaLogin;