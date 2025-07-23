import * as motion from "motion/react-client";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactInfoCard({
  icon: Icon,
  title,
  items,
  index
}) {
  // Detect type based on title
  const getLink = (text) => {
    if (title.toLowerCase().includes("email")) {
      return `mailto:${text}`;
    }
    if (title.toLowerCase().includes("phone")) {
      return `tel:${text.replace(/\s+/g, "")}`;
    }
    if (title.toLowerCase().includes("location")) {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(text)}`;
    }
    return "#";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{once: true, amount: 0.1}}
      transition={{ delay: index * 0.4, duration: 0.5 }}
   
      className="group"
    >
      <Card className="relative overflow-hidden bg-hy-bg-secondary border-t-4 border-t-hy-border-accent shadow-md transition-all duration-300 group">
        {/* Slide-down gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-hy-accent-primary to-hy-accent-secondary transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />

        <CardContent className="relative p-8 text-center z-10 transition-colors duration-300 group-hover:text-white">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-hy-accent-primary/10 group-hover:bg-teal-900 mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-hy-accent-primary group-hover:text-white transition-colors duration-300" />
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-hy-text-primary mb-4 transition-colors duration-300 group-hover:text-white">
            {title}
          </h3>

          {/* Clickable Items */}
          <div className="space-y-2">
            {items.map((item, index) => (
              <a
                key={index}
                href={getLink(item)}
                target={title.toLowerCase().includes("location") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="block text-hy-text-secondary hover:underline transition-colors duration-200 group-hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
