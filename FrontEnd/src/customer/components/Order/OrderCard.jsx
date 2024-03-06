import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
    const navigate = useNavigate();

    return(
        <div onClick={() => navigate(`/account/order/${5}`)} className="mt-4 p-5 shadow-lg shadow-gray hover:shadow-2xl border">
            <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer">
                        <img className="w-[5rem] h-[5rem] object-cover object-top" 
                        src = "https://img.kwcdn.com/thumbnail/s/dcc893556cbc2cdacf56a14c88ec1a9a_7b639252b70f.jpg?imageView2/2/w/800/q/70"
                        alt = ""
                        />
                        <div className="ml-5 space-y-2">
                            <p className="">Button front skirt with plaid pattern</p>
                            <p className="opacity-50 text-xs font-semibold">Size: M</p>
                            <p className="opacity-50 text-xs font-semibold">Color: Pale</p>
                        </div>
                    </div>

                </Grid>

                <Grid item xs={2}>
                    <p>132$</p>

                </Grid>

                <Grid item xs={4}>
                  { true && <div>
                   <p>
                    <AdjustIcon sx={{width:"15px", height:"15px"}} className="text-green-600 mr-2 text-sm"/>
                        <span>
                            Delivered On March 14
                        </span>
                        <span>

                        </span>
                    </p>
                    <p>
                        Your item has been delivered
                    </p>
                    </div> }

                   { false && <p>
                        <span>
                            Expected Delivery On March 14
                        </span>
                    </p> }
                </Grid>

            </Grid>

        </div>
    )
}

export default OrderCard