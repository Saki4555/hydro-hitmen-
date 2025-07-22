import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

import {
  IconWash,
  IconWind,
  IconCloudRain,
  IconHomeShield,
} from "@tabler/icons-react";
import Image from "next/image";
import { SectionContainer } from "../section-container";

export function ServicesBentoGrid() {
  return (
   <div className="bg-hy-bg-primary relative py-16">
    
    <BubbleSVG />
     <PressureSpray />
      <WindowSparkle />
      <GutterWave />
      <RoofDrops />

     <SectionContainer>
     {" "}
      <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[23rem]">
        {services.map((service, i) => (
        
           <BentoGridItem
            key={i}
            index={i}
            title={service.name}
            description={service.description}
            header={<ServiceImage src={service.image} alt={service.name} />}
            className={service.className}
            icon={<service.icon className="h-4 w-4 text-hy-text-secondary" />}
            url={service.url}
          ></BentoGridItem>
       
        ))}
      </BentoGrid>
    </SectionContainer>
   </div>
  );
}

const ServiceImage = ({ src, alt }) => (
  <div
    className="relative   flex flex-1 w-full h-full min-h-[10rem] rounded-xl border-2 border-hy-border-accent
    "
  >
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover rounded-lg group-hover/bento:scale-[1.030] transition-transform duration-300"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  </div>
);

export const services = [
  {
    name: "Pressure Washing",
    id: "pressure-washing",
    description: "High-powered cleaning for driveways, patios, and more.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    icon: IconWash,
    className: "md:col-span-2",
    url: "/services/pressure-washing",
  },
  {
    name: "Window Cleaning",
    id: "window-cleaning",
    description: "Crystal-clear window cleaning for homes and businesses.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    icon: IconWind,
    className: "md:col-span-1",
    url: "/services/window-cleaning",
  },
  {
    name: "Gutter Cleaning",
    id: "gutter-cleaning",
    description: "Prevent water damage with thorough gutter cleaning.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    icon: IconCloudRain,
    className: "md:col-span-1",
    url: "/services/gutter-cleaning",
  },
  {
    name: "Roof Soft Wash",
    id: "roof-soft-wash",
    description: "Gentle yet effective roof cleaning without damage.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    icon: IconHomeShield,
    className: "md:col-span-2",
    url: "/services/roof-soft-wash",
  },
];

const BubbleSVG = () => (
  <svg viewBox="0 0 100 100" className="absolute w-24 h-24 top-4 left-4 opacity-10">
    <circle cx="30" cy="30" r="20" fill="#06b6d4" />
    <circle cx="60" cy="60" r="15" fill="#14b8a6" />
    <circle cx="80" cy="20" r="10" fill="#06b6d4" />
  </svg>
);

// Pressure Washing – high-pressure spray droplets
const PressureSpray = () => (
  <svg viewBox="0 0 100 100" className="absolute w-32 h-32 top-44 left-2 opacity-10">
    <path
      d="M10 90 C30 70, 70 70, 90 90"
      stroke="#06b6d4" strokeWidth="5" fill="none"
    />
    <circle cx="20" cy="80" r="4" fill="#14b8a6" />
    <circle cx="40" cy="80" r="3" fill="#06b6d4" />
    <circle cx="60" cy="80" r="2" fill="#14b8a6" />
    <circle cx="80" cy="80" r="3" fill="#06b6d4" />
  </svg>
);

// Window Cleaning – sparkle sparkle
const WindowSparkle = () => (
  <svg viewBox="0 0 24 24" className="absolute w-12 h-12 top-20 right-10 opacity-20">
    <path
      d="M12 2L13.09 8.26L18 9.27L14.5 13.14L15.91 18.02L12 15.77L8.09 18.02L9.5 13.14L6 9.27L10.91 8.26L12 2Z"
      fill="#06b6d4"
    />
  </svg>
);

// Gutter Cleaning – water wave line
const GutterWave = () => (
  <svg viewBox="0 0 120 40" className="absolute w-40 h-16 bottom-20 left-8 opacity-10">
    <path
      d="M0 20 Q30 0, 60 20 T120 20"
      stroke="#14b8a6" strokeWidth="4" fill="none"
    />
  </svg>
);

// Roof Soft Wash – gentle droplets cascade
const RoofDrops = () => (
  <svg viewBox="0 0 80 120" className="absolute w-20 h-32 bottom-0 right-20 opacity-10">
    <path
      d="M40 0 Q35 20, 40 40 T40 80 T40 120"
      stroke="#06b6d4" strokeWidth="4" fill="none"
    />
    <circle cx="40" cy="100" r="4" fill="#14b8a6" />
  </svg>
);
