import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import React, { ChangeEvent } from "react";

const StyledCommentArea = styled(TextareaAutosize)`
  background-color: #192734;
  color: white;
  border: none;
  resize: none;
  padding: 2rem;
  flex: 1;
  border-radius: 1rem;
  &:focus {
    border: none;
    outline: none;
  }
`;

type Props = {
  name: string;
  value: string;
  placeholder?: string;
  rows?: number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
};

export default function CommentArea({ name, value, onChange, placeholder = "Écrivez ici...", onSubmit }: Props) {
  return (
    <StyledCommentArea
      placeholder={placeholder}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      onKeyPress={onSubmit}
    />
  );
}
