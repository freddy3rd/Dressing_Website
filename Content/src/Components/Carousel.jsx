import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton } from "./CarouselNavigator";
import "../stylesheet/carousel.css";
import { motion, useAnimate, useAnimation } from "framer-motion";

const Carousel = (props) => {
  //   const { slides, options } = props;
  const controls = useAnimation();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    watchDrag: false,
  });

  // () => setTimeout(() => emblaApi && emblaApi.scrollNext(), 1000),
  const scrollNext = useCallback((index) => {
    // controls.start({ scale: 1 });
    // controls.start({
    //   scale: [0, 1],
    //   transformOrigin: "right center",
    //   transition: { duration: 0.5 },
    // });
    emblaApi && emblaApi.scrollNext(), [emblaApi];
  });

  return (
    <>
      <div className="embla w-full flex items-center flex-row-reverse gap-3">
        <div
          className="embla__viewport md:max-w-none w-full max-w-screen-sm"
          ref={emblaRef}
        >
          <div className="embla__container ">
            {[
              {
                id: 1,
                title: "Title 1",
                detail:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem.",
              },
              {
                id: 2,
                title: "Title 2",
                detail:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem.",
              },
              {
                id: 3,
                title: "Title 3",
                detail:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem.",
              },
              {
                id: 4,
                title: "Title 4",
                detail:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem.",
              },
            ].map((data) => (
              <div key={data.id} className="embla__slide w-full">
                <motion.div
                  animate={controls}
                  className="p-2 bg-slate-50 w-[max-content] rounded-md"
                >
                  <span className="font-bold text-md ff-Kurale">
                    {data.title}
                  </span>
                  <p className=" text-sm w-[40ch] line-clamp-2 ff-Source_Sans ">
                    {data.detail}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 h-full flex justify-center items-center px-4 rounded-md">
          <NextButton onClick={scrollNext} />
        </div>
      </div>
    </>
  );
};

export default Carousel;
