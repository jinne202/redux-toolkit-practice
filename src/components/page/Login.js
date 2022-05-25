import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login, logout } from 'redux/reducer/user';

const Login = () => {
  const dispatch = useDispatch();
  const handleClickLogin = () => {
    dispatch(login({ name: '이름', age: 27, email: 'email@naver.com' }));
  };
  const handleClickLogout = () => {
    dispatch(logout());
  };
  return (
    <Wrap>
      <Button onClick={handleClickLogin}>로그인</Button>
      <Button onClick={handleClickLogout}>로그아웃</Button>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button``;

export default Login;
