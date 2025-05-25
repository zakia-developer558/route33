
import { ContactForm } from "@/components/contact-page/contact-form";
import contactus from '../assets/landing-page/Contact Us.svg'

export default function ContactPage() {
    return (
      <div className="min-h-screen relative pb-23">
  
        <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-12 text-left"> {/* Changed from text-center to text-left */}
    <h1 className="text-4xl font-bold mb-3" >Get In Touch</h1>
    <p className="text-muted-foreground max-w-2xl">
      Have questions or feedback? We'd love to hear from you.
    </p>
  </div>
  
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ContactForm />
            </div>
  
            <div className="flex flex-col items-center justify-center space-y-8">
              <img
              src={contactus}
              />
              <div className="text-center space-y-2">
                <h2 className="text-xl font-semibold">Alternative Contact</h2>
                <p className="text-muted-foreground">
                  Email us directly at{" "}
                  <a
                    href="mailto:hello@getfork.ai"
                    className="text-primary hover:underline"
                  >
                    hello@getfork.ai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  