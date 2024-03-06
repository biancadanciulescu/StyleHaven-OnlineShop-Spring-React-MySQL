import React from 'react'
import MainCrosel from '../../components/Navigation/HomeCarosel/MainCrosel';
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel';
import { mens_shirt } from '../../../Data/mens.shirt';

const HomePage = () => {
    return(
        <div>
            <MainCrosel/>

            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarosel data ={mens_shirt} sectionName={"Men's Shirts"}/>
                <HomeSectionCarosel data ={mens_shirt} sectionName={"Men's Trousers"} />
                <HomeSectionCarosel data ={mens_shirt} sectionName={"Men's Shirts"}/>
                <HomeSectionCarosel data ={mens_shirt} sectionName={"Men's Shirts"}/>
                <HomeSectionCarosel data ={mens_shirt} sectionName={"Men's Shirts"}/>
                <HomeSectionCarosel data ={mens_shirt} sectionName={"Men's Shirts"}/>

            </div>
        </div>
    )
}

export default HomePage;