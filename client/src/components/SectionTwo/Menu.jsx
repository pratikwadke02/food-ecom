import React from "react";
import { Box, Typography } from "@mui/material";
import FoodCard from "../utils/FoodCard";
import { images } from "../../constants";

const Menu = () => {
  const menuOne = [
    {
      name: "Cheese Pizza",
      price: 220,
      rating: 4.5,
      image: images.menu_1,
      id: 4,
    },
    {
      name: "Double Decker Burger",
      price: 99,
      rating: 4.5,
      image: images.menu_2,
      id: 5,
    },
    {
      name: "Butter Rumali Roti",
      price: 25,
      rating: 4.5,
      image: images.menu_3,
      id: 6,
    },
  ];

  const menuTwo = [
    {
      name: "Dessert",
      price: 149,
      rating: 4.5,
      image: images.menu_4,
      id: 7,
    },
    {
      name: "Choco Fruit Plate",
      price: 310,
      rating: 4.5,
      image: images.menu_5,
      id: 8,
    },
    {
      name: "Cup Cake",
      price: 150,
      rating: 4.5,
      image: images.menu_6,
      id: 9,
    },
  ];

  const menuThree = [
    {
      name: "Drinks",
      price: 140,
      rating: 4.5,
      image: images.menu_7,
      id: 10,
    },
    {
      name: "Mix Fruit Juice",
      price: 220,
      rating: 4.5,
      image: images.menu_8,
      id: 11,
    },
    {
      name: "Lemon Juice",
      price: 130,
      rating: 4.5,
      image: images.menu_9,
      id: 12,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1400px",
        m:'auto',
        p:5,
      }}
    >
      <Box sx={{textAlign:'center'}}>
        <Typography variant="h3" color="primary" sx={{ fontWeight: "bold", mt: 5 }}>
          OUR MENU
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          mt: 5,
        }}
      >
        {menuOne.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FoodCard {...item} />
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          mt: 5,
        }}
      >
        {menuTwo.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FoodCard {...item} />
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          mt: 5,
        }}
      >
        {menuThree.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FoodCard {...item} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Menu;
