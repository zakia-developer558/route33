import { cn } from "@/lib/utils"
import grid from '../../assets/landing-page/image1.svg'

export default function HeroSection() {
  return (
    <section className={cn(
      "relative h-[500px] w-full bg-gradient-to-br from-[#CCE6FF] via-[#CCE6FF] to-[#CCE6FF] overflow-hidden flex items-center"
    )}>
      {/* Main content container */}
      <div className="container  px-4  flex items-center">
        {/* Grid layout for left and right sections */}
        <div className="w-full flex flex-col md:flex-row items-center">
          {/* Left side - text content */}
          <div className="w-full md:w-1/2 pr-0 md:pr-10 flex flex-col justify-center space-y-4 pl-20">
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1]",
              "scroll-m-20 tracking-tight"
            )}>
              Build the Future
              <br />
              with Route 33
            </h1>
            <div className="space-y-1 text-gray-600 text-base md:text-lg">
              <p className="leading-7">We don't just build agents.</p>
              <p className="leading-7">We launch AI-native businesses.</p>
            </div>
          </div>

          {/* Right side - image with overlapping text */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center h-full">
            <div className="relative h-full w-full flex justify-center -ml-15">
              <img
                src={grid}
                alt="Hero Section Image"
                className="h-full max-h-[350px] w-auto object-contain"
              />
              <p className={cn(
  "absolute bottom-8 left-1/2 transform -translate-x-1/3",  // Changed from bottom-4 to bottom-8
  "text-xl md:text-2xl font-bold text-[#111184] whitespace-nowrap",
  "leading-38 px-4 py-2"
)}>
                Powered by Brookfield Assets Group
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg viewBox="0 0 1440 60" className="w-full h-auto">
          <path
            d="M0,30 C360,45 720,45 1080,30 C1260,20 1350,20 1440,30 L1440,60 L0,60 Z"
            fill="white"
            fillOpacity="0.6"
          />
          <path
            d="M0,35 C360,50 720,50 1080,35 C1260,25 1350,25 1440,35 L1440,60 L0,60 Z"
            fill="white"
            fillOpacity="0.3"
          />
        </svg>
      </div>
    </section>
  )
}