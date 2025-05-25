import { Button } from "@/components/ui/button";
import logo from '../../assets/landing-page/Logo.svg'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white border-t-2 border-black">
      <div className="container mx-auto px-20 py-10 flex items-center justify-between">
        {/* Logo */}
        <Button variant="ghost" className="p-0 hover:bg-transparent ">
          <img 
            src={logo} 
            alt="The Route 33 Logo" 
            width={80} 
            height={80} 
            className="h-auto" 
          />
        </Button>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          <Link to='/'>
          <Button variant="link" className="text-gray-800 hover:text-orange-500">
            Home
          </Button>
          </Link>
          <Link to='/terms-conditions'>
           <Button variant="link" className="text-gray-800 hover:text-orange-500">
            Terms and Conditions
          </Button>
          </Link>
          <Link to='/contact'>
             <Button variant="link" className="text-gray-800 hover:text-orange-500">
            Contact Us
          </Button>
          </Link>
       
       
        </nav>
      </div>
    </header>
  )
}