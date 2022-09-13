import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import OrderComponent from "../../components/OrderComponent/OrderComponent";
import {Link} from 'react-router-dom'
import {theme} from '../../theme'

const Cart = () => {


  const cartData = useSelector((state) => state.cart.cart);

  return (
    <>
    <Box sx={{ width: "100%", m: "auto", textAlign: "center", pb: 2 }}>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: theme.typography.fontWeightBold,
            }}
          >
            CART
          </Typography>
          <div
            className="darkbar"
            style={{ margin: "auto", marginTop: "20px" }}
          ></div>
        </Box>

        {cartData.length === 0 ? (
          <Box
            sx={{ width: "100%", m: "auto", textAlign: "center", pb: 2, mt: 10 }}
          >
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.text.main,
                fontWeight: theme.typography.fontWeightMedium,
              }}
            >
              Cart Is Empty
            </Typography>
            <Link to="/shop" style={{textDecoration:'none'}}>
              <Button variant="contained" color="primary" sx={{mt:3}}>
                <Typography variant="h6">Shop Now</Typography>
              </Button>
            </Link>
          </Box>
        ) : (
          <Box
            sx={{
              maxWidth: "1300px",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "flex-start",
              justifyContent: "center",
              width: "100%",
              m: "auto",
            }}
          >
            <Box
              sx={{
                maxWidth: "800px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: theme.palette.background.default,
                borderRadius: "5px",
                p: 2,
                width: "100%",
                boxShadow: 1,
                mr: { xs: 0, md: 2 },
              }}
            >
              <OrderComponent />
            </Box>
            <Box
              sx={{
                maxWidth: "400px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: theme.palette.background.default,
                borderRadius: "5px",
                p: 2,
                width: "100%",
                boxShadow: 1,
                ml: { xs: 0, md: 2 },
                m: { xs: "auto", md: 0 },
                mt: { xs: 4, md: 0 },
              }}
            >
              {/* <PaymentDetails
                totalDiscountPrice={getTotalPrice().totalDiscountPrice}
                totalPrice={getTotalPrice().totalPrice}
                totalDiscount={calculateDiscount(
                  getTotalPrice().totalPrice,
                  getTotalPrice().totalDiscountPrice
                )}
              /> */}
            </Box>
          </Box>
        )}
    </>
  );
};

export default Cart;
