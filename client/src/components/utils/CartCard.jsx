import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { images } from "../../constants";
import { theme } from "../../theme";
import { useDispatch } from "react-redux";
import {Increment, Decrement} from '../../actions/cart'

const CartCard = (props) => {
  const {id,  name, image, price, quantity,} = props;

  const [qty, setQty] = React.useState(quantity);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(Increment(id));
    setQty(qty + 1);
  };

  const handleDecrement = () => {
    dispatch(Decrement(id));
    setQty(qty - 1);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {xs:'column', md:"row"},
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display:'flex', flexDirection:{xs:'column', md:'row'}  }}>
          <img src={image} alt="" style={{ borderRadius: "5px", height:'auto', width:'300px' }} />
          <Box sx={{display:'flex', flexDirection:'column', ml:{xs:0, md:2}, mt:{xs:2, md:0}}}>
          <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.main,
                fontWeight: theme.typography.fontWeightBold,
              }}
            >
              {name}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            mt:{xs:1, md:0},
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.main,
                fontWeight: theme.typography.fontWeightMedium,
              }}
            >
              ₹{price}
              
            </Typography>
          </Box>
          <Box sx={{mt:1}}>
            <Box
          sx={{
            mt:{xs:1, md:0},
            width: "fit-content",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            border: "1px solid" + theme.palette.text.light,
            
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Button
            sx={{
              minWidth:'20px',
              borderRadius: "0px",
              borderRight: "1px solid" + theme.palette.text.light,
              backgroundColor: theme.palette.background.default,
            }}
            onClick={()=>handleIncrement(id)}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: theme.typography.fontWeightBold }}
            >
              +
            </Typography>
          </Button>
          <Typography variant="h6" sx={{ ml: 2, mr: 2, 
              backgroundColor: theme.palette.background.default, }}>
            {qty}
          </Typography>
          <Button
            sx={{
              minWidth:'20px',
              borderRadius: "0px",
              borderLeft: "1px solid" + theme.palette.text.light,
              
              backgroundColor: theme.palette.background.default,
            }}
            onClick={()=>handleDecrement(id)}
          >
            <Typography
              variant="h6"
              sx={{maxWidth:'10px', fontWeight: theme.typography.fontWeightBold }}
            >
              -
            </Typography>
          </Button>
        </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CartCard;