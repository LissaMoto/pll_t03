import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { useState } from "react";

export default function CadastroPets(props) {
  const [validado, setValidado] = useState(false);
  const [paciente, setPaciente] = useState(props.pacienteSelecionado);

  function manipularSubmissao(evento) {
    const form = evento.currentTarget;
    if (form.checkValidity() === false) {
      setValidado(true);  
          
    }else{
         if(!props.modoEdicao){
             props.setListaDePacientes([...props.listaDePacientes, paciente]);
             
          }
          else{
            const novaLista = props.listaDePacientes;
            const indice = props.listaDePacientes.findIndex(c => c.cpf == paciente.cpf);
            novaLista[indice] = paciente;
            props.setListaDePacientes(novaLista);

          }
          props.setModoEdicao(false);
          props.setPacienteSelecionado({    
            nome: "",
            dataNascimento: "",
            especie: { id: 1, nome: "Cachorro", cientifico: "CLF" },
            raça: "",
            idade: "",
            sexo: "",
            castração: "",
            nomeTutor: "",
            telefone: "",
            cpf: "",
            endereço: ""
          });
          props.setMostrarTabela(true);   
    }

    evento.preventDefault();
    evento.stopPropagation();


  }

  function atualizarPaciente(evento) {
    setPaciente({ ...paciente, [evento.target.name]: evento.target.value });
  }

  function selecionarEspecie(evento) {
    const id_especie = parseInt(evento.target.value, 10);
    const indice = props.listaDeEspecies.findIndex((especie) => especie.id === id_especie);
    if (indice !== -1) {
      setPaciente({ ...paciente, especie: props.listaDeEspecies[indice] });
    }
  }

  return (
    <>
      <Alert className="text-center" variant="warning"><h2>Cadastro de Pacientes</h2></Alert>
      <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              required
              id="nome"
              name="nome"
              type="text"
              placeholder="Nome"
              defaultValue=""
              value={paciente.nome}
              onChange={atualizarPaciente}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o nome do paciente.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              required
              id="dataNascimento"
              type="date"
              name="dataNascimento"
              value={paciente.dataNascimento}
              onChange={atualizarPaciente}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira uma data válida.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Espécie</Form.Label>
            <Form.Select aria-label="Default select example" value={paciente.especie.id}
              onChange={selecionarEspecie}>
              <option value="" disabled> Selecione a Espécie </option>
              {props?.listaDeEspecies.map((especie) => {
                return (<option key={especie.id} value={especie.id}>
                    {especie.id + " - " + especie.nome + "/" + especie.cientifico}
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
          <Form.Group as={Col} md="3">
            <Form.Label>Raça</Form.Label>
            <Form.Control
              id="raça"
              name="raça"
              type="text"
              placeholder="Raça"
              required
              value={paciente.raça}
              onChange={atualizarPaciente}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira a Raça do paciente.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Idade</Form.Label>
            <Form.Control
              id="idade"
              name="idade"
              type="text"
              placeholder="Idade"
              required
              value={paciente.idade}
              onChange={atualizarPaciente}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira a Idade do paciente.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Sexo</Form.Label>
            <Form.Select
              id="sexo"
              name="sexo"
              placeholder="Sexo"
              required
              value={paciente.sexo}
              onChange={atualizarPaciente}
            >
              <option selected disabled > Selecione o sexo </option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="none">ー</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Por favor, escolha uma resposta.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="10">
            <Form.Label>Castração</Form.Label>
            <Form.Select
              id="castração"
              name="castração"
              placeholder="Castração"
              required
              value={paciente.castração}
              onChange={atualizarPaciente}
            >
              <option selected disabled >O paciente é castrado?</option>
              <option value="sim">Sim</option>
              <option value="não">Não</option>
              <option value="none">ー</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Por favor, escolha uma resposta.
            </Form.Control.Feedback>
          </Form.Group>

          {/*Dados do Tutor */}
          <Form.Group as={Col} md="5">
            <Form.Label>Nome do tutor</Form.Label>
            <Form.Control
              required
              id="nomeTutor"
              name="nomeTutor"
              type="text"
              placeholder="Nome do tutor"
              defaultValue=""
              value={paciente.nomeTutor}
              onChange={atualizarPaciente}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o nome completo do tutor.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              id="telefone"
              name="telefone"
              type="tel"
              placeholder="(XX) XXXX-XXXX"
              required
              value={paciente.telefone}
              pattern="\(?\d{2}\)? ?\d{4,5}-?\d{4}"
              onChange={atualizarPaciente}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira um número de telefone válido no formato (XX)
              XXXXX-XXXX.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="5">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              required
              id="cpf"
              name="cpf"
              type="text"
              placeholder="XXX.XXX.XXX-XX"
              defaultValue=""
              value={paciente.cpf}
              onChange={atualizarPaciente}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o CPF do tutor.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEndereco">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              id="endereço"
              name="endereço"
              type="text"
              placeholder="Rua Oscar Freire, 250 - Apto 101"
              required
              value={paciente.endereço}
              onChange={atualizarPaciente}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o endereço completo.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit" className="me-2">{props.modoEdicao ? "Atualizar" : "Cadastrar" }</Button>
        <Button onClick={() => {
          props.setModoEdicao(false);
          props.setMostrarTabela(true)
          }}>Voltar</Button>
      </Form>
    </>
  );
}
