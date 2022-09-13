import React from "react";
import { Box, Icon, Typography, Button, Card } from "@mui/material";
import { theme } from "../../theme";
import { images } from "../../constants";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {addToCart} from '../../actions/cart'
import { useDispatch } from "react-redux";

const FoodCard = (props) => {

  const {name, price, rating, image, id} = props;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = {
      id,
      name,
      price,
      image,
      quantity: 1,
    };
    dispatch(addToCart(product));
  }



  return (
    <Card sx={{ width: "100%",height:'100%', maxWidth:'400px', backgroundColor:theme.palette.background.light, p:2 }}>
      <Box sx={{display:'flex', justifyContent:'center'}}>
        <img 
        src={image} 
        alt="" 
        style={{ width: "100%", height: "200px" }}
        />
      </Box>
      <Box
        sx={{
          mt:2,
          mb:1,
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.text.main,
          }}
        >
          {name}
        </Typography>
        <Typography variant="h5" sx={{ color: theme.palette.text.main }}>
          Rs. {price}
        </Typography>
      </Box>
      <Box
        sx={{
          mt:1,
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
          <StarBorderIcon  sx={{ color: theme.palette.primary.main }} />
          <Typography variant="h6" sx={{ color: theme.palette.text.main }}>
            {rating}
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.background.light,
            width: "100%",
          }}
          onClick={handleAddToCart}
        >
          <Typography variant="h6">Add to Cart</Typography>
        </Button>
      </Box>
    </Card>
  );
};

export default FoodCard;
