import { Button } from "@/components/ui/button";
import logo from '../../assets/landing-page/Logo.svg';
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-4 sm:py-6 lg:py-10 flex items-center justify-between">
        {/* Logo */}
        <Button variant="ghost" className="p-0 hover:bg-transparent">
          <img
            src={logo}
            alt="The Route 33 Logo"
            width={80}
            height={80}
            className="h-auto w-12 sm:w-16 lg:w-20"
          />
        </Button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Link to='/'>
            <Button variant="link" className="text-gray-800 hover:text-orange-500 text-sm lg:text-base">
              Home
            </Button>
          </Link>
          <Link to='/terms-conditions'>
            <Button variant="link" className="text-gray-800 hover:text-orange-500 text-sm lg:text-base">
              Terms and Conditions
            </Button>
          </Link>
          <Link to='/contact'>
            <Button variant="link" className="text-gray-800 hover:text-orange-500 text-sm lg:text-base">
              Contact Us
            </Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="md:hidden p-2 hover:bg-gray-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation (Drawer) */}
      <div
        className={`fixed inset-y-0 right-0 bg-white shadow-lg transform transition-transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-3/4 max-w-sm z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium">Menu</h2>
          <Button
            variant="ghost"
            className="p-2 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex flex-col items-start p-4 gap-4">
          <Link to='/' onClick={() => setMobileMenuOpen(false)}>
            <Button variant="link" className="text-gray-800 hover:text-orange-500 w-full">
              Home
            </Button>
          </Link>
          <Link to='/terms-conditions' onClick={() => setMobileMenuOpen(false)}>
            <Button variant="link" className="text-gray-800 hover:text-orange-500 w-full">
              Terms and Conditions
            </Button>
          </Link>
          <Link to='/contact' onClick={() => setMobileMenuOpen(false)}>
            <Button variant="link" className="text-gray-800 hover:text-orange-500 w-full">
              Contact Us
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
