import React, {useEffect, useState} from 'react'
import {Box, Typography, Divider} from '@mui/material'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from '../utils/CartCard'
import {theme} from '../../theme'

const OrderComponent = () => {

    // const [cartData, setCartData] = useState([])

    const cartData  = (useSelector(state => state.cart.cart));
    console.log(cartData)

    // useEffect(() => {
    //   const getCartData = async () => {
    //     const {data} = await axios.post(`http://localhost:5000/api/yoga/getProduct`, productIdData)
    //     setCartData(data)
    //   }
    //   getCartData()
    // } , [])
    

  return (
    <>
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'flex-start', width:'100%'}}>
        <Box sx={{width:'100%'}}>
            <Typography variant="h5" sx={{fontWeight: theme.typography.fontWeightMedium,}}>Order Summary</Typography>
        </Box>
        <Box sx={{mt:2, width:'100%'}}>
        {
            cartData.map((item, index) => {
              return (
                <>
                <Box sx={{width:'100%',mb:4}}>
                  <CartCard id={item.id} name={item.name} image={item.image} price={item.price} quantity={item.quantity}  />
                </Box>
                </>
              )
            } )
          }
        </Box>
    </Box>
    </>
  )
}

export default OrderComponent
