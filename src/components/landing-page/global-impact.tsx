import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import globalImpact from '../../assets/landing-page/Global Impact Image.svg'

export default function GlobalImpact() {
  return (
    <div className="bg-white py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
     

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <CardHeader className="text-center mb-16">
          <CardTitle className="text-5xl md:text-5xl font-extrabold mb-8">
            Global Impact
          </CardTitle>
          <CardDescription className="text-3xl max-w-3xl mx-auto leading-relaxed text-black">
            We've helped over 35,000 companies scale smarter and move faster—across every continent.
          </CardDescription>
        </CardHeader>

        {/* Content Section */}
        <Card className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-0 shadow-none">
          <CardContent className="relative p-0">
              <img
                 src={globalImpact}
                 alt="Person working at multiple monitors in a tech workspace"
                 className="w-[500px] h-auto rounded-lg mx-auto" // Fixed width with auto height
                />
         </CardContent>
            <div className="relative lg:-ml-24 z-10 ">
              <div className="bg-white rounded-2xl p-8 shadow-lg border max-w-md -ml-4">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  More than 5,000 contracts have been created through our platforms. Turing, for example, seamlessly
                  transitioned 550+ developers across 60 countries to Deel in days—with Route 33 agents powering
                  onboarding, payroll, and compliance.
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-gray-900 font-semibold">500,000+ workers onboarded</p>
                  <p className="text-gray-900 font-semibold">35,000+ businesses supported globally</p>
                  <p className="text-gray-900 font-semibold">$10B+ processed in compliant global payroll</p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  When scale matters, Route 33 delivers the speed, precision, and compliance to go global—instantly.
                </p>
              </div>
            </div>
        </Card>
      </div>
    </div>
  );
}