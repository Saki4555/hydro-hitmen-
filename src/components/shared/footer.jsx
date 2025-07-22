
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
  { name: "Gutter Wash", href: "/services/gutter-wash" },
  { name: "Roof Soft Wash", href: "/services/roof-soft-wash" },
 
];

const quickLinks = [
   { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "services", href: "/services" },
 
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

// Animation Variants
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
          <h2 className="text-2xl font-semibold mb-3 text-white">HYDROHITMEN</h2>
          <p className="text-base leading-relaxed mb-4 text-white/80">
            We use natural and eco-friendly cleaning products and have a customer satisfaction guarantee.
          </p>
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><IconBrandFacebook size={22} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><IconBrandTwitter size={22} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><IconBrandLinkedin size={22} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><IconBrandInstagram size={22} /></a>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-medium mb-3 text-white">Services</h3>
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
          <h3 className="text-xl font-medium mb-3 text-white">Official Info</h3>
          <ul className="space-y-3 text-base">
            <li className="flex items-start gap-3">
              <IconMapPin size={18} className="mt-1 text-cyan-300" />
              <a
                href="https://maps.google.com?q=3060+Commercial+Street+Road,+Fratton,+Australia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                3060 Commercial Street Road<br />
                Fratton, Australia
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IconPhone size={18} className="text-cyan-300" />
              <a href="tel:+81789574555" className="hover:underline">+817 895 74555</a>
            </li>
            <li className="flex items-center gap-3">
              <IconMail size={18} className="text-cyan-300" />
              <a href="mailto:help247@cleanin.com" className="hover:underline">help247@cleanin.com</a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        variants={itemVariants}
        className="text-center mt-10 text-sm text-white/70 border-t border-white/10 pt-4"
      >
        &copy; 2025 Cleanin. All Rights Reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
