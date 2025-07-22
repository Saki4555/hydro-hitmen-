
'use client'
import React from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import lgFullscreen from "lightgallery/plugins/fullscreen";


import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import "lightgallery/css/lg-fullscreen.css";


import Image from "next/image";
import { SectionContainer } from "../section-container";



const HydroHitmenGallery = () => {
  const allImages = [
    {
      id: "1",
     
      imageUrl:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "2",
     
      imageUrl:
        "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHwy",
    },
    {
      id: "3",
     
      imageUrl:
        "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHwy",
    },
    {
      id: "4",
      
      imageUrl:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "5",
    
      imageUrl:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "6",
     
      imageUrl:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "7",
     
      imageUrl:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "8",
     
      imageUrl:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
  
     <SectionContainer className="w-full py-16">

      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgFullscreen]}
        
        elementClassNames="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {allImages.map((item) => (
          <a
            key={item.id}
            href={item.imageUrl}
            className="group gallery-item border border-muted  transform overflow-hidden rounded-none p-0 hover:shadow-lg transition-shadow  flex flex-col h-full"
          >
            <div className="relative w-full border-4 border-hy-border rounded-lg overflow-hidden aspect-[4/3]">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover   transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

          </a>
        ))}
      </LightGallery>
    
     </SectionContainer>
   
  );
};

export default HydroHitmenGallery;