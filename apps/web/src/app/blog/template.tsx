"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#944e77] z-50 origin-left"
        style={{ scaleX }}
      />
      {children}
    </div>
  );
}
