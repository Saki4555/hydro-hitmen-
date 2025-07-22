

import * as motion from "motion/react-client";
import { SectionContainer } from "../section-container";
import BadgeAndHeading from "../shared/badge-heading";
import { ServiceWithImageComparisonCard } from "./service-with-image-comparison";

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
          heading="Services We&rsquo;re Offering"
          badgeText="A Little Introduction"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div {...itemAnimation}>
            <ServiceWithImageComparisonCard
              title="Pressure Washing"
              imageLeft="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              imageRight="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              url="/services/pressure-washing"
            />
          </motion.div>

          <motion.div {...itemAnimation}>
            <ServiceWithImageComparisonCard
              title="Window Cleaning"
              imageLeft="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              imageRight="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              url="/services/window-cleaning"
            />
          </motion.div>

          <motion.div {...itemAnimation}>
            <ServiceWithImageComparisonCard
              title="Gutter Cleaning"
              imageLeft="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              imageRight="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              url="/services/gutter-cleaning"
            />
          </motion.div>

          <motion.div {...itemAnimation}>
            <ServiceWithImageComparisonCard
              title="Roof Soft Wash"
              imageLeft="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              imageRight="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              url="/services/roof-soft-wash"
            />
          </motion.div>
        </div>
      </SectionContainer>
    </div>
  );
}
