import React from "react"
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>Drag and drop to reorder list</StyledFooter>
  )
};

export default Footer;

const StyledFooter = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
  margin-top: 2rem;
`