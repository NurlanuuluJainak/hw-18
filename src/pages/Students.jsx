import React from 'react'
import styled from '@emotion/styled'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
const arrey = [
    {
        name:"Student  1",
        id:'1'
    },
    {
        name:"Student  2",
        id:'2'
    },
]
export const Students = () => {
 const navigeit = useNavigate()
  return (
    <StyleSecondContent>
        {arrey.map((item) => (
            <StyledContent key={item.id}>
                <div>{item.name}</div>
                <div><StyledNavLink onClick={() => navigeit(`${item.id}/detail`)}>Detail</StyledNavLink></div>
            </StyledContent>
        ))}
        <Outlet/>
    </StyleSecondContent>
  )
}


const StyledContent = styled('div')`
    background-color: green;
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    margin: 0 auto;
    line-height:50px;
    margin-top:30px;
    border-radius:8px;
    color: #fff;
    padding: 10px 30px;
    
`
const StyledNavLink = styled("button")`
    background-color: #0088ff;
    padding: 8px 40px;
    border-radius: 6px;
    cursor: pointer;
    border: none;
    text-decoration:none;
`
const StyleSecondContent  = styled('div')`
    background-color: #dbdb9c;
    width: 1060px;
    margin-left:220px;
    padding: 100px 0px;
height: 100vh;
margin-top:-15px;
`