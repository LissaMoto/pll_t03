import { Alert, Button, Container, Table } from "react-bootstrap";

export default function TabelaMedicamentos(props) {
  function excluirMedicamento(medicamento) {
    const novaLista = props.listaDeMedicamentos.filter(
      (c) => c.numRegistro != medicamento.numRegistro
    );
    props.setListaDeMedicamentos(novaLista);
  }

  function selecionarMedicamentoParaEdicao(medicamento) {
    props.setMedicamentoSelecionado(medicamento);
    props.setModoEdicao(true);
    props.setMostrarTabela(false);
  }

  return (
    <Container>
      <Alert className="text-center" variant="warning">
        <h2>Tabela de Medicamentos</h2>
      </Alert>
      <Button
        onClick={() => {
          props.setMostrarTabela(false);
        }}
        className="mb-3"
        variant="primary"
      >
        Novo Medicamento
      </Button>{" "}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome do Medicamento</th>
            <th>Tipo do Medicamento</th>
            <th>Categorias</th>
            <th>Número de Registro</th>
            <th>Data de Validade</th>
            <th>Lote</th>
            <th>Quantidade em Estoque</th>
            <th>Fabricante</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props?.listaDeMedicamentos?.map((medicamento) => {
            return (
              <tr key={medicamento.numRegistro}>
                <td>{medicamento.nomeMed}</td>
                <td>{medicamento.tipoMed}</td>
                <td>
                  {medicamento.categorias?.nome +
                    "/" +
                    medicamento.categorias?.sigla}
                </td>
                <td>{medicamento.numRegistro}</td>
                <td>{medicamento.dataValidade}</td>
                <td>{medicamento.lote}</td>
                <td>{medicamento.quantEstoque}</td>
                <td>{medicamento.fabricante}</td>
                <td>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Button
                      onClick={() =>
                        selecionarMedicamentoParaEdicao(medicamento)
                      }
                      variant="warning"
                    >
                      Editar
                    </Button>{" "}
                    <Button
                      onClick={() => {
                        if (
                          window.confirm(
                            "Você confirma a exclusão deste item ?"
                          )
                        ) {
                          excluirMedicamento(medicamento);
                        }
                      }}
                      variant="danger"
                    >
                      Excluir
                    </Button>{" "}
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
