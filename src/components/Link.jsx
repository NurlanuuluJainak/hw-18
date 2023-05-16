import React from "react";
import styled from '@mui/material'

export const Link = ({ children, path, onClick }) => {
  const clickHandler = (event) => {
    event.preventDefault();
    onClick();
  };
  
  return (
    <div >
      <StyledTegA onClick={clickHandler}>{children}</StyledTegA>
    </div>
  );
};

const StyledTegA = styled('a')`
font-size:2rem;
`