import React, { useState } from "react";
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
  const [usuario, setUsuario] = useState({ campo: "", valido: null });
  const [nombre, setNombre] = useState({ campo: "", valido: null });
  const [password, setPassword] = useState({ campo: "", valido: null });
  const [password2, setPassword2] = useState({ campo: "", valido: null });
  const [email, setEmail] = useState({ campo: "", valido: null });
  const [telefono, setTelefono] = useState({ campo: "", valido: null });

  const expresiones = {
    usuario: /^[a-zA-Z0-9-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  const valuePassword = () => {
    if (password.campo.length > 0) {
      if (password.campo !== password2.campo) {
        // console.log("noOk");
        setPassword2((prevState) => {
          return { ...prevState, valido: "false" };
        });
      } else {
        // console.log("ok");
        setPassword2((prevState) => {
          return { ...prevState, valido: "true" };
        });
      }
    }
  };

  return (
    <main>
      <Formulario action="">
        <Input
          state={usuario}
          changeState={setUsuario}
          type="text"
          label="Usuario"
          placeholder="Ingresa nombre de usuario"
          name="Usuario"
          leyendaError="El usuario tiene que se de 4 a 16 digitos y solo puede contener letras, numeros y guion medio."
          reGex={expresiones.usuario}
        />
        <Input
          state={nombre}
          changeState={setNombre}
          type="text"
          label="Nombre"
          placeholder="Nombre Apellido"
          name="nombre"
          leyendaError="El nombre solo puede contener letras y espacios."
          reGex={expresiones.nombre}
        />
        <Input
          state={password}
          changeState={setPassword}
          type="password"
          label="Contraseña"
          placeholder="**********"
          name="password1"
          leyendaError="La contraseña tiene que ser de 4 a 16 digitos"
          reGex={expresiones.password}
        />
        <Input
          state={password2}
          changeState={setPassword2}
          type="password"
          label="Contraseña"
          placeholder="**********"
          name="password2"
          leyendaError="Ambas contraseñas deben ser iguales"
          funcion={valuePassword}
        />
        <Input
          state={email}
          changeState={setEmail}
          type="email"
          label="Correo"
          placeholder="tucorreo@hosting.com"
          name="email"
          leyendaError="El correo solo puede contener letras numeros y puntos"
          reGex={expresiones.email}
        />
        <Input
          state={telefono}
          changeState={setTelefono}
          type="text"
          label="Telefono"
          placeholder="123456789"
          name="telefono"
          leyendaError="Solo numeros y un maximo de 14 numeros"
          reGex={expresiones.telefono}
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
