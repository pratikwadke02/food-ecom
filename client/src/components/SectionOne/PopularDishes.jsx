import React from 'react'
import { Box, Icon, Typography, Button } from '@mui/material'
import {theme} from '../../theme'
import { images } from '../../constants'
import FoodCard from '../utils/FoodCard';

const PopularDishes = () => {

    const popularDishesData = [
        {
            name: "Cheese Burger",
            price: 100,
            rating: 4.5,
            image: images.dish_1,
            id: 1,
        },
        {
            name: "Fries",
            price: 50,
            rating: 4.5,
            image: images.dish_2,
            id: 2,
        },
        {
            name: "Choco Cake",
            price: 250,
            rating: 4.5,
            image: images.dish_5,
            id: 4,
        },
    ];

  return (
    <>
    <Box sx={{
        width: "100%", mt:5, backgroundColor:theme.palette.primary.main,p:4,
    }}>
        <Box sx={{textAlign:'center', mb:3}}>
            <Typography variant="h3" sx={{color:theme.palette.background.light, fontWeight:theme.typography.fontWeightBold}}>
                POPULAR DISHES
            </Typography>
        </Box>
        <Box sx={{
            display:'flex', flexDirection:'row', justifyContent:'center', width:'100%', alignItems:'center', m:'auto' , maxWidth:'1400px'
        }}>
            {
                popularDishesData.map((item, index) => {
                    return (
                        <Box key={index} sx={{
                            width:'100%',display:'flex', justifyContent:'center'}}>
                        <FoodCard {...item} />
                        </Box>
                    )
                })
            } 
        </Box>
    </Box>
    </>
  )
}

export default PopularDishes
