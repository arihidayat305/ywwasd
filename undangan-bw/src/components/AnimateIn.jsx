"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimateIn({ children, variants, className="" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-10% 0px -10% 0px", once: true });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
