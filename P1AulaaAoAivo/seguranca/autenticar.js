const usuarioAutenticado = false;

export default function autenticarUsuario(requisicao, resposta, next){
    if (requisicao.session.usuarioAutenticado){
        next();
    }
    else{
        resposta.redirect("/login.html");

    }

}