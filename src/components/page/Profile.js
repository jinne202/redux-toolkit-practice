import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);
  return (
    <Wrap color={themeColor}>
      <Title>Redux Toolkit Study</Title>
      <Text>Name - {user.name}</Text>
      <Text>Age - {user.age}</Text>
      <Text>Email - {user.email}</Text>
    </Wrap>
  );
};

const Wrap = styled.div`
  text-align: center;
  color: ${(props) => props.color};
`;

const Title = styled.h1``;

const Text = styled.p``;

export default Profile;
