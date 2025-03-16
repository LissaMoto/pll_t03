import { useState } from "react";
import Pagina from "../templates/Pagina";
import CadastroPets from "./formularios/CadastroPets";
import TabelaPacientes from "./tabelas/TabelaPacientes";
import pacientes from "../dados/pacientes";
import especies from "../dados/especies";

export default function TelaCadastroPets(props) {
  const [mostrarTabela, setMostrarTabela] = useState(true);
  const [listaDePacientes, setListaDePacientes] = useState(pacientes);
  const [pacienteSelecionado, setPacienteSelecionado] = useState({
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

  const [modoEdicao, setModoEdicao] = useState(false);


  return (
    <Pagina titulo="Sistema de Gestão Veterinária">
      {mostrarTabela ? (
        <TabelaPacientes
          mostrarTabela={mostrarTabela}
          setMostrarTabela={setMostrarTabela}
          listaDePacientes={listaDePacientes}
          setListaDePacientes={setListaDePacientes}
          setPacienteSelecionado={setPacienteSelecionado}
          setModoEdicao={setModoEdicao}/>
      ) : (
        <CadastroPets
          mostrarTabela={mostrarTabela}
          setMostrarTabela={setMostrarTabela}
          listaDePacientes={listaDePacientes}
          setListaDePacientes={setListaDePacientes}
          listaDeEspecies={especies}
          pacienteSelecionado={pacienteSelecionado}
          setPacienteSelecionado={setPacienteSelecionado}
          modoEdicao={modoEdicao}
          setModoEdicao={setModoEdicao}/>
      )}
    </Pagina>
  );
}
