import { useState } from "react";
import Pagina from "../templates/Pagina";
import CadastroMedicamentos from "./formularios/CadastroMedicamento";
import TabelaMedicamentos from "./tabelas/TabelaMedicamentos";
import medicamentos from "../dados/medicamentos";
import categorias from "../dados/categorias";

export default function TelaCadastroMedicamentos(props) {
  const [mostrarTabela, setMostrarTabela] = useState(true);
  const [listaDeMedicamentos, setListaDeMedicamentos] = useState(medicamentos);
  const [medicamentoSelecionado, setMedicamentoSelecionado] = useState({
    nomeMed: "",
    tipoMed: "",
    categorias: { id: 1, nome: "Comprimido", sigla: "CP" },
    numRegistro: "",
    dataValidade: "",
    lote: "",
    quantEstoque: "",
    fabricante: "",
  });

  const [modoEdicao, setModoEdicao] = useState(false);

  return (
    <Pagina titulo="Sistema de Gestão Veterinária">
      {mostrarTabela ? (
        <TabelaMedicamentos
          mostrarTabela={mostrarTabela}
          setMostrarTabela={setMostrarTabela}
          listaDeMedicamentos={listaDeMedicamentos}
          setListaDeMedicamentos={setListaDeMedicamentos}
          setMedicamentoSelecionado={setMedicamentoSelecionado}
          setModoEdicao={setModoEdicao}
        />
      ) : (
        <CadastroMedicamentos
          mostrarTabela={mostrarTabela}
          setMostrarTabela={setMostrarTabela}
          listaDeMedicamentos={listaDeMedicamentos}
          setListaDeMedicamentos={setListaDeMedicamentos}
          listaDeCategorias={categorias}
          medicamentoSelecionado={medicamentoSelecionado}
          setMedicamentoSelecionado={setMedicamentoSelecionado}
          modoEdicao={modoEdicao}
          setModoEdicao={setModoEdicao}
        />
      )}
    </Pagina>
  );
}
