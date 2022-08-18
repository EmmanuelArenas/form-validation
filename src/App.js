import React from "react";
import {
  Formulario,
  Label,
  GrupoInput,
  Input,
  IconValidacion,
  LeyendaError,
  ContTerminos,
  ContBoton,
  Boton,
  MsjExito,
  MsjError,
} from "./style/formularios.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <main>
      <Formulario action="">
        <div>
          <Label htmlFor="nombre">Usuario</Label>
          <GrupoInput>
            <Input type="text" placeholder="Usuario" id="nombre" />
            <IconValidacion icon={faCheckCircle} />
          </GrupoInput>
          <LeyendaError>Lorem ipsum dolor sit amet.</LeyendaError>
        </div>
        <ContTerminos>
          <Label>
            <input type="checkbox" name="terminos" id="terminos" /> Acepto los
            Terminos y Condiciones
          </Label>
        </ContTerminos>
        {false && (
          <MsjError>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error</b>Llena el formulario correctamente
            </p>
          </MsjError>
        )}
        <ContBoton>
          <Boton type="submit">Enviar</Boton>
          <MsjExito>Formulado enviado correctamente</MsjExito>
        </ContBoton>
      </Formulario>
    </main>
  );
};

export default App;
