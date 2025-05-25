import { cn } from "@/lib/utils"

export default function VisionSection() {
  return (
    <section className={cn(
      "bg-white py-20 px-4",
      "w-full"
    )}>

      <div className={cn(
        "max-w-4xl mx-auto text-center",
        "space-y-4" // replaces individual margins
      )}>
        {/* Main heading */}
<h2 className={cn(
  "text-3xl md:text-3xl font-extrabold text-black-900",
  "scroll-m-20 tracking-tight -mb-2"
)}>
  From Vision to Deployment
</h2>

{/* Subheading */}
<h2 className={cn(
  "text-3xl md:text-3xl font-extrabold text-gray-900",
  "leading-relaxed",
  "scroll-m-20" 
)}>
  We don't just imagine AI-powered futures—we build them.
</h2>

        {/* Description paragraph */}
        <p className={cn(
          "text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto",
          "text-muted-foreground" // shadcn color variable
        )}>
          At Route 33, cutting-edge research meets real-world engineering to create agents that ship fast, scale
          effortlessly, and actually work in production.
        </p>
      </div>
    </section>
  )
}