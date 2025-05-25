export default function Component() {
  return (
   <div className="bg-white py-16 px-4">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
      <p className="text-sm text-gray-500">Effective Date: May 9, 2025.</p>
    </div>

    {/* Content */}
    <div className="space-y-8 text-gray-600 text-base leading-relaxed">
      {/* Introduction */}
      <p className="text-lg">
        Welcome to Route 33. These Terms and Conditions ("Terms") govern your access to and use of our website,
        software, and related services ("Services") operated by Route 33, Inc. ("Route 33," "we," "our," or "us").
      </p>

      <p>
        By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, please do not
        use the Services.
      </p>

      {/* Section 1 */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">1. Eligibility</h2>
        <p className="text-lg"> 
          You must be at least 18 years old or the legal age of majority in your jurisdiction to use our Services. By
          using Route 33, you represent and warrant that you meet these requirements.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">2. Use of Services</h2>
        <p className="mb-4 text-lg">
          Route 33 provides access to AI-powered software development, automation infrastructure, and digital
          products. You agree to use the Services only for lawful purposes and in compliance with all applicable laws,
          rules, and regulations.
        </p>
        <p className="mb-2 text-lg">You must not:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Reverse engineer, decompile, or tamper with our software</li>
          <li>Attempt unauthorized access to our systems</li>
          <li>Use our Services to develop or distribute malicious or unethical software</li>
        </ul>
      </div>

      {/* Section 3 */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
        <p className="text-lg">
          All content, trademarks, and software on Route 33's platform are the property of Route 33, Inc. or its
          licensors. You may not copy, modify, or distribute any content from the Services without our prior written
          permission.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">4. User Content</h2>
        <p className="text-lg">
          If you provide feedback, ideas, or other content to Route 33, you grant us a non-exclusive, royalty-free,
          worldwide license to use, reproduce, and publish that content to improve our Services.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">5. Subscriptions and Payments</h2>
        <p className="text-lg">
          Some features of Route 33 may require payment. All fees are non-refundable unless explicitly stated. By
          subscribing, you authorize us (or our third-party payment processors) to charge you according to your
          selected plan.
        </p>
      </div>

      {/* Section 6 - Updated */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">6. Termination</h2>
        <p className="mb-4 text-lg">
          We may suspend or terminate your access to the Services at our sole discretion, without notice, for conduct
          that violates these Terms or is harmful to other users, us, or third parties.
        </p>
        <p>You may cancel your account at any time by contacting support at hello@route33.ai.</p>
      </div>

      {/* Section 7 */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4 text-lg">7. Disclaimers</h2>
        <p>
          Our Services are provided "as is" and "as available." We do not guarantee uninterrupted or error-free
          service. Route 33 disclaims all warranties, express or implied, including merchantability, fitness for a
          particular purpose, and non-infringement.
        </p>
      </div>

      {/* Remaining sections... */}
    </div>
  </div>
</div>

  )
}
