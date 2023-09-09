import { useState } from "react";

import "./App.css";
import Navigation from "./Components/Navigation";
import { FaShareAlt, FaHeart } from "react-icons/fa";
import image from "./assets/Men's Model/8-suit-png-image.png";
import Carousel from "./Components/Carousel";
import { AnimatePresence } from "framer-motion";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AnimatePresence>
        <div className="md:grid md:grid-rows-[50px_1fr] md:place-items-center md:h-screen relative w-full h-full">
          <Navigation />
          {/* <main className="md:grid grid-cols-1 relative w-full h-full max-w-[1200px] grid-container px-4"> */}
          <main className="md:grid md:grid-cols-1 relative w-full h-full max-w-screen-xl grid-container px-4 overflow-hidden">
            <div className="w-full h-full md:h-screen relative flex items-center justify-center">
              <div className="w-full md:h-full max-w-md relative ">
                <img
                  src={image}
                  alt=""
                  className="md:absolute top-0 w-full h-full object-scale-down "
                />
              </div>
            </div>

            <div className=" w-full md:grid md:grid-cols-3 flex flex-col gap-2">
              <div className="grid gap-2 self-center md:p-0 px-4 p-8">
                <span className="font-bold text-sm px-1 ff-Kurale">
                  New Collection
                </span>
                <h1 className="text-6xl font-bold ff-Kurale">Compostela</h1>
                <p className="ff-Source_Sans ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores dicta, sequi, at numquam explicabo obcaecati illo,
                  odio cupiditate unde blanditiis repellat nisi esse omnis nam
                  suscipit recusandae fugiat optio dolore!
                </p>

                <div className="flex items-center space-x-4">
                  <FaShareAlt />
                  <span className="font-bold flex gap-2 items-center">
                    <FaHeart /> 14k
                  </span>
                </div>
              </div>

              <div className="md:self-center grid gap-4 md:col-start-3 ff-Source_Sans md:relative md:top-0 md:right-0 absolute top-[30%] right-4">
                <div className="flex gap-2 justify-between  p-2 px-6 bg-slate-50/50 backdrop-blur-sm rounded-md">
                  <span>
                    <b>Color: </b> White
                  </span>
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

                <div className="flex flex-col gap-3  p-6 bg-slate-50/50 rounded-md justify-center backdrop-blur-sm">
                  <p>
                    <span className="font-semibold">Ref: </span>5770/241
                  </p>
                  <p>
                    <span className="font-semibold">The Model size: </span>
                    <span>M</span>
                  </p>
                  <p>
                    <span className="font-semibold">Height: </span>
                    178cm / 5'30 cm
                  </p>
                  <span className="font-semibold">Select your size</span>
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
                <Carousel />
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
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
