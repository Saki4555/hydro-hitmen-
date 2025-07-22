'use client';

import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Form submitted:", formData);

    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Card className="bg-hy-bg-secondary border border-hy-border shadow-sm hover:shadow-lg transition-all duration-300">
      <CardContent className="p-8">
        {/* Header */}
        <div className="mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{once: true, amount: 0.1}}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium text-hy-accent-primary uppercase tracking-wide mb-2"
          >
            Contact Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once: true, amount: 0.1}}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-hy-text-primary"
          >
            Send Message
          </motion.h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{once: true, amount: 0.1}}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <Label htmlFor="name" className="text-sm font-medium text-hy-text-primary flex items-center gap-2">
                <User className="w-4 h-4 text-hy-text-secondary" />
                Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Your full name"
                className="bg-hy-input-bg text-hy-input-text placeholder:text-hy-input-placeholder border border-hy-input-border focus-visible:ring-2 focus-visible:ring-hy-input-focus-ring"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{once: true, amount: 0.1}}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <Label htmlFor="email" className="text-sm font-medium text-hy-text-primary flex items-center gap-2">
                <Mail className="w-4 h-4 text-hy-text-secondary" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@example.com"
                className="bg-hy-input-bg text-hy-input-text placeholder:text-hy-input-placeholder border border-hy-input-border focus-visible:ring-2 focus-visible:ring-hy-input-focus-ring"
                required
              />
            </motion.div>
          </div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once: true, amount: 0.1}}
            transition={{ delay: 0.6 }}
            className="space-y-2"
          >
            <Label htmlFor="phone" className="text-sm font-medium text-hy-text-primary flex items-center gap-2">
              <Phone className="w-4 h-4 text-hy-text-secondary" />
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="(555) 123-4567"
              className="bg-hy-input-bg text-hy-input-text placeholder:text-hy-input-placeholder border border-hy-input-border focus-visible:ring-2 focus-visible:ring-hy-input-focus-ring"
            />
          </motion.div>

          {/* Subject */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once: true, amount: 0.1}}
            transition={{ delay: 0.7 }}
            className="space-y-2"
          >
            <Label className="text-sm font-medium text-hy-text-primary">Subject</Label>
            <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
              <SelectTrigger className="bg-hy-input-bg text-hy-input-text placeholder:text-hy-input-placeholder border border-hy-input-border focus-visible:ring-2 focus-visible:ring-hy-input-focus-ring w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pressure-washing">Pressure Washing</SelectItem>
                <SelectItem value="roof-cleaning">Roof Cleaning</SelectItem>
                <SelectItem value="gutter-cleaning">Gutter Cleaning</SelectItem>
                <SelectItem value="window-cleaning">Window Cleaning</SelectItem>
                <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                <SelectItem value="quote-request">Quote Request</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once: true, amount: 0.1}}
            transition={{ delay: 0.8 }}
            className="space-y-2"
          >
            <Label htmlFor="message" className="text-sm font-medium text-hy-text-primary flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-hy-text-secondary" />
              Message
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Tell us about your project and any specific requirements..."
              className="min-h-32 resize-none bg-hy-input-bg text-hy-input-text placeholder:text-hy-input-placeholder border border-hy-input-border focus-visible:ring-2 focus-visible:ring-hy-input-focus-ring"
              required
            />
          </motion.div>

          {/* Submit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once: true, amount: 0.1}}
            transition={{ delay: 0.9 }}
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-hy-accent-primary hover:bg-hy-accent-secondary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:transform-none disabled:hover:bg-hy-accent-primary group"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending Message...
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  Submit Now
                  <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              )}
            </Button>
          </motion.div>
        </form>
      </CardContent>
    </Card>
  );
}
