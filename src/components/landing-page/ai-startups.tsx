import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import icon1 from '../../assets/landing-page/Icon1.svg'
import icon2 from '../../assets/landing-page/Icon2.svg'
import icon3 from '../../assets/landing-page/Icon3.svg'
import icon4 from '../../assets/landing-page/Icon4.svg'
import icon5 from '../../assets/landing-page/Icon5.svg'
import icon6 from '../../assets/landing-page/Icon6.svg'
import icon7 from '../../assets/landing-page/Icon7.svg'
import icon8 from '../../assets/landing-page/Icon8.svg'
import icon9 from '../../assets/landing-page/Icon9.svg'
import icon10 from '../../assets/landing-page/Icon10.svg'
import icon11 from '../../assets/landing-page/Icon11.svg'
import icon12 from '../../assets/landing-page/Icon12.svg'

export default function ServicesGrid() {
  const services = [
    {
      icon: icon1, // Replace with your actual image paths
      title: "Full-stack AI Companies",
      description: "Don't just sell AI solutions to existing firms—create your own AI-powered enterprise. For instance, instead of offering AI tools to law firms, establish an AI-driven law firm that competes directly with traditional ones.",
    },
    {
      icon:icon2,
      title: "Design-led Startups",
      description: "In an era where coding is becoming commoditized, design is your competitive edge. We support product-minded founders in building swiftly without the need to code every component.",
    },
    {
      icon: icon3,
      title: "Voice AI Platforms",
      description: "With over a trillion business-to-customer calls annually, voice-first agents represent a $100B+ opportunity. We assist you in capturing this market by developing advanced voice AI bots that are nearly indistinguishable from humans.",
    },
    {
      icon: icon4,
      title: "Scientific AI",
      description: "Traditional software tools in fields like chemistry and materials science have remained unchanged for decades. We partner with frontier teams leveraging AI and test-time compute to revolutionize these scientific domains.",
    },
    {
      icon: icon5,
      title: "Real AI Assistants",
      description: 'Move beyond mere dashboards. We help you build agents that understand tasks, make decisions, and execute them—turning "to-do" lists into "done" lists.',
    },
    {
      icon:icon6,
      title: "Healthcare Admin Automation",
      description: "With $1 trillion wasted on administrative tasks in healthcare, our AI agents streamline processes by overhauling systems, parsing documents, and acting on data efficiently.",
    },
    {
      icon: icon7,
      title: "Education Reinventors",
      description: "Multimodal AI makes personalized tutoring a reality. We assist in building platforms that adapt to each learner's needs, transforming the educational experience.",
    },
    {
      icon: icon8,
      title: "Robotics Infrastructure",
      description: 'The "ChatGPT moment" is approaching for robotics. We guide you in developing the foundational tools and infrastructure to lead this transformation.',
    },
    {
      icon: icon9,
      title: "Home Security Reinvented",
      description: "While AI has transformed commercial surveillance, the $20B residential market is next. We help you innovate in bringing AI-driven security solutions to homes.",
    },
    {
      icon: icon10,
      title: "Internal Agent Tooling",
      description: "Empower every employee with their own AI agent. We assist in building the infrastructure that enables teams to create and deploy custom AI solutions internally.",
    },
    {
      icon: icon11,
      title: "Voice-First Email Assistants",
      description: "Achieve inbox zero effortlessly. We support the development of voice-first email management tools that handle your communications proactively.",
    },
    {
      icon: icon12,
      title: "AI Financial Advisors",
      description: "Democratize access to financial planning. Using APIs and large language models, we help you build platforms offering personalized finance, investment and tax advice at near-zero cost.",
    },
  ];

  return (
    <div className=" py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <CardHeader className="text-center mb-16">
          <CardTitle className="text-4xl md:text-5xl font-bold mb-4">
            We Power the Next Generation
            <br />
            of AI-Native Startups
          </CardTitle>
        </CardHeader>

        {/* Services Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
  {services.map((service, index) => (
    <Card key={index} className="border-none shadow-none bg-transparent"> {/* Full removal of card styling */}
      <CardContent className="py-0 pl-16">
        <div className="mb-3">
          <img 
            src={service.icon} 
            alt={service.title} 
            className="w-12 h-12 object-contain"
          />
        </div>
        <CardTitle className="text-sm font-extrabold mb-4">{service.title}</CardTitle>
        <CardDescription className="leading-relaxed">
          {service.description}
        </CardDescription>
      </CardContent>
    </Card>
  ))}
</div>
      </div>
    </div>
  );
}