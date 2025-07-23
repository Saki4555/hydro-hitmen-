// // import * as motion from "motion/react-client";
// // import { SectionContainer } from "../section-container";
// // import BadgeAndHeading from "../shared/badge-heading";
// // import { ServiceWithImageComparisonCard } from "./service-with-image-comparison";
// // import dcAfterImage from '../../assets/compare-images/dc-after.webp';
// // import dcBeforeImage from '../../assets/compare-images/dc-before.webp';
// // import gcAfterImage from '../../assets/compare-images/gc-after.webp';
// // import gcBeforeImage from '../../assets/compare-images/gc-before.webp';
// // import pwAfterImage from '../../assets/compare-images/pw-after.webp';
// // import pwBeforeImage from '../../assets/compare-images/pw-before.webp';
// // import rwAfterImage from '../../assets/compare-images/rw-after.webp';
// // import rwBeforeImage from '../../assets/compare-images/rw-before.webp';
// // import wcAfterImage from '../../assets/compare-images/wc-after.webp';
// // import wcBeforeImage from '../../assets/compare-images/wc-before.webp';

// // const itemAnimation = {
// //   initial: { opacity: 0, y: 30 },
// //   whileInView: { opacity: 1, y: 0 },
// //   transition: { duration: 0.6, ease: "easeOut" },
// //   viewport: { once: true, amount: 0.1 },
// // };

// // export default function ServicesWeAreOffering() {
// //   return (
// //     <div className="py-16 bg-hy-bg-primary overflow-hidden">
// //       <SectionContainer>
// //         <BadgeAndHeading
// //           heading="Our Comprehensive Exterior Cleaning Services" // Updated heading
// //           badgeText="Our Services" // Updated badge text
// //         />

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //           <motion.div {...itemAnimation}>
// //             <ServiceWithImageComparisonCard
// //               title="Pressure Washing"
// //               imageLeft="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
// //               imageRight="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
// //               url="/services/pressure-washing"
// //             />
// //           </motion.div>

// //           <motion.div {...itemAnimation}>
// //             <ServiceWithImageComparisonCard
// //               title="Window Cleaning"
// //               imageLeft="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
// //               imageRight="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
// //               url="/services/window-cleaning"
// //             />
// //           </motion.div>

// //           <motion.div {...itemAnimation}>
// //             <ServiceWithImageComparisonCard
// //               title="Gutter Cleaning"
// //               imageLeft="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
// //               imageRight="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
// //               url="/services/gutter-cleaning"
// //             />
// //           </motion.div>

// //           <motion.div {...itemAnimation}>
// //             <ServiceWithImageComparisonCard
// //               title="Roof Soft Wash"
// //               imageLeft="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
// //               imageRight="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
// //               url="/services/roof-soft-wash"
// //             />
// //           </motion.div>
// //           <motion.div {...itemAnimation}>
// //             <ServiceWithImageComparisonCard
// //               title="Driveway Cleaning"
// //               imageLeft="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
// //               imageRight="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
// //               url="/services/driveway-cleaning"
// //             />
// //           </motion.div>
// //         </div>
// //       </SectionContainer>
// //     </div>
// //   );
// // }

// import * as motion from "motion/react-client";
// import { SectionContainer } from "../section-container";
// import BadgeAndHeading from "../shared/badge-heading";
// import { ServiceWithImageComparisonCard } from "./service-with-image-comparison";

// // Import all the images
// import dcAfterImage from '../../assets/compare-images/dc-after.webp';
// import dcBeforeImage from '../../assets/compare-images/dc-before.webp';
// import gcAfterImage from '../../assets/compare-images/gc-after.webp';
// import gcBeforeImage from '../../assets/compare-images/gc-before.webp';
// import pwAfterImage from '../../assets/compare-images/pw-after.webp';
// import pwBeforeImage from '../../assets/compare-images/pw-before.webp';
// import rwAfterImage from '../../assets/compare-images/rw-after.webp';
// import rwBeforeImage from '../../assets/compare-images/rw-before.webp';
// import wcAfterImage from '../../assets/compare-images/wc-after.webp';
// import wcBeforeImage from '../../assets/compare-images/wc-before.webp';

// const itemAnimation = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, ease: "easeOut" },
//   viewport: { once: true, amount: 0.1 },
// };

// export default function ServicesWeAreOffering() {
//   console.log({dcBeforeImage});
//   return (
//     <div className="py-16 bg-hy-bg-primary overflow-hidden">
//       <SectionContainer>
//         <BadgeAndHeading
//           heading="Our Comprehensive Exterior Cleaning Services" // Updated heading
//           badgeText="Our Services" // Updated badge text
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//           <motion.div {...itemAnimation}>
//             <ServiceWithImageComparisonCard
//               title="Pressure Washing"
//               imageLeft={pwBeforeImage}
//               imageRight={pwAfterImage}
//               url="/services/pressure-washing"
//             />
//           </motion.div>

//           <motion.div {...itemAnimation}>
//             <ServiceWithImageComparisonCard
//               title="Window Cleaning"
//               imageLeft={wcBeforeImage}
//               imageRight={wcAfterImage}
//               url="/services/window-cleaning"
//             />
//           </motion.div>

//           <motion.div {...itemAnimation}>
//             <ServiceWithImageComparisonCard
//               title="Gutter Cleaning"
//               imageLeft={gcBeforeImage}
//               imageRight={gcAfterImage}
//               url="/services/gutter-cleaning"
//             />
//           </motion.div>

//           <motion.div {...itemAnimation}>
//             <ServiceWithImageComparisonCard
//               title="Roof Soft Wash"
//               imageLeft={rwBeforeImage}
//               imageRight={rwAfterImage}
//               url="/services/roof-soft-wash"
//             />
//           </motion.div>
//           <motion.div {...itemAnimation}>
//             <ServiceWithImageComparisonCard
//               title="Driveway Cleaning"
//               imageLeft='./dc-before.webp'
//               imageRight={dcAfterImage}
//               url="/services/driveway-cleaning"
//             />
//           </motion.div>
//         </div>
//       </SectionContainer>
//     </div>
//   );
// }

import * as motion from "motion/react-client";
import { SectionContainer } from "../section-container";
import BadgeAndHeading from "../shared/badge-heading";
import { ServiceWithImageComparisonCard } from "./service-with-image-comparison";

// Import all the images
import dcAfterImage from "../../assets/compare-images/dc-after.webp";
import dcBeforeImage from "../../assets/compare-images/dc-before.webp";
import gcAfterImage from "../../assets/compare-images/gc-after.webp";
import gcBeforeImage from "../../assets/compare-images/gc-before.webp";
import pwAfterImage from "../../assets/compare-images/pw-after.webp";
import pwBeforeImage from "../../assets/compare-images/pw-before.webp";
import rwAfterImage from "../../assets/compare-images/rw-after.webp";
import rwBeforeImage from "../../assets/compare-images/rw-before.webp";
import wcAfterImage from "../../assets/compare-images/wc-after.webp";
import wcBeforeImage from "../../assets/compare-images/wc-before.webp";

const itemAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.1 },
};

export default function ServicesWeAreOffering() {
  return (
    <div className="py-16 bg-hy-bg-primary overflow-hidden">
      <SectionContainer>
        <BadgeAndHeading
          heading="Our Comprehensive Exterior Cleaning Services"
          badgeText="Our Services"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
  <motion.div {...itemAnimation}>
    <ServiceWithImageComparisonCard
      title="Pressure Washing"
      imageLeft={pwAfterImage.src}   // switched
      imageRight={pwBeforeImage.src} // switched
      url="/services/pressure-washing"
    />
  </motion.div>

  <motion.div {...itemAnimation}>
    <ServiceWithImageComparisonCard
      title="Window Cleaning"
      imageLeft={wcAfterImage.src}   // switched
      imageRight={wcBeforeImage.src} // switched
      url="/services/window-cleaning"
    />
  </motion.div>

  <motion.div {...itemAnimation}>
    <ServiceWithImageComparisonCard
      title="Gutter Cleaning"
      imageLeft={gcAfterImage.src}   // switched
      imageRight={gcBeforeImage.src} // switched
      url="/services/gutter-cleaning"
    />
  </motion.div>

  <motion.div {...itemAnimation}>
    <ServiceWithImageComparisonCard
      title="Roof Soft Wash"
      imageLeft={rwAfterImage.src}   // switched
      imageRight={rwBeforeImage.src} // switched
      url="/services/roof-soft-wash"
    />
  </motion.div>

  <motion.div {...itemAnimation}>
    <ServiceWithImageComparisonCard
      title="Driveway Cleaning"
      imageLeft={dcAfterImage.src}   // switched
      imageRight={dcBeforeImage.src} // switched
      url="/services/driveway-cleaning"
    />
  </motion.div>
</div>

      </SectionContainer>
    </div>
  );
}
