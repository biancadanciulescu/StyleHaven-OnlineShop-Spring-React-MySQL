import React from "react";
import AddressCard from '../AddressCard/AddressCard'
import OrderTraker from "./OrderTraker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Star } from "@mui/icons-material";



const OrderDetails = () => {
    return(
        <div className="px:5 lg:px-20">

            <div>
                <h1 className="mt-4 font-semibold text-xl py-7">Delivery address</h1>
                <AddressCard/>
            </div>
            
            <div className="py-20">
                <OrderTraker activeStep={3}/>
            </div>

            <Grid className="space-y-5" container>

                {[1, 1, 1, 1, 1, 1].map((item)=>          <Grid item container className="shadow-xl rounded-md p-5 border" sx={{alignItems:"center", justifyContent:"space-between"}}>

<Grid item xs={6}>

    <div className="flex items-center space x-4">
        <img className="w-[5rem] h-[rem] object-cover object-top"
        src="https://img.kwcdn.com/thumbnail/s/dcc893556cbc2cdacf56a14c88ec1a9a_7b639252b70f.jpg?imageView2/2/w/800/q/70"
        alt=""
        />

        <div className="space-y-2 ml-5">
            <p className="font semi-bold" >Button front skirt with plaid pattern</p>
            <p className="space-x-5 opacity-50 text-xs font-semibold ">
                <span>
                    Color: Pale
                </span>
                <span>
                    Size: M
                </span>
            </p>
            <p>
                Seller: Bershka
            </p>
            <p>133$</p>
        </div>
    </div>

</Grid>

<Grid item>

<Box sx={{color:deepPurple[500]}}>

    <Star sx={{fontSize:"2rem"}} className="px-2 text-5xl"/>
        <span>
            Rate & Review Product
        </span>
    

  

</Box>

</Grid>   

</Grid>)}

       

            </Grid>
           
        </div>
    ) 
}

export default OrderDetails