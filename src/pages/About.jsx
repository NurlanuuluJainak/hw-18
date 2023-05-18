import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'

export const About = ({children,childrenButton}) => {
  const navigate = useNavigate()
  return (
    <div>
        <StyledContainer >
            <h2>{children}</h2>
        <StyledButton variant='contained' onClick={() =>navigate('/notifications')} >{childrenButton}</StyledButton>
        </StyledContainer>
    </div>
  )
}

const StyledButton = styled(Button)`
color: #fff;
margin-top: 70px;
text-transform:capitalize;
background-color: green;
`
const StyledContainer = styled("div")`
  background-color: #81d5a4;
  width: 170vh;
  height: 100vh;
  padding: 50px;
  margin-left: 220px;
  font-size:1.6rem;
  margin-top:-680px;
  font-family:Georgia, 'Times New Roman', Times, serif;
  color: #000000;
`