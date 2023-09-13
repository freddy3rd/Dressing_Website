import React, { useEffect, useState } from "react";

import "./App.css";
import Navigation from "./Components/Navigation";
import { FaShareAlt, FaHeart } from "react-icons/fa";
import image from "./assets/Men's Model/8-suit-png-image.png";
import image_2 from "./assets/Men's Model/Model-Man-PNG-Picture.png";
import Carousel from "./Components/Carousel";
import { AnimatePresence, motion, stagger, useAnimate } from "framer-motion";
import { animationVariant } from "./util/animate.jsx";
import { Data } from "./Data/Data.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [scope, animate] = useAnimate();

  const onClickAnimation = () => {
    animate([
      [".leftOrigin", { scaleX: 1 }, { duration: 0.8 }],
      [".rightOrigin", { scaleX: 1 }, { duration: 0.8, at: "<" }],
      [".span", { scaleX: 1 }, { duration: 0.8, at: "<" }],
      [".title", { scaleX: 1 }, { duration: 0.8, at: "<" }],
      [
        ".sentence",
        { scaleX: 1 },
        {
          duration: 0.8,
          delay: stagger(0.02, { ease: "easeOut" }),
          at: "<",
          from: "center",
        },
      ],
    ]);
  };

  if (loaded) {
    animate([
      [".leftOrigin", { scaleX: [1, 0] }, { duration: 0.8 }],
      [".rightOrigin", { scaleX: [1, 0] }, { duration: 0.8, at: "<" }],
      [".span", { scaleX: [1, 0] }, { duration: 0.8, at: "<" }],
      [".title", { scaleX: [1, 0] }, { duration: 0.8, at: "<" }],
      [
        ".sentence",
        { scaleX: [1, 0] },
        {
          duration: 0.8,
          delay: stagger(0.02, { ease: "easeOut" }),
          at: "<",
          from: "center",
        },
      ],
    ]);
  }

  const cover = (bgcolor, xAxis, yAxis, width, height, scope) => {
    return (
      <>
        <motion.div
          variants={animationVariant}
          initial="rightOrigin"
          transition={{ duration: 1.5, delayChildren: 0.5 }}
          className={`absolute ${xAxis} ${yAxis} ${width} ${height} ${bgcolor} backdrop-blur-md ${scope}`}
        ></motion.div>
      </>
    );
  };

  return (
    <>
      <AnimatePresence>
        <div className="md:grid md:grid-rows-[50px_1fr] md:place-items-center md:h-screen relative w-full h-full">
          <Navigation />
          {/* <main className="md:grid grid-cols-1 relative w-full h-full max-w-[1200px] grid-container px-4"> */}
          <main
            ref={scope}
            className="md:grid md:grid-cols-1 relative w-full h-full max-w-screen-xl grid-container px-4 overflow-hidden"
          >
            <div className="w-full h-full md:h-screen relative flex items-center justify-center ">
              <motion.div className="w-full md:h-full h-[400px] max-w-md relative overflow-hidden">
                <motion.div
                  variants={animationVariant}
                  initial="leftOrigin"
                  className="w-1/2 h-full  absolute top-0 left-0 bg-[#db9db0]  -z-10 leftOrigin"
                ></motion.div>
                <motion.div
                  variants={animationVariant}
                  initial="rightOrigin"
                  className="w-1/2 h-full  absolute top-0 right-0 bg-[#db9db0]  -z-10 rightOrigin"
                ></motion.div>
                {Data.map((data) => {
                  if (data.id === count) {
                    return (
                      <motion.img
                        key={data.id}
                        src={data.img}
                        onLoad={() => setLoaded(!loaded)}
                        alt=""
                        className="md:absolute sticky top-0 left-0 w-full h-full object-scale-down -z-20"
                      />
                    );
                  }
                })}
              </motion.div>
            </div>

            <div className=" w-full md:grid md:grid-cols-3 flex flex-col gap-2">
              <motion.div className="grid gap-2 self-center md:p-0 px-4 p-8">
                <motion.span className="font-bold text-sm px-1  relative w-[max-content]">
                  {cover(
                    "bg-[#db9db0]",
                    "right-0",
                    "top-0",
                    "w-full",
                    "h-[110%]",
                    "span"
                  )}
                  {Data.map(
                    (data) =>
                      data.id === count && (
                        <p key={data.id} className=" ff-Kurale tracking-widest">
                          {data.subheader}
                        </p>
                      )
                  )}
                </motion.span>
                <motion.div className="text-6xl font-bold ff-Kurale relative w-full ">
                  {cover(
                    "bg-[#db9db0]",
                    "right-0",
                    "top-0",
                    "w-full",
                    "h-[110%]",
                    "title"
                  )}
                  {Data.map(
                    (data) =>
                      data.id === count && <h1 key={data.id}>{data.title}</h1>
                  )}
                </motion.div>
                <motion.div className="ff-Source_Sans relative ">
                  {cover(
                    "bg-[#db9db0] ",
                    "right-0",
                    "top-0",
                    "w-full",
                    "h-1/3",
                    "sentence"
                  )}
                  {cover(
                    "bg-[#db9db0] ",
                    "right-0",
                    "top-1/3",
                    "w-full",
                    "h-1/3",
                    "sentence"
                  )}
                  {cover(
                    "bg-[#db9db0] ",
                    "right-0",
                    "bottom-0",
                    "w-full",
                    "h-1/3",
                    "sentence"
                  )}
                  {Data.map(
                    (data) =>
                      data.id === count && (
                        <p key={data.id} className=" line-clamp-4">
                          {data.detail}
                        </p>
                      )
                  )}
                </motion.div>

                <motion.div
                  // animate={{ opacity: [0, 1] }}
                  // transition={{ duration: 0.5, delay: 1 }}
                  className="flex items-center space-x-4"
                >
                  <FaShareAlt />
                  <span className="font-bold flex gap-2 items-center">
                    <FaHeart /> 14k
                  </span>
                </motion.div>
              </motion.div>

              <div className="md:self-center grid gap-4 md:col-start-3 ff-Source_Sans md:relative md:top-0 md:right-0">
                <div className="flex gap-2 justify-between  p-2 px-6 bg-[#F3DEE4] backdrop-blur-sm rounded-md">
                  <motion.span
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="relative"
                  >
                    {cover(
                      "bg-[#F3DEE4]",
                      "right-0",
                      "top-0",
                      "w-full",
                      "h-[110%]",
                      "span"
                    )}
                    Color: <b>White</b>
                  </motion.span>
                  <div className="flex gap-2">
                    {[
                      "bg-slate-200",
                      "bg-black",
                      "bg-slate-800",
                      "bg-cyan-600",
                    ].map((data) => (
                      <div
                        key={data}
                        className={`p-3 rounded-full ${data}  hover:cursor-pointer`}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3  p-6 bg-[#F3DEE4] backdrop-blur-sm rounded-md justify-center ">
                  <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="relative"
                  >
                    {cover(
                      "bg-[#F3DEE4]",
                      "right-0",
                      "top-0",
                      "w-full",
                      "h-[110%]",
                      "span"
                    )}
                    Ref:
                    <span className="font-semibold  px-1">5770/241</span>
                  </motion.div>
                  <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="relative"
                  >
                    {cover(
                      "bg-[#F3DEE4]",
                      "right-0",
                      "top-0",
                      "w-full",
                      "h-[110%]",
                      "span"
                    )}
                    The Model size:
                    <span className="font-semibold px-1">M</span>
                  </motion.div>
                  <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="relative"
                  >
                    {cover(
                      "bg-[#F3DEE4]",
                      "right-0",
                      "top-0",
                      "w-full",
                      "h-[110%]",
                      "span"
                    )}
                    Height:
                    <span className="font-semibold  px-1">178cm / 5'30 cm</span>
                  </motion.div>
                  <span className="font-semibold relative">
                    Select your size
                  </span>
                  <div className="flex gap-2">
                    {["S", "M", "l", "xl", "xxl"].map((data, index) => (
                      <button
                        key={index}
                        className="p-2 bg-slate-50 flex-1 text-center font-bold uppercase hover:bg-slate-950 hover:text-slate-50"
                      >
                        {data}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 md:self-start flex md:gap-x-4 relative w-full">
                <Carousel
                  // setState={setCoverState}
                  count={count}
                  setCount={setCount}
                  animation={onClickAnimation}
                />
              </div>

              <div className="self-start w-full relative ff-Kurale">
                <button
                  type="button"
                  className="bg-slate-50 p-7 rounded-md w-full h-full font-bold "
                >
                  SHOP
                </button>
              </div>
            </div>
          </main>
          <span className=" absolute bottom-0 right-0 px-4 font-bold">
            Designed By Fazil Studio
          </span>
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
