import React from 'react'
import { useNavigate, useParams } from 'react-router'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
export const Students2 = () => {
    const param = useParams()
    const navigete = useNavigate()
  return (
    <StyledContent>
        <p>Student detail page:</p>
        <p>Stydent {param.paramId}</p>
        <StyledButton variant='contained' onClick={() => navigete('/courses/students')}>Go to Students</StyledButton>
    </StyledContent>
  )
}

const StyledContent = styled("div")`
    background-color: #846060;
    width: 1020px;
    height: 100vh;
    margin-left: 220px;
    padding: 20px ;
    margin-top:-5px;
`
const StyledButton = styled(Button)`
  background-color: #00c3ff;
`