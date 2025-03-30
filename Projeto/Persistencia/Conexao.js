import mysql2 from "mysql2";

export default async function Conexao() {
  if (global.meuPoolConexoes) {
    return await global.meuPoolConexoes.getConnection();
  }
  const minhasConexoes = mysql2.createPool({
    host: "localhost",
    user: "root",
    database: "baackend",
    port: "3306",
    waitForConnections: "true",
    connectionLimit: 10,
    maxId: 10,
    idleTimeout: 6000,
    queueLimit: 0,
  });

  global.meuPoolConexoes = minhasConexoes;
  return await global.meuPoolConexoes.getConnection();
}
