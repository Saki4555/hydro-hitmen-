import Image from "next/image";
import * as motion from "motion/react-client";
import { CheckCircle, CornerDownRight, Users } from "lucide-react"; // Import Users icon for clients
import { SectionContainer } from "../section-container";
import BadgeAndHeading from "../shared/badge-heading";
import mainImage from '../../assets/hero-images/hero-2.webp';
import secondaryImage from '../../assets/services-images/window-cleaning-2.webp';

export default function IntroductionSection() {
  return (
    <section className="bg-hy-bg-primary pt-24 pb-20 overflow-hidden">
      <SectionContainer>
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left side - Images */}
          <div className="relative group">
            {/* Main image */}
            <motion.div
              className="relative  rounded-none overflow-hidden border-2 border-hy-accent-primary/50 shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="absolute inset-0     bg-gradient-to-b from-black/30 via-transparent to-transparent"></div>
              <Image
               src={mainImage}
                alt="Professional pressure washing a home's exterior" // Updated alt text
                width={800}
                height={400}
                className="w-full h-[300px] md:h-[400px] group-hover:scale-105 transform transition-transform duration-500 object-cover hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-20 bg-hy-accent-primary text-white px-6 py-4 rounded-lg shadow-md">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="font-semibold text-xs md:text-base">
                    Fully Insured & Dependable Service
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Secondary image */}
            <motion.div
              className="absolute -bottom-8 -right-4 md:-right-8 w-32 h-32 md:w-48 md:h-48 rounded-none overflow-hidden shadow-lg border-2 border-hy-accent-primary/50"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <Image
               src={secondaryImage}
                alt="Window cleaning" 
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transform transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Right side - Content */}
          <motion.div
            className="pt-12 lg:pt-0 flex flex-col justify-center" // Added flex-col and justify-center
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="mb-8">
              <BadgeAndHeading
                heading="Revitalize Your Home's Exterior with Hydro Hitmen" // New heading
                badgeText="About Us" // New badge text
              />
              <p className="text-hy-text-secondary font-medium text-lg mb-6">
                At Hydro Hitmen, we are dedicated to delivering premier exterior cleaning solutions that restore your property&apos;s curb appeal and protect its value. Your satisfaction is our driving force.
              </p>
              <p className="text-hy-text-secondary leading-relaxed">
                Specializing in a full range of exterior home services including pressure washing, window cleaning, gutter maintenance, roof soft washing, and driveway revitalization, our team utilizes the latest techniques and professional-grade equipment. We are committed to achieving exceptional results while ensuring the safety and integrity of your home&apos;s surfaces.
              </p>
            </div>

            {/* Features and Statistics now within a nested grid/flex for layout control */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8"> {/* Changed to a grid for features and stats */}
              {/* Features (can occupy full width or half depending on layout) */}
              <div className="space-y-6 md:col-span-2"> {/* Made features span 2 columns on medium screens */}
                <div>
                  <h3 className="text-hy-accent-primary font-semibold text-lg mb-2 flex items-center">
                    <CornerDownRight />
                    Certified & Experienced Technicians
                  </h3>
                  <p className="text-hy-text-secondary ml-6">
                    Our team comprises highly trained and experienced professionals, ensuring every cleaning task is performed with precision and care to meet the highest standards.
                  </p>
                </div>

                <div>
                  <h3 className="text-hy-accent-primary font-semibold text-lg mb-2 flex items-center">
                    <CornerDownRight />
                    Over a Decade of Excellence
                  </h3>
                  <p className="text-gray-600 ml-6">
                    With over 10 years of trusted service in the exterior cleaning industry, we bring proven expertise and a commitment to quality to every project.
                  </p>
                </div>
              </div>

              {/* Statistics cards container (now part of the same grid) */}
              {/* This flex container will now be a column in the outer grid (md:col-span-2) or a row if the grid is 1 column */}
              <div className="flex flex-wrap gap-4 justify-start md:col-span-2"> {/* Ensure it spans correctly */}
                {/* Successful Projects Statistics card */}
                <motion.div
                  className="bg-hy-bg-secondary rounded-none shadow-md shadow-hy-accent-secondary/20 p-6 inline-block flex-grow sm:flex-grow-0 min-w-[200px]" // Added min-w for better spacing
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-hy-accent-secondary/20 p-3 rounded-lg">
                      <Users className="w-8 h-8 text-hy-accent-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-hy-accent-primary mb-1">
                        1,500+
                      </div>
                      <div className="text-sm text-hy-text-secondary">
                        Successful Projects
                        <br />
                        Completed
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Happy Clients Statistics card */}
                <motion.div
                  className="bg-hy-bg-secondary rounded-none shadow-md shadow-hy-accent-secondary/20 p-6 inline-block flex-grow sm:flex-grow-0 min-w-[200px]" // Added min-w for consistency
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-hy-accent-secondary/20 p-3 rounded-lg">
                      <Users className="w-8 h-8 text-hy-accent-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-hy-accent-primary mb-1">
                        800+
                      </div>
                      <div className="text-sm text-hy-text-secondary">
                        Happy Clients
                        <br />
                        Served
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div> {/* End of statistics cards container */}
            </div> {/* End of features and statistics common grid/flex container */}
          </motion.div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}