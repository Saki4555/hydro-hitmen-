

import {
  IconWash,
  IconWind,
  IconCloudRain,
  IconHomeShield,
} from "@tabler/icons-react";
import pressureWashingImage from '../assets/services-images/pressure-washing-1.webp'
import windowCleaningImage from '../assets/services-images/window-cleaning-1.webp'
import gutterCleaningImage from '../assets/services-images/gutter-cleaning-1.webp'
import roofSoftWashImage from '../assets/services-images/roof-soft-wash-1.webp'
import driveWayCleaningImage from '../assets/services-images/driveway-cleaning-1.webp'

export const TESTIMONIALS = [
  {
    rating: 5,
    testimonial:
      "Hydro Hitmen did an incredible job pressure washing our entire house and driveway. Everything looks brand new! Highly recommend their meticulous work.",
    name: "Aisha Khan",
    title: "Homeowner, London, UK",
  },
  {
    rating: 5,
    testimonial:
      "Our windows have never been cleaner! Hydro Hitmen's window cleaning service was fast, efficient, and left no streaks. Fantastic attention to detail.",
    name: "Jean-Luc Dubois",
    title: "Resident, Paris, France",
  },
  {
    rating: 5,
    testimonial:
      "After Hydro Hitmen cleaned our gutters, we had no more overflow issues during the heavy rains. They were thorough and professional. A lifesaver!",
    name: "Maria Sanchez",
    title: "Homeowner, Madrid, Spain",
  },
  {
    rating: 5,
    testimonial:
      "The roof soft wash by Hydro Hitmen completely transformed our roof, removing all the ugly moss and stains. It looks amazing and they were so careful not to damage anything.",
    name: "Kenji Tanaka",
    title: "Property Manager, Tokyo, Japan",
  },
  {
    rating: 5,
    testimonial:
      "Our driveway had years of grime, but Hydro Hitmen made it spotless with their cleaning service. It significantly improved our home's curb appeal. Excellent service!",
    name: "Priya Sharma",
    title: "Satisfied Customer, Sydney, Australia",
  },
  {
    rating: 5,
    testimonial:
      "From pressure washing to window cleaning, Hydro Hitmen handled it all with top-tier professionalism. My home looks immaculate. Will definitely be a repeat customer.",
    name: "Marcus Ndlovu",
    title: "Homeowner, Cape Town, South Africa",
  },
  {
    rating: 5,
    testimonial:
      "The team was prompt and very polite. They did a fantastic job on our roof and gutters. It's clear they know what they're doing. Very happy with the results.",
    name: "Sofia Rossi",
    title: "Local Resident, Rome, Italy",
  },
  {
    rating: 5,
    testimonial:
      "Exceptional results on our full exterior wash. Hydro Hitmen truly handles the dirty work and leaves your home sparkling. Their service is worth every penny.",
    name: "Carlos Mendes",
    title: "Small Business Owner, Rio de Janeiro, Brazil",
  },
];

export const FAQs = [
  {
    value: "services-offered",
    title: "What services does Hydro Hitmen offer?",
    content:
      "Hydro Hitmen specializes in comprehensive exterior home services, including pressure washing, window cleaning, gutter cleaning, roof soft washing, and driveway cleaning. We're your one-stop shop for a sparkling clean home exterior!",
  },
  {
    value: "pressure-washing-benefits",
    title: "What are the benefits of professional pressure washing?",
    content:
      "Professional pressure washing removes stubborn dirt, grime, mold, mildew, and other contaminants, protecting your home's surfaces, improving curb appeal, and potentially increasing property value. It also helps prevent premature deterioration of your exterior.",
  },
  {
    value: "soft-wash-roof",
    title: "What is roof soft washing and why is it important?",
    content:
      "Roof soft washing uses a low-pressure wash with specialized cleaning solutions to safely and effectively remove algae, moss, lichen, and dirt from your roof. Unlike high-pressure washing, it won't damage your shingles, extending the life of your roof and maintaining its appearance.",
  },
  {
    value: "window-cleaning-frequency",
    title: "How often should I have my windows cleaned?",
    content:
      "For optimal clarity and to prevent hard water stains, we generally recommend professional window cleaning every 3-6 months. However, this can vary based on your location, environmental factors, and personal preference.",
  },
  {
    value: "gutter-cleaning-necessity",
    title: "Why is regular gutter cleaning important?",
    content:
      "Regular gutter cleaning prevents blockages that can lead to water overflow, foundation damage, basement flooding, and costly repairs. It ensures proper water drainage away from your home, protecting its structural integrity.",
  },
  {
    value: "driveway-cleaning",
    title: "Can you remove oil stains and other tough marks from my driveway?",
    content:
      "Yes! Our driveway cleaning service uses specialized techniques and solutions to effectively tackle a variety of tough stains, including oil, rust, tire marks, and general grime, leaving your driveway looking fresh and clean.",
  },
  {
    value: "free-estimate",
    title: "Do you offer free estimates?",
    content:
      "Absolutely! We offer free, no-obligation estimates for all our services. Simply contact us to schedule a convenient time for one of our experts to assess your needs.",
  },
  {
    value: "insured-bonded",
    title: "Are you insured and bonded?",
    content:
      "Yes, Hydro Hitmen is fully insured and bonded for your peace of mind. We prioritize safety and professionalism in all our operations.",
  },
];

export const SERVICES = [
  {
    name: "Pressure Washing",
    id: "pressure-washing",
    description: "Deep clean and restore the brilliance of your driveways, patios, siding, and other hard surfaces.",
    image:
     pressureWashingImage,
    icon: IconWash,
    className: "md:col-span-2",
    url: "/services/pressure-washing",
  },
  {
    name: "Window Cleaning",
    id: "window-cleaning",
    description: "Achieve streak-free, crystal-clear windows that enhance your home's curb appeal and natural light.",
    image:
      windowCleaningImage,
    icon: IconWind,
    className: "md:col-span-1",
    url: "/services/window-cleaning",
  },
  {
    name: "Gutter Cleaning",
    id: "gutter-cleaning",
    description: "Ensure proper drainage and prevent costly water damage with our thorough and safe gutter cleaning services.",
    image:
      gutterCleaningImage,
    icon: IconCloudRain,
    className: "md:col-span-1",
    url: "/services/gutter-cleaning",
  },
  {
    name: "Roof Soft Washing",
    id: "roof-soft-wash",
    description: "Safely remove algae, moss, and stains from your roof using gentle, low-pressure techniques to extend its life.",
    image:
      roofSoftWashImage,
    icon: IconHomeShield,
    className: "md:col-span-2",
    url: "/services/roof-soft-wash",
  },
  {
    name: "Driveway Cleaning",
    id: "driveway-cleaning",
    description: "Restore your driveway's original look by removing oil stains, dirt, and grime with professional cleaning.",
    image:
    driveWayCleaningImage,
    icon: IconWash,
    className: "md:col-span-2",
    url: "/services/driveway-cleaning",
  },
];



export const PRESSURE_WASHING_DATA = {
  title: "Professional Pressure Washing Services",
  description: `Pressure washing is a highly effective method for deep cleaning and restoring the appearance of various exterior surfaces. At Hydro Hitmen, we utilize advanced, high-pressure equipment combined with eco-friendly cleaning solutions to meticulously remove stubborn dirt, grime, mold, mildew, algae, and other contaminants. This process not only dramatically enhances your property's curb appeal but also helps to prevent premature deterioration, extending the lifespan of your surfaces.

Our comprehensive pressure washing services are ideal for driveways, sidewalks, patios, decks, fences, and the exterior siding of your home. We adjust our pressure and cleaning agents based on the specific material and condition of the surface, ensuring a powerful yet safe clean. Trust Hydro Hitmen to revitalize your outdoor spaces, leaving them looking immaculate and well-maintained.`,
  faqs: [
    {
      value: "pressure-wash-surfaces",
      title: "What surfaces can be pressure washed?",
      content:
        "We safely pressure wash a variety of surfaces including concrete driveways and sidewalks, brick patios, wooden decks and fences, vinyl and brick siding, and more. Our technicians assess each surface to determine the appropriate pressure and cleaning solution.",
    },
    {
      value: "pressure-wash-safety",
      title: "Is pressure washing safe for all surfaces?",
      content:
        "While powerful, our pressure washing techniques are tailored to each surface. For delicate materials like certain types of siding or painted surfaces, we may recommend a gentler soft washing approach to ensure no damage occurs.",
    },
    {
      value: "pressure-wash-frequency",
      title: "How often should I pressure wash my property?",
      content:
        "The frequency depends on your local climate, environmental factors, and the amount of foot traffic. Generally, we recommend pressure washing your home's exterior surfaces annually or bi-annually to maintain their appearance and prevent buildup.",
    },
    {
      value: "pressure-wash-whats-included",
      title: "What's included in your pressure washing service?",
      content:
        "Our service includes pre-treatment of surfaces, professional pressure washing using appropriate equipment and solutions, and a thorough rinse. We also take precautions to protect surrounding landscaping and property.",
    },
  ],
};

export const WINDOW_CLEANING_DATA = {
  title: "Crystal-Clear Window Cleaning",
  description: `Achieving truly sparkling, streak-free windows requires professional expertise and specialized techniques. Hydro Hitmen offers comprehensive window cleaning services for both residential and commercial properties, ensuring your views are unobstructed and your property shines.

Our skilled team uses professional-grade tools and eco-friendly cleaning solutions to meticulously clean glass surfaces, frames, and sills. We effectively remove dirt, dust, pollen, water spots, and other residues, leaving your windows spotless. Regular professional window cleaning not only enhances your home's aesthetic appeal and natural light but also helps to preserve the integrity of your glass by preventing mineral buildup and etching. Experience the clarity that only Hydro Hitmen can provide.`,
  faqs: [
    {
      value: "window-clean-interior-exterior",
      title: "Do you clean both interior and exterior windows?",
      content:
        "Yes, our comprehensive window cleaning service includes both interior and exterior window surfaces, as well as cleaning of frames and sills, to ensure a complete and spotless finish.",
    },
    {
      value: "window-clean-streak-free",
      title: "How do you ensure streak-free results?",
      content:
        "We use professional-grade squeegees, purified water systems, and specialized cleaning solutions that leave no residue, ensuring a perfectly clear and streak-free finish every time.",
    },
    {
      value: "window-clean-hard-water",
      title: "Can you remove hard water stains from windows?",
      content:
        "Yes, we have specialized techniques and solutions designed to safely and effectively remove most hard water stains, mineral deposits, and oxidation from glass surfaces.",
    },
    {
      value: "window-clean-frequency",
      title: "How often should windows be professionally cleaned?",
      content:
        "For optimal appearance and glass longevity, we recommend professional window cleaning every 3-6 months. However, this can vary based on your environment and personal preferences.",
    },
  ],
};

export const GUTTER_CLEANING_DATA = {
  title: "Essential Gutter Cleaning & Maintenance",
  description: `Gutters play a crucial role in protecting your home's foundation, landscaping, and exterior from water damage. When clogged with leaves, debris, and shingle grit, they can lead to costly issues such as overflowing water, fascia rot, foundation cracks, and even basement flooding.

Hydro Hitmen provides thorough and safe gutter cleaning services designed to keep your drainage system functioning optimally. Our team meticulously removes all blockages by hand and with specialized equipment, ensuring clear pathways for rainwater. We also flush your downspouts to confirm proper flow and can identify any potential issues or damage. Regular gutter maintenance by Hydro Hitmen is an essential investment in the long-term health and integrity of your property.`,
  faqs: [
    {
      value: "gutter-clean-importance",
      title: "Why is regular gutter cleaning important?",
      content:
        "Regular gutter cleaning prevents water overflow, which can lead to foundation damage, basement flooding, fascia rot, and landscape erosion. It ensures proper water diversion away from your home.",
    },
    {
      value: "gutter-clean-frequency",
      title: "How often should my gutters be cleaned?",
      content:
        "We generally recommend cleaning gutters at least twice a year, typically in late spring and late fall. Properties with many trees nearby may require more frequent cleaning.",
    },
    {
      value: "gutter-clean-clogged",
      title: "What if my gutters are severely clogged?",
      content:
        "Our team is equipped to handle even severely clogged gutters. We will thoroughly remove all debris and flush the system to ensure it's completely clear and functioning correctly.",
    },
    {
      value: "gutter-clean-inspection",
      title: "Do you inspect gutters for damage during cleaning?",
      content:
        "Yes, as part of our service, our technicians will visually inspect your gutters and downspouts for any signs of damage, leaks, or loose sections and can inform you of any issues found.",
    },
  ],
};

export const ROOF_SOFT_WASH_DATA = {
  title: "Gentle & Effective Roof Soft Washing",
  description: `Your roof is constantly exposed to the elements, leading to the buildup of unsightly and damaging contaminants like algae (Gloeocapsa magma), moss, lichen, and black streaks. While traditional pressure washing can damage delicate shingles, Hydro Hitmen specializes in professional roof soft washing.

This gentle yet highly effective method uses a low-pressure application of specialized, biodegradable cleaning solutions that safely break down and eliminate these organic growths. Soft washing not only restores your roof's original color and beauty but also extends its lifespan by preventing deterioration caused by these organisms. Protect your investment and enhance your home's appearance with Hydro Hitmen's expert roof soft washing.`,
  faqs: [
    {
      value: "soft-wash-vs-pressure-wash",
      title: "What is soft washing, and how is it different from pressure washing?",
      content:
        "Soft washing uses low-pressure water combined with specialized cleaning solutions to gently clean surfaces. Unlike high-pressure washing, it's ideal for delicate areas like roofs, ensuring no damage to shingles or other materials.",
    },
    {
      value: "soft-wash-roof-types",
      title: "Is soft washing safe for all roof types?",
      content:
        "Yes, soft washing is safe for asphalt shingles, tile roofs, metal roofs, and other common roofing materials. It effectively removes organic growth without the risk of dislodging granules or damaging the surface.",
    },
    {
      value: "soft-wash-results-duration",
      title: "How long do the roof soft washing results last?",
      content:
        "Results typically last for several years, depending on environmental factors and the type of organic growth. The cleaning solutions inhibit regrowth, providing a longer-lasting clean compared to pressure washing.",
    },
    {
      value: "soft-wash-landscaping",
      title: "Will soft washing damage my landscaping?",
      content:
        "Our technicians take extensive precautions to protect your landscaping. This includes pre-wetting plants, covering sensitive areas, and rinsing foliage thoroughly to neutralize any overspray from cleaning solutions.",
    },
  ],
};

export const DRIVEWAY_CLEANING_DATA = {
  title: "Driveway & Concrete Surface Cleaning",
  description: `Your driveway is often the first impression visitors have of your home, but it's also highly susceptible to accumulating dirt, oil stains, tire marks, rust, and grime. Over time, these can make your property look neglected and even create slippery hazards.

Hydro Hitmen provides professional driveway and concrete surface cleaning services that restore these areas to their original, pristine condition. We use powerful pressure washing techniques combined with targeted cleaning solutions to break down and eliminate even the toughest stains. Our meticulous process ensures a uniform clean, enhancing your home's curb appeal and improving safety. Let Hydro Hitmen revitalize your driveway, making it a welcoming and clean entrance to your property.`,
  faqs: [
    {
      value: "driveway-stain-removal",
      title: "Can you remove tough stains like oil and rust from my driveway?",
      content:
        "Yes, we use specialized pre-treatment solutions and targeted pressure washing techniques to effectively break down and remove most oil stains, rust marks, tire scuffs, and other stubborn contaminants.",
    },
    {
      value: "driveway-cleaning-time",
      title: "How long does driveway cleaning typically take?",
      content:
        "The duration depends on the size of your driveway and the extent of the staining. Most residential driveway cleaning projects can be completed within a few hours.",
    },
    {
      value: "driveway-landscaping-safety",
      title: "Will the driveway cleaning process harm my landscaping?",
      content:
        "We take great care to protect your surrounding landscaping. We pre-wet plants and use controlled spraying techniques to minimize any impact on nearby vegetation.",
    },
    {
      value: "driveway-sealing",
      title: "Do you offer driveway sealing after cleaning?",
      content:
        "While our primary service is cleaning, we can discuss options for driveway sealing upon request. Sealing helps protect your newly cleaned surface and prolong its pristine condition.",
    },
  ],
};

