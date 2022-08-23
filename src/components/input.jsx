import React from "react";
import {
  GrupoInput,
  IconValidacion,
  LeyendaError,
  Label,
  Input,
} from "../style/formularios";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const ComponentInput = ({
  type,
  label,
  placeholder,
  name,
  leyendaError,
  reGex,
  state,
  changeState,
}) => {
  const onChange = (e) => {
    // console.log(e.target.value);
    changeState({ ...state, campo: e.target.value });
  };

  const validation = () => {
    if (reGex) {
      if (reGex.test(state.campo)) {
        changeState({ ...state, valido: "true" });
      } else {
        changeState({ ...state, valido: "false" });
      }
    }
  };

  return (
    <div>
      <Label htmlFor={name} valido={state.valido}>
        {label}
      </Label>
      <GrupoInput>
        <Input
          type={type}
          placeholder={placeholder}
          id={name}
          value={state.campo}
          onChange={onChange}
          onKeyUp={validation}
          onBlur={validation}
          valido={state.valido}
        />
        <IconValidacion
          icon={state.valido === "true" ? faCheckCircle : faTimesCircle}
          valido={state.valido}
        />
      </GrupoInput>
      <LeyendaError valido={state.valido}>{leyendaError}</LeyendaError>
    </div>
  );
};
export default ComponentInput;
