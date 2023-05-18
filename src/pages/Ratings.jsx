import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import { styled } from 'styled-components'

export const Ratings = ({children,childrenButton,addNavigate}) => {
    const navigate = useNavigate()
  return (
    <>
    <StyleRatings>
        <StyledText>{children}</StyledText>
        <Styledbutton onClick={addNavigate} variant='contained'>{childrenButton}</Styledbutton>
    </StyleRatings>
    </>
  )
}

const StyleRatings = styled("div")`
    background-color: #000000;
    width: 1060px;
    height: 100vh;
    margin-left: 220px;
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