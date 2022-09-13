import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { theme } from "../../theme";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField/TextField";
import { useSelector } from "react-redux";

const PaymentSummary = (props) => {
  const { totalPrice } = props;
  console.log(totalPrice);

  const foodItems = useSelector((state) => state.cart.cart);

  const [OrderDetails, setOrderDetails] = React.useState({
    address: "",
    city: "",
    pincode: "",
    total: totalPrice,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(OrderDetails);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: theme.typography.fontWeightMedium }}
          >
            Payment Summary
          </Typography>
        </Box>
        <Box sx={{ width: "100%", display: "flex", mt: 2 }}>
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.main,
                mt: 1,
              }}
            >
              Total:
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.main,
                mt: 1,
              }}
            >
              ₹{totalPrice}
            </Typography>
          </Box>
        </Box>
        <Box>
          <TextField
            id="outlined-basic"
            multiline
            rows={2}
            label="Address"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
            value={OrderDetails.address}
            name="address"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
            value={OrderDetails.city}
            name="city"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Pincode"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
            value={OrderDetails.pincode}
            name="pincode"
            onChange={handleChange}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "100%", maxWidth: "200px" }}
            >
              <Typography
                variant="h6"
                sx={{ color: theme.palette.text.default }}
              >
                Place Order
              </Typography>
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default PaymentSummary;
