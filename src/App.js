import React, { useState } from "react";
import {
  Formulario,
  Label,
  ContTerminos,
  ContBoton,
  Boton,
  MsjExito,
  MsjError,
  Card,
} from "./style/formularios.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Input from "./components/input.jsx";

const App = () => {
  const [nombre, setNombre] = useState({ campo: "", valido: null });
  const [apellido, setApellido] = useState({ campo: "", valido: null });
  const [password, setPassword] = useState({ campo: "", valido: null });
  const [password2, setPassword2] = useState({ campo: "", valido: null });
  const [email, setEmail] = useState({ campo: "", valido: null });
  const [telefono, setTelefono] = useState({ campo: "", valido: null });
  const [terminos, setTerminos] = useState(false);
  const [formOk, setFormOk] = useState(null);

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, ///^[a-zA-Z0-9-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
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

  const onChangeTerminos = (e) => {
    setTerminos(e.target.checked);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.valido === "true" &&
      apellido.valido === "true" &&
      password.valido === "true" &&
      password2.valido === "true" &&
      email.valido === "true" &&
      telefono.valido === "true" &&
      terminos
    ) {
      setFormOk(true);
      setNombre({ campo: "", valido: "" });
      setApellido({ campo: "", valido: null });
      setPassword({ campo: "", valido: null });
      setPassword2({ campo: "", valido: null });
      setEmail({ campo: "", valido: null });
      setTelefono({ campo: "", valido: null });
    } else {
      setFormOk(false);
    }
  };

  return (
    <main>
      <Card>
        <Formulario action="" onSubmit={onSubmit}>
          <Input
            state={nombre}
            changeState={setNombre}
            type="text"
            label="Nombre"
            placeholder="Nombre"
            name="nombre"
            leyendaError="El nombre solo puede contener letras y espacios."
            reGex={expresiones.nombre}
          />
          <Input
            state={apellido}
            changeState={setApellido}
            type="text"
            label="Apellido"
            placeholder="Apellido"
            name="apellido"
            leyendaError="El apellido solo puede contener letras y espacios."
            reGex={expresiones.apellido}
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
              <input
                type="checkbox"
                name="terminos"
                id="terminos"
                checked={terminos}
                onChange={onChangeTerminos}
              />{" "}
              Acepto los Terminos y Condiciones
            </Label>
          </ContTerminos>
          {formOk === false && (
            <MsjError>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <b>Error</b>Llena el formulario correctamente
              </p>
            </MsjError>
          )}
          <ContBoton>
            <Boton type="submit">Enviar</Boton>
            {formOk === true && (
              <MsjExito>Formulado enviado correctamente</MsjExito>
            )}
          </ContBoton>
        </Formulario>
      </Card>
    </main>
  );
};

export default App;
