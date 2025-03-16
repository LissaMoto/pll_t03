export default function Cabecalho(props) {
  return (
    <div>
      <h1 className="text-center" style={{ color: "#c99b6d" }}>
        {props.titulo || "Informe um texto para o cabeçalho"}
      </h1>
    </div>
  );
}
