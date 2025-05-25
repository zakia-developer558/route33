import { Card, CardContent } from "@/components/ui/card"
import test1 from '../../assets/landing-page/Testimonial 1.svg'
import test2 from '../../assets/landing-page/Testimonial 2.svg'
import test3 from '../../assets/landing-page/Testimonial 3.svg'
import test4 from '../../assets/landing-page/Testimonial 4.svg'
import test5 from '../../assets/landing-page/Testimonial 5.svg'
import test6 from '../../assets/landing-page/Testimonial 6.svg'
import test7 from '../../assets/landing-page/Testimonial 7.svg'

export default function TestimonialsSection() {
  return (
    <section className=" py-10 px-4 pt-22">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
<div className="text-center mb-8">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight max-w-5xl mx-auto">
    Trusted by Builders, Backed by Results Startups. Scale-ups. Fortune 500s. Route 33 powers the world's most
    ambitious teams with intelligent AI agents that deliver measurable impact.
  </h2>
  <p className="text-md text-gray-600 max-w-xl mx-auto">
    Join the companies redefining their industries with our full-stack AI infrastructure—built for speed, scale,
    and serious outcomes.
  </p>
</div>

        {/* Testimonials Grid */}
        <div className="container mx-auto px-4 py-6 pt-15">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto auto-rows-min">
            {/* Jamie Dimon - Formula One Group (Tall Card) */}
            <Card className="md:row-span-2">
              <CardContent className="p-4 h-full flex flex-col justify-between mt-30 px-10 font-semibold">
                <blockquote className="text-gray-900 text-lg leading-relaxed ">
                  "Route 33 is more than a software partner—they're a launchpad for AI-native innovation. Their team helped
                  us turn a bold agent concept into a production-ready platform in weeks, not months."
                </blockquote>
                <div className="flex items-center justify-between -mt-7">
                  <div>
                    <p className="font-semibold text-gray-900">Jamie Dimon</p>
                    <p className="text-gray-600 text-sm">CEO / Formula One Group</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src={test1} alt="" />
   
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mary Callahan Erdoes - Crusoe Energy */}
            <Card className="bg-gray-100">
              <CardContent className="p-4 ">
                <blockquote className="text-gray-900 text-sm leading-relaxed mb-4">
                  "Route 33 delivered a voice-first AI prototype that felt like science fiction—and then turned it into real
                  infrastructure we could deploy at scale."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Mary Callahan Erdoes</p>
                    <p className="text-gray-600 text-xs">CEO / Crusoe Energy</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src={test3} alt="" />

                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Julian Erdoes - Zipcar */}
            <Card  className="bg-gray-100">
              <CardContent className="p-4">
                <blockquote className="text-gray-900 text-sm leading-relaxed mb-4">
                  "From concept to code to deployment, Route 33 is the most capable AI-first team we've worked with. They
                  move with speed and precision while pushing design and UX to the forefront."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Julian Erdoes</p>
                    <p className="text-gray-600 text-xs">CEO / Zipcar</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                   <img src={test6} alt="" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Troy Rohrbaugh - CreativeLive */}
            <Card  className="bg-gray-100">
              <CardContent className="p-4">
                <blockquote className="text-gray-900 text-sm leading-relaxed mb-4">
                  "Working with Route 33 felt like unlocking a cheat code. Their engineers embedded an AI layer across our
                  core workflow—automating tasks we thought could only be done manually."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Troy Rohrbaugh</p>
                    <p className="text-gray-600 text-xs">CEO / CreativeLive</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src={test4} alt="" />

                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Marianne Lake - Nebula Robotics */}
           <Card className="md:row-span-2 bg-orange-500 text-white border-1 border-blue-500 ">
              <CardContent className="p-4 h-full flex flex-col justify-between mt-30 px-10 font-semibold">
                <blockquote className=" text-lg leading-relaxed mb-6">
                  "We brought Route 33 a vision for an AI developer assistant. They delivered a fully autonomous agent that
                  now handles over 70% of our dev support tickets. Their team executes fast and flawlessly."
                </blockquote>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="font-semibold ">Liam Chase</p>
                    <p className=" text-sm">CEO / EcoSphere Technologies</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                   <img src={test7} alt="" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dough petno - EcoSphere Technologies (Featured Orange Card) */}
            <Card  className="bg-gray-100">
              <CardContent className="p-4 ">
                <blockquote className="text-sm leading-relaxed mb-4">
                "Route 33 doesn't just build tech. They co-create businesses. We spun up a vertical AI product with them
                  that's already generating new revenue."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold  text-sm">Doug Petno</p>
                    <p className="text-gray-600  text-xs">CEO / SkyBridge Ventures</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <img src={test2} alt="" />

                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Doug Petno - SkyBridge Ventures */}
            <Card  className="bg-gray-100">
              <CardContent className="p-4">
                <blockquote className="text-gray-900 text-sm leading-relaxed mb-4">
                  "Route 33 doesn't just build tech. They co-create businesses. We spun up a vertical AI product with them
                  that's already generating new revenue."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Marine Lake</p>
                    <p className="text-gray-600 text-xs">CTO / Nebula Robotics</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                     <img src={test5} alt="" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}