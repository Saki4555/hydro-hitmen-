
import * as motion from "motion/react-client";
import { Card } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";

export default function MapSection() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4187!2d-75.1196!3d39.9526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU3JzA5LjQiTiA3NcKwMDcnMTAuNSJX!5e0!3m2!1sen!2sus!4v1635959854796!5m2!1sen!2sus";

  return (
    <div className="h-full">
      {/* Map Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-hy-accent-primary/10">
            <MapPin className="w-6 h-6 text-hy-accent-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Visit Our Location</h3>
            <p className="text-gray-600">Find us on the map</p>
          </div>
        </div>
      </motion.div>

      {/* Map Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="group"
      >
        <Card className="overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:border-blue-200">
          <div className="relative">
            {/* Map Iframe */}
            <iframe
              src={mapUrl}
              width="100%"
              height="500"
              style={{ 
                border: 0,
                
                transition: 'all 0.3s ease'
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[500px] group-hover:filter-none transition-all duration-500"
              title="Our Location"
            />
            
            {/* Overlay for interactivity hint */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            {/* Location Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-hy-accent-primary" />
                <span className="text-sm font-medium text-gray-900">354 Oakridge Camden</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">NJ 08102 - USA</p>
            </motion.div>
          </div>
        </Card>
      </motion.div>

      {/* Additional Location Info */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Service Area</h4>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Camden & Surrounding Areas</p>
            <p>15+ Mile Radius</p>
            <p>Emergency Services Available</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}