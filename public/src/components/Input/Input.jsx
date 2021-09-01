import React from "react";
import {
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  InputAdornment,
} from "@material-ui/core";
import styled from "styled-components";
import { tokens } from "../../data/tokens";

const StyledTextField = styled(TextField)`
  width: 100% & .MuiFormLabel-root-Mui-focused {
    color: rgb(${tokens.colors.purple});
  }

  & .MuiInputBase-root::after {
    border-botton-color: rgb(${tokens.colors.purple});
  }
`;
/**
 * @typedef {'text' | 'password' | 'email' | 'currency' | 'datetime-local'} accepts
 */

/**
 * @typedef {object} props
 * @property {string} label
 * @property {string} value
 * @property {accepts} accepts
 * @property {(value: string) => void} onChange
 */
const MAP_ACCEPTS_TO_TYPE = {
  time: "datetime-local",
  currency: "number",
  email: "email",
  password: "password",
  text: "text",
};

/**
 * @param {props}props
 * @returns {JSX.Element}
 */

export const Input = (props) => {
  const { accepts, label, onChange, value } = props;
  const handleChange = (event) => onChange(event.target.value);

  if (options) {
    return (
      <StyledTextField as={FormControl} varient="filed">
      
        <InputLabel id={`${label}-id`}>{label}</InputLabel>
        <Select
          label={`${label}-id`}
          id={label}
          value={value}
          onChange={handleChange}
        >
          {options.map((singleOption) => (
            <MenuItem value={singleOption}>{singleOption}</MenuItem>
          ))}
        </Select>
      </StyledTextField>
    );
  }
  return (
    <StyledTextField
      value={value}
      label={label}
      InputProps=
      {{
        startAdornment:  accepts === 'currency' ?
        <InputAdornment position="start">R</
        InputAdornment> : undefined,
      }}
      InputLabelProps={{ shrink: accepts === "time" ? true : undefined }}
      disabled={!onChange}
      onChange={handleChange}
      fullWidth
      InputProps={{ type: MAP_ACCEPTS_TO_TYPE[accepts] }}
      variant="filled"
      autoComplete="off"
    />
  );
};

export default Input;
