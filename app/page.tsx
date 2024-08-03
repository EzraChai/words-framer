"use client";
import Image from "next/image";
import IMG_2237 from "./assets/images/IMG_2237.jpg";
import FIMO_1722155388436 from "./assets/images/FIMO_1722155388436.jpg";
import IMG_1876 from "./assets/images/IMG_1876.jpg";
import IMG_2053 from "./assets/images/IMG_2053.jpg";
import IMG20240729110353 from "./assets/images/IMG20240729110353.jpg";
import IMG20240729122842 from "./assets/images/IMG20240729122842.jpg";
import FIMO_1722247103461 from "./assets/images/FIMO_1722247103461.jpg";
import { ReactLenis } from "lenis/react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Footer from "./components/Footer";
import Paragrah from "./Paragraph";
import Hero from "./components/Hero";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);

  return (
    <ReactLenis root>
      <Hero />
      <div ref={containerRef} className="h-[300vh] relative ">
        <div className="sticky top-0 w-full h-[100vh] bg-lime-300 overflow-hidden">
          <motion.div
            style={{ scale: scale4 }}
            className="absolute top-0 w-full h-full flex justify-center items-center "
          >
            <div className="relative w-[25vw] h-[25vh] rounded-lg overflow-hidden">
              <Image
                fill
                className=" object-cover"
                src={IMG_2237}
                alt="Group Photo"
                placeholder="blur"
              />
            </div>
          </motion.div>
          <motion.div
            style={{ scale: scale5 }}
            className="absolute top-0 w-full h-full flex justify-center items-center "
          >
            <div className=" relative top-[-30vh] h-[30vh] w-[35vw] left-[5vw] rounded-lg overflow-hidden">
              <Image
                fill
                src={FIMO_1722247103461}
                className=" object-cover"
                alt="Group Photo"
                placeholder="blur"
              />
            </div>
          </motion.div>
          <motion.div
            style={{ scale: scale8 }}
            className="absolute top-0 w-full h-full flex justify-center items-center overflow-hidden"
          >
            <div className=" relative top-[-10vh] h-[45vh] w-[15vw] left-[-22.5vw] rounded-lg overflow-hidden">
              <Image
                className=" object-cover"
                placeholder="blur"
                fill
                src={IMG_2053}
                alt="Group Photo"
              />
            </div>
          </motion.div>
          <motion.div
            style={{ scale: scale5 }}
            className="absolute top-0 w-full h-full flex justify-center items-center overflow-hidden"
          >
            <div className=" relative h-[25vh] w-[25vw] left-[27.5vw] rounded-lg overflow-hidden">
              <Image
                className=" object-cover"
                placeholder="blur"
                fill
                src={IMG20240729122842}
                alt="Group Photo"
              />
            </div>
          </motion.div>
          <motion.div
            style={{ scale: scale7 }}
            className="absolute top-0 w-full h-full flex justify-center items-center overflow-hidden"
          >
            <div className=" relative top-[27.5vh] h-[25vh] w-[20vw] left-[5vw] rounded-lg overflow-hidden">
              <Image
                className=" object-cover"
                placeholder="blur"
                fill
                src={IMG20240729110353}
                alt="Group Photo"
              />
            </div>
          </motion.div>
          <motion.div
            style={{ scale: scale6 }}
            className="absolute top-0 w-full h-full flex justify-center items-center overflow-hidden"
          >
            <div className=" relative top-[27.5vh] h-[25vh] w-[30vw] left-[-22.5vw] rounded-lg overflow-hidden">
              <Image
                className=" object-cover"
                placeholder="blur"
                fill
                src={FIMO_1722155388436}
                alt="Group Photo"
              />
            </div>
          </motion.div>
          <motion.div
            style={{ scale: scale5 }}
            className="absolute top-0 w-full h-full flex justify-center items-center overflow-hidden"
          >
            <div className=" relative top-[22.5vh] h-[15vh] w-[15vw] left-[25vw] rounded-lg overflow-hidden">
              <Image
                className=" object-cover"
                placeholder="blur"
                fill
                src={IMG_1876}
                alt="Group Photo"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className=" bg-black">
        <Paragrah />
      </div>
      <Footer />
    </ReactLenis>
  );
}
