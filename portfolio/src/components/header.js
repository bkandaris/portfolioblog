import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <Title>
        <Span>Hello, my name is Ben.</Span> <br />
        I'm a full stack web developer.
      </Title>
      <div className='ball'>
        <Arrow>↓</Arrow>
      </div>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
    url('https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-repeat: no-repeat;
`;

const Title = styled.h3`
  width: 70%;
  padding: 1.5rem;
  margin-bottom: 2rem;
  color: white;
  text-align: center;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  padding: 20px;
  border-bottom: 3px solid darkblue;
`;

const Arrow = styled.p`
  color: white;
  font-size: 2.8rem;
  font-weight: bold;
  padding: 2.8rem;
  margin: 1rem;
`;

const Span = styled.span`
  padding: 1rem;
`;
