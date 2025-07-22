import { cn } from "@/lib/utils";
import Image from "next/image";
import * as motion from "motion/react-client";

const services = [
  { name: "Pressure Washing", id: "pressure-washing" },
  { name: "Window cleaning", id: "window-cleaning" },
  { name: "Gutter Cleaning", id: "gutter-cleaning" },
  { name: "Roof Soft Wash", id: "roof-soft-wash" },
];

const ImageWithCategory = ({ activeService }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
    >
      {/* Hero Image */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="relative overflow-hidden rounded-none shadow-md shadow-hy-accent-secondary/20 h-72 sm:h-80 lg:h-96 group">
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Professional cleaning service in action"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-hy-accent-primary/10 to-hy-accent-secondary/5" />
        </div>
      </motion.div>

      {/* Services Navigation */}
      <motion.div
        className="bg-hy-bg-secondary border border-hy-border rounded-none p-8 lg:p-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="space-y-4">
          {services.map((service, index) => (
           <motion.div  key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.1 }}>
             <div
             
              className={cn(
                "group flex items-center justify-between py-4 px-6 rounded-xl transition-all duration-300 cursor-pointer",
                service.id === activeService
                  ? "bg-hy-accent-primary/10 border border-hy-border-accent shadow-sm"
                  : "bg-hy-bg-primary border border-hy-border hover:border-hy-border-accent hover:shadow-sm"
              )}
            >
              <span
                className={cn(
                  "font-medium text-lg transition-colors duration-300",
                  service.id === activeService
                    ? "text-hy-accent-primary"
                    : "text-hy-text-primary group-hover:text-hy-accent-primary"
                )}
              >
                {service.name}
              </span>
              <svg
                className={cn(
                  "w-5 h-5 transition-transform duration-300",
                  service.id === activeService
                    ? "text-hy-accent-primary"
                    : "text-hy-accent-primary group-hover:translate-x-1"
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
           </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageWithCategory;
