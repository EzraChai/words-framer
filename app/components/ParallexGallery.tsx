import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallexGallery() {
  const firstDayRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: firstDayRef,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["#000000", "#ffffff"]
  );
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["#ffffff", "#000000"]
  );

  const backgroundColorToNight = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["#ffffff", "#000000"]
  );

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div ref={firstDayRef} className="h-[200vh] relative">
      <motion.div
        style={{ backgroundColor }}
        className="sticky top-0 w-full h-[100vh] flex justify-center"
      >
        <motion.div
          style={{ color: textColor }}
          className="text-[6rem] font-bold"
        >
          DAY 1
        </motion.div>
      </motion.div>
    </div>
  );
}
