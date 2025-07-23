import Link from "next/link";
import * as motion from "motion/react-client";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconChevronRight
} from "@tabler/icons-react";

// Data
const services = [
  { name: "Pressure Washing", href: "/services/pressure-washing" },
  { name: "Window Cleaning", href: "/services/window-cleaning" },
  { name: "Gutter Cleaning", href: "/services/gutter-cleaning" }, // Changed "Gutter Wash" to "Gutter Cleaning" for consistency
  { name: "Roof Soft Washing", href: "/services/roof-soft-wash" }, // Changed "Roof Soft Wash" to "Roof Soft Washing"
  { name: "Driveway Cleaning", href: "/services/driveway-cleaning" }, // Added the fifth service
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" }, // Changed "About" to "About Us"
  { name: "Services", href: "/services" }, // Capitalized "services"
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" }, // Changed "Contact" to "Contact Us"
];

// Animation Variants - No changes needed here, they are for motion
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Footer Component
const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="bg-cyan-900 text-white pt-12 pb-6"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-3 text-white">HYDRO HITMEN</h2> {/* Capitalized for brand consistency */}
          <p className="text-base leading-relaxed mb-4 text-white/80">
            Dedicated to restoring your property&apos;s brilliance with eco-friendly solutions and a commitment to unparalleled customer satisfaction.
          </p>
          <div className="flex gap-3">
            {/* Replace with actual social media links if available, or keep as placeholders */}
            <a href="https://facebook.com/hydrohitmen" target="_blank" rel="noopener noreferrer"><IconBrandFacebook size={22} /></a>
            <a href="https://twitter.com/hydrohitmen" target="_blank" rel="noopener noreferrer"><IconBrandTwitter size={22} /></a>
            <a href="https://linkedin.com/company/hydrohitmen" target="_blank" rel="noopener noreferrer"><IconBrandLinkedin size={22} /></a>
            <a href="https://instagram.com/hydrohitmen" target="_blank" rel="noopener noreferrer"><IconBrandInstagram size={22} /></a>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-medium mb-3 text-white">Our Services</h3> {/* Changed to "Our Services" */}
          <ul className="space-y-2 text-base">
            {services.map((service) => (
              <li key={service.name} className="flex items-center gap-2">
                <IconChevronRight size={16} className="text-cyan-300" />
                <Link href={service.href} className="hover:underline">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-medium mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-base">
            {quickLinks.map((link) => (
              <li key={link.name} className="flex items-center gap-2">
                <IconChevronRight size={16} className="text-cyan-300" />
                <Link href={link.href} className="hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-medium mb-3 text-white">Contact Us</h3> {/* Changed to "Contact Us" */}
          <ul className="space-y-3 text-base">
            <li className="flex items-start gap-3">
              <IconMapPin size={18} className="mt-1 text-cyan-300" />
              {/* This address should be a real US address for the business */}
              <a
                href="https://www.google.com/maps/search/3060+Commercial+Street+Road" // Updated link for a generic search
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                3060 Commercial Street Road<br />
                Houston, TX 77002, USA {/* Example US Address */}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IconPhone size={18} className="text-cyan-300" />
              {/* This phone number should be a real US phone number */}
              <a href="tel:+13468319188" className="hover:underline">+1 (346) 831-9188</a> {/* Example US number from previous context */}
            </li>
            <li className="flex items-center gap-3">
              <IconMail size={18} className="text-cyan-300" />
              {/* This email should be a real business email */}
              <a href="mailto:info@hydrohitmen.com" className="hover:underline">info@hydrohitmen.com</a> {/* Professional email */}
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        variants={itemVariants}
        className="text-center mt-10 text-sm text-white/70 border-t border-white/10 pt-4"
      >
        © {new Date().getFullYear()} HYDROHITMEN. All Rights Reserved. {/* Updated company name and dynamic year */}
      </motion.div>
    </motion.footer>
  );
};

export default Footer;