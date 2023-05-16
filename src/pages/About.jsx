import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'

export const About = ({children}) => {
    const res = useNavigate()
  return (
    <div>
        <div style={{background:"red" , width:"800px" ,height:"100px",color:"FFF"}}>
            <h2>{children}</h2>
        </div>
        <StyledButton variant='contained' onClick={() => res('/app')}>go Back</StyledButton>
    </div>
  )
}

const StyledButton = styled(Button)`
background-color: blue;
color: #fff;
`
