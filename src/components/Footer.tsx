import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/customer-sentry-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background-dark text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src={logo} 
              alt="Customer Sentry" 
              className="h-10 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 max-w-md mb-6 leading-relaxed">
              AI-powered customer service designed specifically for B2B manufacturers. 
              Built by industry veterans with 25+ years of manufacturing experience.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-primary-foreground/70 hover:text-primary transition-colors">
                Home
              </Link>
              <a href="#features" className="text-primary-foreground/70 hover:text-primary transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-primary-foreground/70 hover:text-primary transition-colors">
                Pricing
              </a>
              <Link to="/get-started" className="text-primary-foreground/70 hover:text-primary transition-colors">
                Get Started
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a 
                href="tel:616-226-9596" 
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>616-226-9596</span>
              </a>
              <a 
                href="mailto:info@customersentry.com" 
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@customersentry.com</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Grand Rapids, Michigan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Customer Sentry. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-primary-foreground/50 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;