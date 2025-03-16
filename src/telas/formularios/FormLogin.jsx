import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useRef } from "react";
import { ContextoLogin } from "../../App";
export default function FormLogin(props) {
  const contextoLogin = useContext(ContextoLogin);

  const usuario = useRef();
  const senha = useRef();

  function verificarCredenciais(evento) {
    const usuarioInformado = usuario.current.value;
    const senhaInformado = senha.current.value;

    if (usuarioInformado === "Veterinario0" && senhaInformado === "1234") {
      contextoLogin.setDadosLogin({
        usuario: usuarioInformado,
        logado: true,
      });
    } else {
      window.alert(
        "Erro de login: usuário ou senha inválidos! Tente novamente!"
      );
    }

    evento.preventDefault();
    evento.stopPropagation();
  }

  return (
    <Container className="w-25 p-5">
      <Form
        className="mt-5 border p-4"
        style={{ color: "#c99b6d" }}
        onSubmit={verificarCredenciais}
      >
        <Form.Group className="mb-3">
          <Form.Label>Usuário</Form.Label>
          <Form.Control
            type="text"
            id="usuario"
            placeholder="Informe seu usuario"
            ref={usuario}
          />
          <Form.Text className="text-muted">
            Para sua segurança, nunca compartilhe seus dados de acesso.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Informe sua senha"
            id="senha"
            name="senha"
            ref={senha}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}
