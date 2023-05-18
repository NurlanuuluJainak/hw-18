import React from 'react'
import { Outlet, useNavigate, useParams } from 'react-router'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
export const MaterialContent = () => {
    const material = useParams()
    const navigete = useNavigate()
  return (
    <>
    
    <StyledContainer>
        <p>Material Details Page:</p>
        <p>Material {material.materialId}</p>
        <StyledButton variant='contained' onClick={() => navigete('/courses/materials')}>Go to Materials</StyledButton>

    </StyledContainer>
    <StyledSecondContainer>
        <StyledNavLink to={"submitted"}>Submitted</StyledNavLink>
        <StyledNavLink to={"waiting"}>Waiting</StyledNavLink>
        <StyledNavLink to={"late"}>Late</StyledNavLink>
    </StyledSecondContainer>
    <Outlet/>
    </>
  )
}
const StyledSecondContainer = styled("div")`
    background-color: #20d492;
    display: flex;
    gap: 40px;
    width: 1020px;
    margin-left: 220px;
    padding: 20px ;
    margin-top:-505px;
`
const StyledNavLink = styled(NavLink)`
    text-decoration:none;
    
`
const StyledContainer = styled("div")`
        background-color: #ffff00;
    width: 1020px;
    height: 100vh;
    margin-left: 220px;
    padding: 20px ;
    margin-top:-5px;
`
const StyledButton = styled(Button)`
  background-color: #00c3ff;
`