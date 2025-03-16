import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { useState } from "react";

export default function CadastroMedicamentos(props) {
  const [validado, setValidado] = useState(false);
  const [medicamento, setMedicamento] = useState(props.medicamentoSelecionado);

  function manipularSubmissao(evento) {
    const form = evento.currentTarget;
    if (form.checkValidity() === false) {
      setValidado(true);
    } else {
      if (!props.modoEdicao) {
        props.setListaDeMedicamentos([
          ...props.listaDeMedicamentos,
          medicamento,
        ]);
      } else {
        const novaLista = props.listaDeMedicamentos;
        const indice = props.listaDeMedicamentos.findIndex(
          (c) => c.numRegistro == medicamento.numRegistro
        );
        novaLista[indice] = medicamento;
        props.setListaDeMedicamentos(novaLista);
      }
      props.setModoEdicao(false);
      props.setMedicamentoSelecionado({
        nomeMed: "",
        tipoMed: "",
        categorias: { id: 1, nome: "Comprimido", cientifico: "CP" },
        numRegistro: "",
        dataValidade: "",
        lote: "",
        quantEstoque: "",
        fabricante: "",
      });
      props.setMostrarTabela(true);
    }

    evento.preventDefault();
    evento.stopPropagation();
  }

  function atualizarMedicamento(evento) {
    setMedicamento({
      ...medicamento,
      [evento.target.name]: evento.target.value,
    });
  }

  function selecionarCategoria(evento) {
    const id_categoria = parseInt(evento.target.value, 10);
    const categoriaSelecionada = props.listaDeCategorias.find(
      (categoria) => categoria.id === id_categoria
    );
    if (categoriaSelecionada) {
      setMedicamento({
        ...medicamento,
        categorias: categoriaSelecionada,
      });
    }
  }

  return (
    <>
      <Alert className="text-center" variant="warning">
        <h2>Cadastro de Medicamentos</h2>
      </Alert>
      <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Nome do medicamento</Form.Label>
            <Form.Control
              required
              id="nomeMed"
              name="nomeMed"
              type="text"
              placeholder="Nome do medicamento que sera cadastrado"
              defaultValue=""
              value={medicamento.nomeMed}
              onChange={atualizarMedicamento}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o nome do medicamento.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Tipo de Medicamento</Form.Label>
            <Form.Control
              required
              id="tipoMed"
              type="text"
              placeholder="Tipo do medicamento que sera cadastrado"
              name="tipoMed"
              value={medicamento.tipoMed}
              onChange={atualizarMedicamento}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o tipo do medicamento.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Categoria</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={medicamento.categorias.id}
              onChange={selecionarCategoria}
            >
              <option value="" disabled>
                {" "}
                Selecione a Categoria{" "}
              </option>
              {props?.listaDeCategorias.map((categoria) => {
                return (
                  <option key={categoria.id} value={categoria.id}>
                    {categoria.id +
                      " - " +
                      categoria.nome +
                      "/" +
                      categoria.sigla}
                  </option>
                );
              })}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Por favor, escolha uma resposta.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Número de Registro</Form.Label>
            <Form.Control
              id="numRegistro"
              name="numRegistro"
              type="text"
              placeholder="Número de registro do medicamento cadastrado"
              required
              value={medicamento.numRegistro}
              onChange={atualizarMedicamento}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o número de registro do medicamento.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Data de Validade</Form.Label>
            <Form.Control
              id="dataValidade"
              name="dataValidade"
              type="date"
              placeholder="Validade do medicamento cadastrado"
              required
              value={medicamento.dataValidade}
              onChange={atualizarMedicamento}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira a data de validade do medicamento.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Lote</Form.Label>
            <Form.Control
              id="lote"
              name="lote"
              placeholder="XXXX-XX-XXX"
              type="text"
              required
              value={medicamento.lote}
              onChange={atualizarMedicamento}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o número do lote.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Quantidade em Estoque</Form.Label>
            <Form.Control
              required
              id="quantEstoque"
              name="quantEstoque"
              type="number"
              placeholder="Quantidade disponível do medicamento"
              value={medicamento.quantEstoque}
              onChange={atualizarMedicamento}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira a quantidade disponível.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEndereco">
            <Form.Label>Fabricante</Form.Label>
            <Form.Control
              id="fabricante"
              name="fabricante"
              type="text"
              placeholder="Nome do fabricante do medicamento "
              required
              value={medicamento.fabricante}
              onChange={atualizarMedicamento}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o nome do fabricante.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit" className="me-2">
          {props.modoEdicao ? "Atualizar" : "Cadastrar"}
        </Button>
        <Button
          onClick={() => {
            props.setModoEdicao(false);
            props.setMostrarTabela(true);
          }}
        >
          Voltar
        </Button>
      </Form>
    </>
  );
}
