import { cn } from "@/lib/utils";

const services = [
  { name: "Pressure Washing", id: "pressure-washing" },
  { name: "Window cleaning", id: "window-cleaning" },
  { name: "Gutter Cleaning", id: "gutter-cleaning" },
  { name: "Roof Soft Wash", id: "roof-soft-wash" },
];

const ImageWithCategory = ({ activeService }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Hero Image */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-none shadow-md shadow-hy-accent-secondary/20">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Professional cleaning service in action"
            className="w-full h-72 sm:h-80 lg:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hy-accent-primary/10 to-hy-accent-secondary/5"></div>
        </div>
      </div>
      {/* Services Navigation */}
      <div className="bg-hy-bg-secondary border border-hy-border rounded-none p-8 lg:p-10 ">
        <div className="space-y-4">
          {services.map((service, index) => (
            // <div
            //   key={service.id}
            //   className="group flex items-center justify-between py-4 px-6 bg-hy-bg-primary rounded-xl border border-hy-border hover:border-hy-border-accent transition-all duration-300 hover:shadow-sm cursor-pointer"
            // >
            //   <span className="text-hy-text-primary font-medium text-lg group-hover:text-hy-accent-primary transition-colors duration-300">
            //     {service.name}
            //   </span>
            //   <svg
            //     className="w-5 h-5 text-hy-accent-primary group-hover:translate-x-1 transition-transform duration-300"
            //     fill="none"
            //     stroke="currentColor"
            //     viewBox="0 0 24 24"
            //   >
            //     <path
            //       strokeLinecap="round"
            //       strokeLinejoin="round"
            //       strokeWidth={2}
            //       d="M9 5l7 7-7 7"
            //     />
            //   </svg>
            // </div>
            <div
              key={service.id}
              className={cn(
                "group flex items-center justify-between py-4 px-6 rounded-xl transition-all duration-300 cursor-pointer",
                service.id === activeService
                  ? "bg-hy-accent-primary/10 border border-hy-border-accent shadow-sm"
                  : "bg-hy-bg-primary border border-hy-border hover:border-hy-border-accent hover:shadow-sm"
              )}
            >
              <span
                className={cn(
                  "font-medium text-lg transition-colors duration-300",
                  service.id === activeService
                    ? "text-hy-accent-primary"
                    : "text-hy-text-primary group-hover:text-hy-accent-primary"
                )}
              >
                {service.name}
              </span>
              <svg
                className={cn(
                  "w-5 h-5 transition-transform duration-300",
                  service.id === activeService
                    ? "text-hy-accent-primary"
                    : "text-hy-accent-primary group-hover:translate-x-1"
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageWithCategory;
