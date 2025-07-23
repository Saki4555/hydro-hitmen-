"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "../assets/hero-images/home-hero.webp";
import {
  Sparkles,
  ArrowRight,
  Droplet,
  Zap,
  ShieldCheck,
  BadgeCheck,
  
} from "lucide-react"; // Imported new icons
import Image from "next/image";

export default function HeroSection() {
const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  serviceType: "",
});
const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
  setFormData((prev) => ({ ...prev, [field]: value }));
};


  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  try {
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Quote request:", formData);
    alert("Quote request submitted! We'll be in touch soon.");

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      serviceType: "",
    });
  } catch (error) {
    console.error("Submission failed:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const features = [
    {
      icon: <Droplet className="w-4 h-4 text-white" />,

      title: "Eco-Friendly Solutions",

      desc: "Safe for your family and environment",
    },

    {
      icon: <Zap className="w-4 h-4 text-white" />,

      title: "Fast & Efficient",

      desc: "Professional results in minimal time",
    },

    {
      icon: <ShieldCheck className="w-4 h-4 text-white" />,

      title: "Fully Insured",

      desc: "Complete protection and peace of mind",
    },

    {
      icon: <BadgeCheck className="w-4 h-4 text-white" />,

      title: "Quality Guaranteed",

      desc: "100% satisfaction or we return",
    },
  ];

  return (
    <section className="relative pt-16 bg-gradient-to-br min-h-screen from-slate-900 via-slate-800 to-slate-900">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Background"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16">
        <motion.div
          className="flex flex-col md:flex-row gap-7 "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Headline */}
          <motion.div
            variants={itemVariants}
            className="flex-1 w-full md:w-3/5"
          >
            {/* Uncommented and refined this section */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full backdrop-blur-sm mb-4">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 font-medium text-sm tracking-wide">
                Your Property, Reimagined
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 text-balance">
              {" "}
              {/* Added text-balance */}
              Exterior Cleaning
              <span className="block leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Excellence
              </span>{" "}
              {/* Changed text from "Reimagined" to "Excellence" */}
            </h1>
            <p className="text-base lg:text-lg text-slate-300 max-w-lg">
              Unlock the true potential of your property with our premium
              pressure washing, window, gutter, roof soft washing, and driveway
              cleaning services.
            </p>
          </motion.div>

          {/* Right: Features */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 p-0 md:p-8 gap-1 w-full md:w-2/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-none border border-white/5"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-white">{feature.icon}</div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-slate-300 text-xs">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Form */}
      <motion.div
        className="z-20 relative max-w-3xl mx-auto translate-y-8 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Card className=" backdrop-blur-xl border-0 shadow-md shadow-teal-100 rounded-none">
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Input
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  className="bg-hy-input-bg text-hy-input-text placeholder:text-hy-input-placeholder border border-hy-input-border focus-visible:ring-2 focus-visible:ring-hy-input-focus-ring"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-hy-input-bg  text-hy-input-text placeholder:text-hy-input-placeholder border border-hy-input-border focus-visible:ring-2 focus-visible:ring-hy-input-focus-ring"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-hy-input-bg  text-hy-input-text placeholder:text-hy-input-placeholder border border-hy-input-border focus-visible:ring-2 focus-visible:ring-hy-input-focus-ring"
                />

                <Select
                  onValueChange={(value) =>
                    handleInputChange("serviceType", value)
                  }
                >
                  <SelectTrigger className="w-full  bg-hy-input-bg text-hy-input-text border border-hy-input-border focus-visible:ring-2 data-[placeholder]:text-hy-input-placeholder focus-visible:ring-hy-input-focus-ring">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem
                      value="pressure-washing"
                      className="focus:bg-hy-accent-primary/10  [&_svg:not([class*='text-'])]:text-hy-accent-primary"
                    >
                      Pressure Washing
                    </SelectItem>
                    <SelectItem
                      value="window-cleaning"
                      className="focus:bg-hy-accent-primary/10  [&_svg:not([class*='text-'])]:text-hy-accent-primary"
                    >
                      Window Cleaning
                    </SelectItem>
                    <SelectItem
                      value="gutter-cleaning"
                      className="focus:bg-hy-accent-primary/10  [&_svg:not([class*='text-'])]:text-hy-accent-primary"
                    >
                      Gutter Cleaning
                    </SelectItem>
                    <SelectItem // Added Roof Soft Wash
                      value="roof-soft-wash"
                      className="focus:bg-hy-accent-primary/10  [&_svg:not([class*='text-'])]:text-hy-accent-primary"
                    >
                      Roof Soft Washing
                    </SelectItem>
                    <SelectItem // Added Driveway Cleaning
                      value="driveway-cleaning"
                      className="focus:bg-hy-accent-primary/10  [&_svg:not([class*='text-'])]:text-hy-accent-primary"
                    >
                      Driveway Cleaning
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

             
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-hy-accent-primary hover:bg-hy-accent-secondary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:transform-none disabled:hover:bg-hy-accent-primary group"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    Submit Now
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
