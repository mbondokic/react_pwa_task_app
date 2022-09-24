import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion/framer-motion";
import { slideLeft, slideRight } from "../animations";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Header = ({ theme, toggleTheme }) => {
  return (
    <StyledHeader initial="hidden" animate="show">
      <motion.h1 variants={slideLeft}>TASKS</motion.h1>
      <motion.div variants={slideRight} onClick={toggleTheme}>
        {theme === "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
      </motion.div>
    </StyledHeader>
  );
};

Header.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};

export default Header;

const StyledHeader = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  h1 {
    font-size: 2.5rem;
    letter-spacing: 0.5rem;
  }
  svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  h1, svg {
    transition: all .2s ease;
    color: #fff;
    @media(min-width: 1440px) {
      color: ${({ theme }) => theme.textPrimary};
    }
  }
`;
