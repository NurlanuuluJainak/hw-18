import React from 'react'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router'
import { Button } from '@mui/material'
export const VailSubWaitLate = ({children}) => {
    const navigete = useNavigate()
  return (
    <StyledContent>
        <h1>{children}</h1>
        <StyledButton variant='contained' onClick={() => navigete('/courses/materials/2/detail')}>Go to MaterialId</StyledButton>

    </StyledContent>
  )
}

const StyledContent = styled("div")`
    width: 1060px;
   background-color: green;
   margin-left: 220px;
   margin-top:-25px;
   height: 70vh;
   
`
const StyledButton = styled(Button)`
  background-color: #00c3ff;
`