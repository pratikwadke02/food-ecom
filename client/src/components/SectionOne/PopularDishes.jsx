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
            name: "Momo Pizza",
            price: 200,
            rating: 4.5,
            image: images.dish_4,
            id: 3,
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
        width: "100%",
    }}>
        <Box sx={{
            display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%', alignItems:'center', mt:5
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
