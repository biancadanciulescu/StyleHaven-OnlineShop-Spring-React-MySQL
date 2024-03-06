import { Button, Card, CardContent, Typography, styled } from '@mui/material'
import React from 'react'

const TrignleImg=styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})

const TrophyImg=styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute"
})


const Achivement = () => {
    return(
        <Card className='' sx={{position:"relative", bgcolor: "#0A3D62", color:"white"}}>
            <CardContent>
                <Typography variant="h6" sx={{letterSpacing:".25px"}}>
                    Shop with Bianca
                </Typography>

                <Typography variant='body2'>
                    Congratulations
                </Typography>
                <Typography variant='h5' sx={{my:3.1}}>
                    239.5k
                </Typography>
                <Button size="small" variant="contained">View Sales</Button>
                <TrignleImg src=""></TrignleImg>
                <TrophyImg src="https://media.istockphoto.com/id/1168757141/vector/gold-trophy-with-the-name-plate-of-the-winner-of-the-competition.jpg?s=612x612&w=0&k=20&c=ljsP4p0yuJnh4f5jE2VwXfjs96CC0x4zj8CHUoMo39E="></TrophyImg>
            </CardContent>

        </Card>
    )
}

export default Achivement