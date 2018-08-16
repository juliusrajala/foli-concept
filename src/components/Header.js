import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  width: 100%;
  background-color: orange;
`;

const Header = () => (
  <StyledHeader>
    <h2>Näkymät</h2>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/tickets">Bus tickets</Link></li>
    </ul>
  </StyledHeader>
);

export default Header;