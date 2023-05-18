import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import { styled } from 'styled-components'

export const Anouncements = ({}) => {
    const navigate = useNavigate()
  return (
    <>
    <StyleRatings>
        <StyledText>Anouncements Page</StyledText>
        <Styledbutton onClick={() => navigate('/courses/students')} variant='contained'>Go to Students page</Styledbutton>
    </StyleRatings>
    </>
  )
}

const StyleRatings = styled("div")`
    background-color: #e2b3b3;
    width: 1060px;
    height: 100vh;
    margin-left: 220px;
    margin-top:-660px;
    `
 const StyledText = styled('div')`
padding: 40px 50px;
font-weight:600;
font-size:2rem;
color: #fff;
 `

 const Styledbutton = styled(Button)`
    background-color: #6aaaf8;
    margin: 50px 80px;
    text-transform:capitalize;
 `