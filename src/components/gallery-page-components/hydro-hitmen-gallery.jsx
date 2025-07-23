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

// Importing all gallery images
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
    { id: "1", imageUrl: galleryImage1, title: "Image 1" },
    { id: "2", imageUrl: galleryImage2, title: "Image 2" },
    { id: "3", imageUrl: galleryImage3, title: "Image 3" },
    { id: "4", imageUrl: galleryImage4, title: "Image 4" },
    { id: "5", imageUrl: galleryImage5, title: "Image 5" },
    { id: "6", imageUrl: galleryImage6, title: "Image 6" },
    { id: "7", imageUrl: galleryImage7, title: "Image 7" },
    { id: "8", imageUrl: galleryImage8, title: "Image 8" },
    { id: "9", imageUrl: galleryImage9, title: "Image 9" },
    { id: "10", imageUrl: galleryImage10, title: "Image 10" },
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
              // Change this line: Access the .src property
              href={item.imageUrl.src}
              className="group gallery-item transform overflow-hidden rounded-none p-0 hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              <div className="relative w-full border-4 border-cyan-800 rounded-lg overflow-hidden aspect-[4/3]">
                <Image
                  src={item.imageUrl.src}
                  alt= 'Gallery image' // Use item.title for better accessibility
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
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