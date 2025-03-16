import TelaInicio from "./telas/formularios/TelaInicio";
import TelaLogin from "./telas/TelaLogin";
import TelaCadastroPets from "./telas/TelaCadastroPets";
import TelaCadastroMedicamentos from "./telas/TelaCadastroMedicamentos";
import Tela404 from "./telas/formularios/Tela404";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";

export const ContextoLogin = createContext();

function App() {
  const [dadosLogin, setDadosLogin] = useState({ usuario: "", logado: false });

  if (dadosLogin.logado) {
    return (
      <div className="App">
        <ContextoLogin.Provider value={{ dadosLogin, setDadosLogin }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<TelaInicio />}></Route>
              <Route path="/login" element={<TelaLogin />}></Route>
              <Route path="/pets" element={<TelaCadastroPets />}></Route>
              <Route
                path="/medicamento"
                element={<TelaCadastroMedicamentos />}
              ></Route>
              <Route path="*" element={<Tela404 />}></Route>
            </Routes>
          </BrowserRouter>
        </ContextoLogin.Provider>
      </div>
    );
  } else {
    return (
      <div className="App">
        <ContextoLogin.Provider value={{ dadosLogin, setDadosLogin }}>
          <TelaLogin />
        </ContextoLogin.Provider>
      </div>
    );
  }
}

export default App;
