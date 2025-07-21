import { cn } from "@/lib/utils";
import { Button } from "./button";
import Link from "next/link";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, header, icon, url }) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-hy-border bg-hy-bg-secondary p-4 shadow-input transition duration-200 hover:shadow-xl",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-hy-text-primary">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-hy-text-secondary mb-4">
          {description}
        </div>
        <Button
          variant="outline"
          asChild
          className="border-hy-border text-hy-text-primary hover:bg-hy-accent-primary hover:text-white"
        >
          <Link href={url}>Details</Link>
          
        </Button>
      </div>
    </div>
  );
};

