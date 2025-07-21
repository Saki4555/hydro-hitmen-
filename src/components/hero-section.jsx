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
import {
  Sparkles,
  ArrowRight,
  Droplet,
  Zap,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote request:", formData);
  };

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
    <section className="relative bg-gradient-to-br min-h-screen from-slate-900 via-slate-800 to-slate-900">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16">
        <motion.div
          className="flex flex-col md:flex-row gap-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Headline */}
          <motion.div
            variants={itemVariants}
            className="flex-1 w-full md:w-3/5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full backdrop-blur-sm mb-4">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 font-medium text-sm tracking-wide">
                Premium Service
              </span>
            </div>
            <h1 className="text-4xl  md:text-5xl lg:text-7xl font-bold text-white mb-6">
              Exterior Cleaning
              <span className="block leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Reimagined
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 max-w-lg">
              Professional pressure washing, window & gutter cleaning for
              pristine results.
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
                  <SelectTrigger className="w-full   bg-hy-input-bg text-hy-input-text border border-hy-input-border focus-visible:ring-2 data-[placeholder]:text-hy-input-placeholder focus-visible:ring-hy-input-focus-ring">
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
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r rounded-none from-hy-accent-primary to-hy-accent-secondary text-white"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
