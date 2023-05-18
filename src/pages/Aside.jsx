import React from 'react'
import { styled } from "@mui/material";
import { Outlet ,NavLink} from 'react-router-dom';

export const Aside = () => {
  return (
    <>
    <SecondContainer
    >
               <StyledLogo>LOGO</StyledLogo>
               <StyledNav>
               <StyledHeaderBox to="/courses">Courses</StyledHeaderBox>
               <StyledHeaderBox to="/anouncements">Anouncements</StyledHeaderBox>
               <StyledHeaderBox to="/notifications">Notifications</StyledHeaderBox>
               <StyledHeaderBox to="/schedule">Schedule</StyledHeaderBox>
               </StyledNav>
         </SecondContainer>
         <Outlet/>
    </>
  )
}

const StyledLogo = styled('div')`
    font-size:2rem;
    font-weight:600;
    color: #660185 ;
    font-family:sans-serif;
`
const SecondContainer = styled("div")`
  display: flex;
  background-color: #ffffff;
  width: 200px;
  height: 90vh;
  margin: 0;
  padding: 20px 10px;
align-items: center;
flex-direction: column;
`;
const StyledNav = styled('nav')`
  display: flex;
  flex-direction: column;
  gap: 20px;

  justify-content: center;
  margin-top: 200px;

`
const StyledHeaderBox = styled(NavLink)`
  color: #1505f9;
  text-decoration: none;
 &:hover{
    background-color: #ffffff;
    transition:all 0.9s; 
    box-shadow:0px 0px 10px 0px #8b8787;
    color: black;
    border-radius:7px;
 } 
  padding: 8px 20px;
  border-radius:7px;
  font-weight:600;
`;
