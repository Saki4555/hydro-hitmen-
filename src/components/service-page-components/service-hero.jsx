




import Image from "next/image";
import Link from "next/link";

export default function ServiceHero() {

 
 


  return (
   <div className="relative h-[60vh] lg:h-screen w-full overflow-hidden">
      {/* Background Image */}
    <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-slate-900/80" />
          </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full">
        
        {/* Main Content - Centered */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-wide mb-8">
              Services
            </h1>
          </div>
        </div>

        {/* Breadcrumb - Bottom Left */}
        <div className="absolute bottom-8 left-8 bg-hy-accent-primary rounded-br-xl rounded-tl-xl">
          <div className="flex items-center space-x-2 text-white  px-4 py-2 ">
            <div className="">
              <Link href='/' className="text-sm ">Home</Link>
            </div>
            <span className=" text-sm">/</span>
            <span className="text-sm font-medium">Services</span>
          </div>
        </div>
      </div>
    </div>
  );
}
