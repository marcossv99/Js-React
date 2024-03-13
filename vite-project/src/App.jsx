import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() { // declaracao do componente 
  const [cor, setCor] = useState(""); // declaracao de variavel de estado 
  console.log(cor);
  return (
    <div className="App">
      <div className="sinalizacao">
        <div
          onClick={() => setCor("red")}
          className={`sinalizacao_luz ${
            cor === "red" ? "sinalizacao_luz--ligado" : ""
          } `}
          style={{ backgroundColor: "red" }}
        ></div>
        <div
          onClick={() => setCor("yellow")}
          className={`sinalizacao_luz ${
            cor === "yellow" ? "sinalizacao_luz--ligado" : ""
          } `}
          style={{ backgroundColor: "yellow" }}
        ></div>
        <div
          onClick={() => setCor("green")}
          className={`sinalizacao_luz ${
            cor === "green" ? "sinalizacao_luz--ligado" : ""
          } `}
          style={{ backgroundColor: "green" }}
        ></div>
      </div>
    </div>
  );
}

export default App;
