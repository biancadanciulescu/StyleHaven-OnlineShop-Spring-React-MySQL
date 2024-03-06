import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//import { mens_shirt } from '../../../Data/mens.shirt';

import 'react-alice-carousel/lib/alice-carousel.css';

const HomeSectionCarosel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => setActiveIndex((prev) => Math.max(0, prev - 1));
    const slideNext = () => setActiveIndex((prev) => Math.min((props.data || []).length - 1, prev + 1));

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = (props.data || []).slice(0, 10).map((item) => <HomeSectionCard key={item.id} product={item} />);

    return (
        <div className="border">
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{props.sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                    renderPrevButton={() => (
                        <Button
                            variant="contained"
                            className="z-50 bg-white"
                            onClick={slidePrev}
                            sx={{
                                position: 'absolute',
                                top: '8rem',
                                left: '0rem',
                                transform: 'translateX(-50%) rotate(-90deg)',
                                bgcolor: 'white',
                                display: activeIndex === 0 ? 'none' : 'block',
                            }}
                            aria-label="previous"
                        >
                            <ArrowBackIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                        </Button>
                    )}
                    renderNextButton={() => (
                        <Button
                            variant="contained"
                            className="z-50 bg-white"
                            onClick={slideNext}
                            sx={{
                                position: 'absolute',
                                top: '8rem',
                                right: '0rem',
                                transform: 'translateX(50%) rotate(90deg)',
                                bgcolor: 'white',
                                display: activeIndex === (props.data || []).length - 1 ? 'none' : 'block',
                            }}
                            aria-label="next"
                        >
                            <ArrowForwardIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
                        </Button>
                    )}
                />
            </div>
        </div>
    );
};

export default HomeSectionCarosel;