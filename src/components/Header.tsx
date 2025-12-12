import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/customer-sentry-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomepage = location.pathname === "/";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-card/95 backdrop-blur-lg shadow-lg border-b border-border" 
          : isHomepage 
            ? "bg-transparent" 
            : "bg-card/95 backdrop-blur-lg"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Customer Sentry" 
              className={`h-10 w-auto transition-all duration-300 ${
                !isScrolled && isHomepage ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled || !isHomepage ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Home
            </Link>
            <a 
              href="#features" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled || !isHomepage ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled || !isHomepage ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Pricing
            </a>
            <a 
              href="tel:616-226-9596" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                isScrolled || !isHomepage ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              <Phone className="w-4 h-4" />
              616-226-9596
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="default" className="bg-accent hover:bg-accent/90" asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled || !isHomepage 
                ? "text-foreground hover:bg-muted" 
                : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border py-6 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <a 
                href="#features" 
                className="text-foreground hover:text-primary font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-foreground hover:text-primary font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="tel:616-226-9596" 
                className="flex items-center gap-2 text-foreground hover:text-primary font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                616-226-9596
              </a>
              <div className="px-4 pt-4 border-t border-border">
                <Button variant="default" className="w-full bg-accent hover:bg-accent/90" asChild>
                  <Link to="/get-started" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;