import React from 'react'
import styled from '@emotion/styled'
import { NavLink, Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import { Button } from '@mui/material'
const arrey = [
    {
        name:"Matiral  1",
        id:'1'
    },
    {
        name:"Matiral  2",
        id:'2'
    },
]
export const Material = () => {
 const navigeit = useNavigate()
 const [searchParams,setSearchParams] = useSearchParams(false)
 console.log([...searchParams.entries()])
 const showModalHandler = () => {
     searchParams.set("showModal",true)
    setSearchParams(searchParams)
 }
 const closeModalHandler = () => {
     searchParams.delete("showModal")
    setSearchParams(searchParams)
 }
 
  return (
    <StyleSecondContent>
                <StyledButton onClick={showModalHandler} variant='contained'>Add new material</StyledButton>
             {searchParams.has('showModal') ? <StyledModal>
                 <p>модалка searchParams га жараша ачылып жабылыш керек ачык болсо page refresh болсо дагы ачылып туруш керек!!! тут могли быть дополнителные input не захотелусложнять вашу жизнь эхх байкуштар кыйналдынар окшойт ээ? роутер менен</p>
                <StyledButtons variant='contained' onClick={closeModalHandler}>Close</StyledButtons>
             </StyledModal> : null}
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

const StyledButton = styled(Button)`
  background-color: #ff8400;
  margin-left: 800px;
`
const StyledButtons = styled(Button)`
  background-color: #0a7e8b;
`
const StyledContent = styled('div')`
    background-color: #d6ebd6;
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    margin: 0 auto;
    line-height:50px;
    margin-top:30px;
    border-radius:8px;
    color: #000000;
    padding: 10px 30px;
    
`
const StyledModal = styled("div")`
  position: fixed;
  top: 20vh;
  left: 5%;
  padding: 1rem;
  z-index: 30;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(5, 5, 5, 0.25);
  background-color: white;
  animation: slide-down 300ms ease-out forwards;
  width: 40rem;
  left: calc(50% - 20rem);
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
`
const StyledNavLink = styled("button")`
    background-color: #075da9;
    padding: 8px 40px;
    border-radius: 6px;
    text-decoration:none;
    cursor: pointer;
    color: #fff;
    border: none;
`
const StyleSecondContent  = styled('div')`
    background-color: #67b76e;
    width: 1060px;
    margin-left:220px;
    padding: 100px 0px;
height: 100vh;
margin-top:-15px;
`