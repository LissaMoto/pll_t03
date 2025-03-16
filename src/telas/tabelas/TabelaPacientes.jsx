import { Alert, Button, Container, Table } from "react-bootstrap";

export default function TabelaPacientes(props) {

  function excluirPaciente(paciente){
    const novaLista = props.listaDePacientes.filter(c => c.cpf != paciente.cpf);
    props.setListaDePacientes(novaLista);

  }

  function selecionarPacienteParaEdicao(paciente){
    props.setPacienteSelecionado(paciente);
    props.setModoEdicao(true);
    props.setMostrarTabela(false);

  }

  return (
    <Container>
      <Alert className="text-center" variant="warning">
        <h2>Tabela de Pacientes</h2>
      </Alert>
      <Button onClick={() => { props.setMostrarTabela(false);}}
        className="mb-3" variant="primary"> Novo Paciente </Button>{" "}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data de Nascimento</th>
            <th>Espécie</th>
            <th>Raça</th>
            <th>Idade</th>
            <th>Sexo</th>
            <th>Castração</th>
            <th>Nome do Tutor</th>
            <th>Telefone</th>
            <th>CPF</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
          props?.listaDePacientes?.map((paciente) => {
            return (<tr key={paciente.cpf}>
                <td>{paciente.nome}</td>
                <td>{paciente.dataNascimento}</td>
                <td>{paciente.especie?.nome + "/" + paciente.especie?.cientifico}</td>
                <td>{paciente.raça}</td>
                <td>{paciente.idade}</td>
                <td>{paciente.sexo}</td>
                <td>{paciente.castração}</td>
                <td>{paciente.nomeTutor}</td>
                <td>{paciente.telefone}</td>
                <td>{paciente.cpf}</td>
                <td>{paciente.endereço}</td>
                <td>
                  <div style={{ display: "flex", gap: "10px" }}>


                    <Button onClick={() => selecionarPacienteParaEdicao(paciente)}
                    variant="warning">Editar</Button>{" "}

                    <Button onClick={() => {
                      if(window.confirm("Você confirma a exclusão deste item ?")) {
                      excluirPaciente(paciente)
                      }
                    }} variant="danger">Excluir</Button> {""}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
