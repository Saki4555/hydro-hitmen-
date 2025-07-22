"use client";

import Link from "next/link";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "../ui/image-comparison";
import { Button } from "../ui/button";

export function ServiceWithImageComparisonCard({
  title,
  imageLeft,
  imageRight,
  url,
}) {
  return (
    <div className="rounded-none overflow-hidden shadow-md shadow-hy-accent-secondary/20 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4">
      <ImageComparison className="w-full h-64 border-b rounded-lg  border-zinc-200 dark:border-zinc-800">
        <ImageComparisonImage
          src={imageLeft}
          alt={`${title} dark`}
          position="left"
        />

        <ImageComparisonImage
          src={imageRight}
          alt={`${title} light`}
          position="right"
        />

        <ImageComparisonSlider className="w-2 bg-hy-accent-secondary/60  backdrop-blur-xs transition-colors hover:bg-hy-accent-secondary">
          <div className="absolute left-1/2 top-1/2 h-8 w-6 -translate-x-1/2 -translate-y-1/2 rounded-[4px] bg-hy-accent-primary/80" />
        </ImageComparisonSlider>
      </ImageComparison>

      <div className="relative px-6 py-5 text-center bg-gradient-to-br from-hy-accent-secondary/5 via-white/50 to-hy-accent-primary/5 border-t border-hy-accent-secondary/20 dark:border-hy-accent-primary/20">
        <div className="absolute top-0 left-1/2 w-16 h-px bg-gradient-to-r from-transparent via-hy-accent-primary/40 to-transparent -translate-x-1/2"></div>

        <div className="relative z-10">
        
            <h3 className="text-2xl uppercase mb-3 font-mono  font-semibold bg-gradient-to-r from-hy-accent-primary via-hy-accent-primary/60 to-hy-accent-secondary bg-clip-text text-transparent ">
              {title}
            </h3>
        

          <Button className="group  relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800 px-10 py-3 tracking-tighter text-white">
            <span className="absolute h-0 w-0 rounded-full bg-hy-accent-primary transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></span>
            <span className="absolute bottom-0 left-0 -ml-2 h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="object-stretch h-full w-auto opacity-100"
                viewBox="0 0 487 487"
              >
                <path
                  fillOpacity=".1"
                  fillRule="nonzero"
                  fill="var(--color-teal-400)"
                  d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                ></path>
              </svg>
            </span>
            <span className="absolute top-0 right-0 -mr-3 h-full w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full object-cover"
                viewBox="0 0 487 487"
              >
                <path
                  fillOpacity=".1"
                  fillRule="nonzero"
                  fill="var(--color-teal-400)"
                  d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                ></path>
              </svg>
            </span>
            <span className="absolute inset-0 -mt-1 h-full w-full rounded-lg bg-gradient-to-b from-transparent via-transparent to-teal-200 opacity-30"></span>
            <Link href={url} className="relative text-base font-semibold">
              {" "}
              Details
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
