"use client";

import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const text =
  "Four former Matriculation batch 23/24 students from Negeri Sembilan " +
  "and Kuala Lumpur going on a trip together to Negeri Sembilan." +
  "It was an amazing experience for them to travel to Negeri Sembilan. " +
  "They had a great time exploring the city and experiencing its culture. " +
  "Their trip was filled with adventure, laughter, and memories that will " +
  "stay with them forever.";

export default function Paragrah() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "start start"],
  });

  const paragraph = text.split(" ");

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <>
      <div className="h-[100vh]"></div>
      <div className="h-[100vh] flex justify-center items-center">
        <div className=" text-lime-300 text-6xl max-w-5xl text-pretty ">
          <motion.p
            ref={containerRef}
            className="flex flex-wrap leading-1 gap-3"
          >
            {paragraph.map((word, index) => {
              const start = index / paragraph.length;
              const end = start + 1 / paragraph.length;
              return (
                <Word
                  word={word}
                  range={[start, end]}
                  progress={scrollYProgress}
                  key={index}
                />
              );
            })}
          </motion.p>
        </div>
      </div>
      <div className="h-[50vh]"></div>
    </>
  );
}

const Word = ({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative text-balance">
      <span className="absolute opacity-[0.3]">{word}</span>
      <motion.span style={{ opacity }}>{word}</motion.span>
    </span>
  );
};
