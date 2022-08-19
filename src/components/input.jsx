import React from "react";
import {
  GrupoInput,
  IconValidacion,
  LeyendaError,
  Label,
  Input,
} from "../style/formularios";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const ComponentInput = ({
  type,
  label,
  placeholder,
  name,
  leyendaError,
  reGex,
}) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <GrupoInput>
        <Input type={type} placeholder={placeholder} id={name} />
        <IconValidacion icon={faCheckCircle} />
      </GrupoInput>
      <LeyendaError>{leyendaError}</LeyendaError>
    </div>
  );
};
export default ComponentInput;
