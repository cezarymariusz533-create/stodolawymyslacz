import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const RevealSection = ({ children, className = "", delay = 0 }: RevealSectionProps) => (
  <motion.div
    initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
    whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default RevealSection;
