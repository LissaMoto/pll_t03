import AtividadeDAO from "../Persistencia/AtividadeDAO.js";

export default class Atividade {
  #codigo;
  #descricao;
  #duracao;
  #complexidade;
  constructor(
    codigo = 0,
    descricao = "Não informado",
    duracao = 0,
    complexidade = "baixa"
  ) {
    this.#codigo = codigo;
    this.#descricao = descricao;
    this.#duracao = duracao;
    this.#complexidade = complexidade;
  }

  get codigo() {
    return this.#codigo;
  }

  set codigo(cod) {
    this.#codigo = cod;
  }

  get descricao() {
    return this.#descricao;
  }

  set descricao(desc) {
    this.#descricao = desc;
  }

  get duracao() {
    return this.#duracao;
  }

  set duracao(novaDuracao) {
    this.#duracao = novaDuracao;
  }

  get complexidade() {
    return this.#complexidade;
  }

  set complexidade(complex) {
    this.#complexidade = complex;
  }

  toJSON() {
    return {
      codigo: this.#codigo,
      descricao: this.#descricao,
      duracao: this.#duracao,
      complexidade: this.#complexidade,
    };
  }

  async gravar() {
    const ativDAO = AtividadeDAO();
    await ativDAO.gravar(this);
  }

  async atualizar() {}

  async excluir() {}

  async consultarCodigo(codigo) {}

  async consultarDescricao(desc) {}
}
