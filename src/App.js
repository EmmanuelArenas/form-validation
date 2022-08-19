import React from "react";
import {
  Formulario,
  Label,
  ContTerminos,
  ContBoton,
  Boton,
  MsjExito,
  MsjError,
} from "./style/formularios.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Input from "./components/input.jsx";

const App = () => {
  return (
    <main>
      <Formulario action="">
        <Input
          type="text"
          label="Usuario"
          placeholder="Ingresa tu nombre"
          name="Usuario"
          leyendaError="El usuario tiene que se de 4 a 16 digitos y solo puede contener letras, numeros y guion bajo."
          reGex=""
        />

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
