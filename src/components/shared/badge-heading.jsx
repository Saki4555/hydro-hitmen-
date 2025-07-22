
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import * as motion from "motion/react-client";


const BadgeAndHeading = ({ heading, badgeText, className }) => {
  return (
    <motion.div
      className={cn("mb-8 max-w-3xl", className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Badge */}
      <motion.div
        className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 border border-cyan-200 text-cyan-700 rounded-full mb-1"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Sparkles className="w-4 h-4 text-cyan-500" />
        <span className="font-medium text-xs tracking-wide">{badgeText}</span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-hy-accent-primary leading-tight mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {heading}
      </motion.h2>
    </motion.div>
  );
};

export default BadgeAndHeading;
