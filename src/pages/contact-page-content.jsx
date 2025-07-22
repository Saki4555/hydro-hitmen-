import * as motion from "motion/react-client";

import { Mail, Phone, MapPin } from "lucide-react";
import ContactInfoCard from "@/components/contact-page-components/contact-info-card";
import ContactForm from "@/components/contact-page-components/contact-form";
import MapSection from "@/components/contact-page-components/contact-map";
import { SectionContainer } from "@/components/section-container";
import BadgeAndHeading from "@/components/shared/badge-heading";
import ContactHero from "@/components/contact-page-components/contact-hero";

export default function ContactPageContent() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      items: ["example@gmail.com", "example@gmail.com"],
    },
    {
      icon: Phone,
      title: "Phone Number",
      items: ["+910 995 74555", "+910 995 74555"],
    },
    {
      icon: MapPin,
      title: "Our Location",
      items: ["354 Oakridge Camden", "NJ 08102 - USA"],
    },
  ];

  return (
    <div className="min-h-screen bg-hy-bg-primary overflow-hidden">
      <ContactHero />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-teal-500/5" />
        <SectionContainer className="py-16">
          <div className="">
            <BadgeAndHeading heading="Get In Touch" badgeText="HYDROHITMEN CONTACT" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-gray-600 max-w-2xl"
            >
              Ready to transform your property? Contact us today for
              professional cleaning services
            </motion.p>
          </div>
        </SectionContainer>
      </motion.div>

      <SectionContainer className="pb-20">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 -mt-8"
          >
            {contactInfo.map((info, index) => (
              <ContactInfoCard
                key={index}
                {...info}
                delay={0.5 + index * 0.1}
              />
            ))}
          </motion.div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <MapSection />
            </motion.div>
          </div>
        
      </SectionContainer>
    </div>
  );
}
