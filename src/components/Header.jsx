import React from "react";
import {  Routes, Route, NavLink } from "react-router-dom";
import { About } from "../pages/About";
import { Product } from "../pages/Product";
import { Producst } from "../pages/Products";
import { styled } from "@mui/material";
export const Header = () => {
  return (
    <div>
      <SecondContainer
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignContent: "center",
          padding: "15px",
          background: "gold",
        }}
      >
        <div>
          <span>iStore</span>
        </div>

        <div>
          <StyledHeader>
            <StyledHeaderBox to="/products">Products</StyledHeaderBox>
            <StyledHeaderBox to="/myCart">My Cart</StyledHeaderBox>
            <StyledHeaderBox to="/myorders">My Orders</StyledHeaderBox>
          </StyledHeader>
        </div>
      </SecondContainer>
      <main>
        <Routes>
          <Route path="/products" element={<Product />} />
          <Route path="/products/:productId" element={<Producst />} />
          <Route />
          <Route path="/myCart" element={<About children={"my cart page"} />} />
          <Route path="/myorders" element={<About children={"Jainak"} />} />
        </Routes>
      </main>
    </div>
  );
};
const SecondContainer = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledHeader = styled('header')`
  display: flex;
  gap: 40px;

  

`;

const StyledHeaderBox = styled(NavLink)`
  color: #131313;
  text-decoration: none;
  font-weight:600;
`;
