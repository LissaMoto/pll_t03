import Atividade from "./Modelo/Atividade.js";

const atividade1 = new Atividade(0, "Teste não funcional", 3, "alta");

atividade1
  .gravar()
  .them(() => {
    console.log("Atividade gravada com sucesso!");
  })
  .catch((error) => {
    console.log("Não foi possivel gravar a atividade");
    console.log(error.message);
  });

atividade1
  .atualizar()
  .then(() => {
    console.log("Atividade atualizada com sucesso!");
  })
  .catch((error) => {
    console.log("Não foi possível atualizar a atividade.");
    console.log(error.message);
  });

atividade1
  .excluir()
  .then(() => {
    console.log("Atividade excluída com sucesso!");
  })
  .catch((error) => {
    console.log("Não foi possível excluir a atividade.");
    console.log(error.message);
  });

atividade1
  .consultarCodigo(1)
  .them((lista) => {
    for (const ativ of lista) {
      console.log(ativ.toJSON());
    }
  })
  .catch((error) => {
    console.log("Não foi possível consultar a atividade.");
    console.log(error.message);
  });
