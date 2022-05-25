import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeTextColor } from 'redux/reducer/theme';

const ChangeColor = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState('');
  const handleChangeColor = () => {
    dispatch(changeTextColor(color));
  };
  return (
    <Wrap>
      <Input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <Button onClick={handleChangeColor}>change color</Button>
    </Wrap>
  );
};

const Wrap = styled.div``;

const Input = styled.input``;

const Button = styled.button``;

export default ChangeColor;
