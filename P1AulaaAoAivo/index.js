import express from "express";
import session from "express-session";
import autenticarUsuario from "./seguranca/autenticar.js";
import rotaLogin from "./rotas/rotaLogin.js";

const porta = 4000;
const host = "0.0.0.0";

const app = express();


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: "M1nhaChav3SeCr3t4",
  cookie: {
    maxAge: 30 * 1000 * 60
  },
  saveUninitialized: false,
  resave: true
}));

app.use(express.urlencoded({extended:false}));
app.use("/login", rotaLogin);
app.use(express.static("./publico"));
app.use(autenticarUsuario, express.static("./protegido"));

app.listen(porta, host, () => {
  console.log("Servidor em execução em http://" + host + ":" + porta);
});