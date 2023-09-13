import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton } from "./CarouselNavigator";
import { Data } from "../Data/Data";
import "../stylesheet/carousel.css";
import { motion, useAnimate, useAnimation } from "framer-motion";

const Carousel = (props) => {
  const { animation, count, setCount } = props;
  const [scope, animate] = useAnimate();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    watchDrag: false,
  });

  const card_Animation = () => {
    animate([`.card-${count - 1}`, { scaleX: 0 }, { duration: 1 }]);
  };
  const scrollNext = useCallback(() => {
    animation();
    setButtonDisabled(true);
    setTimeout(() => {
      setCount((prev) => (count < Data.length - 1 ? prev + 1 : (prev = 0)));
      emblaApi && emblaApi.scrollNext(), [emblaApi];
      setButtonDisabled(false);
    }, 700);

    // emblaApi && emblaApi.scrollNext(), [emblaApi];
  });

  return (
    <>
      <div
        ref={scope}
        className="embla w-full flex items-center flex-row-reverse gap-3"
      >
        <div
          className="embla__viewport md:max-w-none w-full max-w-screen-sm"
          ref={emblaRef}
        >
          <div className="embla__container ">
            {Data.map((data, index) => (
              <div key={data.id} className="embla__slide w-full">
                <motion.div
                  initial={{ transformOrigin: "right", scaleX: 1 }}
                  className={`p-2 bg-slate-50 w-[max-content] rounded-md card-${index}`}
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
          <NextButton onClick={scrollNext} disabled={buttonDisabled} />
        </div>
      </div>
    </>
  );
};

export default Carousel;
