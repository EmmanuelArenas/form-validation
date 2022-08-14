import React from "react";
import { Formulario, Label, GrupoInput, Input } from "./style/formularios.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <main>
      <Formulario action="">
        <div>
          <Label htmlFor="">Usuario</Label>
          <GrupoInput>
            <Input type="text" placeholder="Usuario" />
            <FontAwesomeIcon icon={faCheckCircle} />
          </GrupoInput>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </Formulario>
    </main>
  );
};

export default App;
