
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
import galleryImage1 from '../../assets/gallery-images/gallery-1.jpg';
import galleryImage2 from '../../assets/gallery-images/gallery-2.jpg';
import galleryImage3 from '../../assets/gallery-images/gallery-3.jpg';
import galleryImage4 from '../../assets/gallery-images/gallery-4.jpg';
import galleryImage5 from '../../assets/gallery-images/gallery-5.jpg';
import galleryImage6 from '../../assets/gallery-images/gallery-6.jpg';
import galleryImage7 from '../../assets/gallery-images/gallery-7.jpg';
import galleryImage8 from '../../assets/gallery-images/gallery-8.jpg';
import galleryImage9 from '../../assets/gallery-images/gallery-9.jpg';
import galleryImage10 from '../../assets/gallery-images/gallery-10.jpg';


const HydroHitmenGallery = () => {
  const allImages = [
    {
      id: "1",
     
      imageUrl: galleryImage1,
    },
    {
      id: "2",
     
      imageUrl: galleryImage2,
    },
    {
      id: "3",
     
     imageUrl: galleryImage3,
    },
    {
      id: "4",
      
     imageUrl: galleryImage4,
    },
    {
      id: "5",
    
     imageUrl: galleryImage5,
    },
    {
      id: "6",
     
   imageUrl: galleryImage6,
    },
    {
      id: "7",
     
     imageUrl: galleryImage7,
    },
    {
      id: "8",
     
      imageUrl: galleryImage8,
    },
    {
      id: "9",
     
      imageUrl: galleryImage9,
    },
    {
      id: "10",
     
      imageUrl: galleryImage9,
    },
  ];

  return (
  
    <div className="py-16 overflow-hidden bg-hy-bg-primary">
       <SectionContainer className="w-full">

      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgFullscreen]}
        
        elementClassNames="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {allImages.map((item) => (
          <a
            key={item.id}
            href={item.imageUrl}
            className="group gallery-item   transform overflow-hidden rounded-none p-0 hover:shadow-lg transition-shadow  flex flex-col h-full"
          >
            <div className="relative w-full border-4 border-cyan-800 rounded-lg overflow-hidden aspect-[4/3]">
              <Image
                src={item.imageUrl}
                alt= 'wait'
                // alt={item?.title || 'wait' }
                fill
                className="object-cover   transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

          </a>
        ))}
      </LightGallery>
    
     </SectionContainer>
    </div>
   
  );
};

export default HydroHitmenGallery;