import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
    <Wrapper>
      <Header>Benjamin Kandaris</Header>
      <List>
        <Listitem>Projects</Listitem>
        <Listitem>Contact</Listitem>
        <Listitem>Blog</Listitem>
      </List>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: darkblue;
  color: white;
  display: flex;
  flex-direction: row;
`;

const Header = styled.h2`
  padding: 1rem;
  &:hover {
    color: red;
  }
`;
const List = styled.ul`
  width: 60%;
  display: flex;
  justify-content: flex-end;
`;

const Listitem = styled.li`
  border-radius: 50px;
  padding: 1.4rem;
  list-style: none;
  font-weight: 900;
  letter-spacing: 0.1rem;
  &:hover {
    transition: 0.6s;
    background: white;
    color: darkblue;
  }
`;
