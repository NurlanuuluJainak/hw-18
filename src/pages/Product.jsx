import { Button, styled } from "@mui/material"
import { Outlet, useNavigate,Link, NavLink } from "react-router-dom"

const product = [
    {
        title:'iPhone 14 Pro Max',
        image:'https://www.istore.kg/media/products/iphone-13-pro-max-green-select.webp',
        price:' 108300сом',
        id:1,
    },
    {
        title:'iPhone 13 Pro Max',
        image:'https://softech.kg/image/cache/350fea0afebad312b766af625cda509c.png',
        price:'96 800сом',
        id:2,
    },
    {
        title:'Apple IPhone 12 Pro Max',
        image:'https://www.istore.kg/media/products/12-pro-max-gold.webp',
        price:'92 900com',
        id:3,
    },
]

export const Product = () => {
    const navigate = useNavigate()

    return (
        <>
        <SyledButton >
            {product.map((el) => (
                <StyledNavLink  to={`${el.id}`}>
                <StyledContainer>
                    <div><img style={{height:"300px",width:"240px"}} src={el.image} alt="" /></div>
                    <h3>{el.title}</h3>
                    <p>{el.price}</p>
                </StyledContainer>
                </StyledNavLink>
            ))}
        </SyledButton>
           <StyledButton variant="contained"  onClick={() => navigate('/')}>goBak</StyledButton>
           <Outlet/>
        </>
    )
}

const SyledButton = styled('div')`
    display: flex;
    align-items: center;
    gap: 100px;
    justify-content: center;
    margin-top:50px;
`
const StyledContainer = styled('div')`
    background-color:#76acb5;
    border-radius:10px;
    padding: 10px;
    &:hover{
        background-color: #2868ce;
        transition:all 0.6s;
    }
`
const StyledButton = styled(Button)`
    background-color: red;
    margin-top: 50px;
    margin-left:700px;
    color: #fff;
`
const StyledNavLink = styled(NavLink)`
    text-decoration:none;
`