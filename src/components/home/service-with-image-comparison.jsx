"use client";

import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "../ui/image-comparison";

export function ServiceWithImageComparisonCard({
  title,
  imageLeft,
  imageRight,
}) {
  return (
    <div className="rounded-none overflow-hidden shadow-md shadow-hy-accent-secondary/20 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
      <ImageComparison className="w-full h-64 border-b border-zinc-200 dark:border-zinc-800">
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
          <h3 className="text-2xl font-bold bg-gradient-to-r from-hy-accent-primary via-hy-accent-primary/90 to-hy-accent-secondary bg-clip-text text-transparent drop-shadow-sm tracking-tight">
            {title}
          </h3>
          <div className="mt-2 w-12 h-0.5 bg-gradient-to-r from-hy-accent-secondary to-hy-accent-primary rounded-full mx-auto opacity-70"></div>
        </div>
      </div>
    </div>
  );
}
