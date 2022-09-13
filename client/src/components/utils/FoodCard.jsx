import React from "react";
import { Box, Icon, Typography, Button, Card } from "@mui/material";
import { theme } from "../../theme";
import { images } from "../../constants";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const FoodCard = (props) => {

  const {name, price, rating, image, id} = props;

  return (
    <Card sx={{ width: "100%", maxWidth:'400px', backgroundColor:theme.palette.background.light, p:2 }}>
      <Box sx={{display:'flex', justifyContent:'center'}}>
        <img 
        src={image} 
        alt="" />
      </Box>
      <Box
        sx={{
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
            color: theme.palette.primary.main,
          }}
        >
          {name}
        </Typography>
        <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
          Rs. {price}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
          <StarBorderIcon />
          <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
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
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
};

export default FoodCard;
