import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mens_kurta } from "../../../Data/mens_kurta";

const HomeSectionCarousel = (Data) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (activeIndex < items.length - Math.ceil(responsive[1024].items)) {
      setActiveIndex((prevIndex) => prevIndex + 1);
      carouselRef.current.slideNext();
    }
  };

  const items = mens_kurta.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="relative px-4 lg:px-8">
        <h2 className="text-lg font-bold" > Bedsheets</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          activeIndex={activeIndex}
          onSlideChanged={({ item }) => setActiveIndex(item)}
          ref={carouselRef}  // Reference to the carousel instance
          controlsStrategy="responsive"
        />

        {/* Next Button */}
        {activeIndex < items.length - Math.ceil(responsive[1024].items) && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: 'absolute',
              top: '50%',
              right: '-2rem',
              transform: 'translateY(-50%)',
              bgcolor: 'white',
            }}
            aria-label="next"
          >
            <ChevronLeftIcon sx={{ color: "black", transform: "rotate(180deg)" }} />
          </Button>
        )}

        {/* Previous Button */}
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slidePrev}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '-2rem',
              transform: 'translateY(-50%)',
              bgcolor: 'white',
            }}
            aria-label="previous"
          >
            <ChevronLeftIcon sx={{ color: "black" }} />
          </Button>
        )}
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
