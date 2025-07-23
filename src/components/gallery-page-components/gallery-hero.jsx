

import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import heroBg from '../../assets/hero-images/others-hero.webp';
export default function GalleryHero() {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Main Content - Centered */}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center text-white px-4"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-wide mb-8">
             Our Gallery
            </h1>
          </motion.div>
        </div>

        {/* Breadcrumb - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="absolute bottom-8 left-8 bg-hy-accent-primary rounded-br-xl rounded-tl-xl"
        >
          <div className="flex items-center space-x-2 text-white px-4 py-2">
            <Link href="/" className="text-sm">
              Home
            </Link>
            <span className="text-sm">/</span>
            <span className="text-sm font-medium">Gallery</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
