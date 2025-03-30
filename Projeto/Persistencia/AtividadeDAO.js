import Atividade from "../Modelo/Atividade.js";
import Conexao from "./Conexao.js";

export default class AtividadeDAO {
  async gravar(atividade) {
    if (atividade instanceof Atividade) {
      const conexao = Conexao();
      const sql =
        "INSERT INTO Atividades(descricao, duracao, complexidade) VALUES(?,?,?)";
      const parametros = [
        atividade.descricao,
        atividade.duracao,
        atividade.complexidade,
      ];
      const [result, fields] = await conexao.execute(sql, parametros);
      atividade.codigo = result.insertId;
    }
  }

  async atualizar(atividade) {
    if (atividade instanceof Atividade) {
      const conexao = Conexao();
      const sql =
        "UPDATE INTO Atividade set descricao = ?, \
         duracao = ?, \
         complexidade = ?, \
         WHERE codigo = ?";
      const parametros = [
        atividade.descricao,
        atividade.duracao,
        atividade.complexidade,
        atividade.codigo,
      ];
      await conexao.execute(sql, parametros);
    }
  }

  async excluir(atividade) {
    if (atividade instanceof Atividade) {
      const conexao = Conexao();
      const sql = "DELET FROM Atividade WHERE codigo = ?";
      const parametros = [atividade.codigo];
      await conexao.execute(sql, parametros);
    }
  }

  async consultarCodigo(codigo) {
    const listaDeAtividades = [];
    const conexao = Conexao();

    const sql = "SELECT * FROM Atividades WHERE codigo = ?";
    const parametros = [codigo];
    const [linhas] = await conexao.execute(sql, parametros);
    if (linhas.length > 0) {
      for (const linha of linhas) {
        const atividade = new Atividade(
          linha.codigo,
          linha.descricao,
          linha.duracao,
          linha.complexidade
        );
        listaDeAtividades.push(atividade);
      }
    }
    return listaDeAtividades;
  }

  async consultarDescricao(descricao) {
    const listaDeAtividades = [];
    const conexao = Conexao();
    const sql = "SELECT * FROM Atividades WHERE descricao LIKE ?";
    const parametros = [`%${descricao}%`];

    const [linhas] = await conexao.execute(sql, parametros);

    if (linhas.length > 0) {
      for (const linha of linhas) {
        const atividade = new Atividade(
          linha.codigo,
          linha.descricao,
          linha.duracao,
          linha.complexidade
        );
        listaDeAtividades.push(atividade);
      }
    }
    return listaDeAtividades;
  }
}
