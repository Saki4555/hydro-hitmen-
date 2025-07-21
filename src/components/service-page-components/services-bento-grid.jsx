import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { Button } from "@/components/ui/button";
import {
  IconWash,
  IconWind,
  IconCloudRain,
  IconHomeShield,
} from "@tabler/icons-react";
import Image from "next/image";

export function ServicesBentoGrid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] py-16">
      {services.map((service, i) => (
        <BentoGridItem
          key={i}
          title={service.name}
          description={service.description}
          header={<ServiceImage src={service.image} alt={service.name} />}
          className={service.className}
          icon={<service.icon className="h-4 w-4 text-hy-text-secondary" />}
          url={services.url}
        >
          <Button
            variant="outline"
            className="mt-4 border-hy-border text-hy-text-primary hover:bg-hy-accent-primary hover:text-white"
          >
            Details
          </Button>
        </BentoGridItem>
      ))}
    </BentoGrid>
  );
}



const ServiceImage = ({ src, alt }) => (
  <div
    className="relative   flex flex-1 w-full h-full min-h-[6rem] rounded-xl border-2 border-hy-border-accent
    "
  >
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover rounded-lg "
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