import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

import React from "react";

const BadgeAndHeading = ({ heading, badgeText, className }) => {
  return (
    <div className={cn("mb-8  max-w-3xl ", className)}>
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 border border-cyan-200 text-cyan-700 rounded-full mb-1">
        <Sparkles className="w-4 h-4 text-cyan-500" />
        <span className="font-medium text-sm tracking-wide">{badgeText}</span>
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hy-accent-primary leading-tight mb-6">
        {heading}
      </h2>
    </div>
  );
};

export default BadgeAndHeading;
