import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'
import { styled } from 'styled-components'

export const MenuCourses = () => {
  return (
    <>
    <StyledMenu>
        <StyledNavLink to='materials'>Materials</StyledNavLink>
        <StyledNavLink to="students">Students</StyledNavLink>
        <StyledNavLink to={'ratings'}>Ratings</StyledNavLink>
    </StyledMenu>
    <div>
    <Outlet/>
    </div>
    </>
  )
}

const StyledMenu = styled('header')`
    background-color: #7070cd;
    color: #fff;
    font-size:1.2rem;
    font-weight:600;
    display: flex;
    gap: 60px;
    align-items: center;
width: 1000px;
margin: 0;
margin-left:220px;
margin-top:-690px;
padding: 30px;
`
const StyledNavLink = styled(NavLink)`
    color: #ffffff;
    text-decoration: none;
`