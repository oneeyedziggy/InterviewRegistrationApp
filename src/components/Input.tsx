import React, { type HTMLInputTypeAttribute, useState } from 'react';
import styled from 'styled-components';

type InputProps = {
  id: string;
  name?: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  minLength?: number;
  error?: string;
  onChange: (val: any) => void;
};

const BlockLabel = styled.label`
  min-width: 85px;
  display: block;
  text-align: right;
`;
const InputError = styled.span`
  color: red;
`;
const BlockInput = styled.input`
  display: block;
`;
const FlexRowWrapper = styled.label`
  display: flex;
  flex-direction: row;
`;

export const Input = ({
  id,
  name,
  label,
  type = 'text',
  minLength = -1,
  error = '',
  onChange,
}: InputProps) => {
  const [value, setValue] = useState('');
  const changeHandeler = (thing: React.ChangeEvent<HTMLInputElement>) => {
    setValue(thing?.target?.value ?? '');
    onChange(thing?.target?.value ?? '');
  };

  return (
    <FlexRowWrapper>
      <BlockLabel htmlFor={id}>{label}</BlockLabel>
      <div>
        <BlockInput
          id={id}
          name={name ?? id}
          type={type}
          minLength={minLength}
          onChange={changeHandeler}
        />
        {value && error && <InputError>{error}</InputError>}
      </div>
    </FlexRowWrapper>
  );
};

export default Input;
