import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { ChangeEvent } from "react";

const StyledTextArea = styled(TextareaAutosize)`
  background-color: #192734;
  color: white;
  border: none;
  font-size: 2rem;
  resize: none;
  &:focus {
    border: none;
    outline: none;
  }
`;

type Props = {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
};

export default function TextArea({ name, value, onChange, placeholder = "Écrivez ici..." }: Props) {
  return <StyledTextArea placeholder={placeholder} name={name} id={name} value={value} onChange={onChange} />;
}
