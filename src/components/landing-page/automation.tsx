import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AutomationFeatures() {
  return (
    <section className="bg-[#fff2ef] py-16 px-16 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Build Automation That Thinks</h1>
          <CardDescription className="text-lg max-w-3xl mx-auto leading-relaxed">
            Route 33 empowers founders and companies to automate the future—building agents that think, decide, and act
            across domains. Here's how:
          </CardDescription>
        </div>

        {/* Navigation Pills */}
        <div className="flex justify-center  mb-12">
          <div className="border-2 border-gray-200 overflow-x-auto rounded-full p-1 inline-flex">
            <Button variant="default" className="rounded-full px-6 py-2 text-sm font-medium">
              AI Agent Categories
            </Button>
            <Button variant="ghost" className="rounded-full px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Creative Automation
            </Button>
            <Button variant="ghost" className="rounded-full px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Smart Data Sync
            </Button>
            <Button variant="ghost" className="rounded-full px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Workforce Mobility
            </Button>
            <Button variant="ghost" className="rounded-full px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              AI for M&A Strategy
            </Button>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-16">
          <CardDescription className="max-w-2xl mx-auto leading-relaxed">
            Deploy purpose-built AI agents designed to perform specialized, high-impact tasks across your organization.
          </CardDescription>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Prompt Automation & Generation */}
          <Card className=" shadow-sm bg-transparent">
            <CardContent className="px-8  py-0">
              <CardTitle className="text-lg l font-bold mb-4">Prompt Automation & Generation</CardTitle>
              <CardDescription className="leading-relaxed">
                Generate optimized, context-aware prompts—or let agents craft their own. Stay accurate, efficient, and
                adaptive in every workflow.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Workflow Automation */}
          <Card className="shadow-sm bg-transparent" >
            <CardContent className="px-8 py-0">
              <CardTitle className="text-lg l font-bold mb-4">Workflow Automation</CardTitle>
              <CardDescription className="leading-relaxed">
                Orchestrate multi-step processes like document parsing, task routing, or email sequencing without human
                intervention.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Internal Agent Infrastructure */}
          <Card className=" shadow-sm bg-transparent">
            <CardContent className="px-8 py-0">
              <CardTitle className="text-lg font-bold mb-4">Internal Agent Infrastructure</CardTitle>
              <CardDescription className="leading-relaxed">
                Equip every team with custom-deployable AI tools—streamlining operations and reducing overhead with
                intelligent, internal automation.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}