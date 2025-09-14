import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function SectionTitle({ overline, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {overline && (
        <motion.div variants={fadeUp(.0)} initial="hidden" whileInView="show" viewport={{ once:true }}>
          <span className="tracking-[.25em] uppercase text-xs text-white/60">{overline}</span>
        </motion.div>
      )}
      <motion.h2
        className="font-display text-3xl sm:text-4xl mt-2"
        variants={fadeUp(.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once:true }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-white/70 mt-3"
          variants={fadeUp(.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
