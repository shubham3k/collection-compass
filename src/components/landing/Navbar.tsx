import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Building2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const loanProducts = [
  { label: "Personal Loans", href: "#services" },
  { label: "Business Loans", href: "#services" },
  { label: "Home Loans", href: "#services" },
  { label: "Vehicle Loans", href: "#services" },
  { label: "Loan Against Property", href: "#services" },
];

const navLinks = [
  { label: "Loan Products", href: "#services", hasDropdown: true },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "How It Works", href: "#process" },
  { label: "EMI Calculator", href: "#emi-calculator" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/98 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className={`p-2 rounded-lg transition-colors ${
              isScrolled ? "bg-primary" : "bg-cream/10"
            }`}>
              <Building2 className={`h-6 w-6 ${isScrolled ? "text-primary-foreground" : "text-cream"}`} />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? "text-foreground" : "text-cream"}`}>
              FinServe Pro
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <a
                      href={link.href}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                        isScrolled ? "text-muted-foreground" : "text-cream/80 hover:text-cream"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </a>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-card rounded-lg shadow-lg border border-border py-2"
                      >
                        {loanProducts.map((product) => (
                          <a
                            key={product.label}
                            href={product.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                          >
                            {product.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isScrolled ? "text-muted-foreground" : "text-cream/80 hover:text-cream"
                    }`}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-primary hover:bg-crimson-dark text-primary-foreground"
            >
              <a href="#contact">Apply for Loan</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-cream"}`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-4">
                <Button asChild className="w-full bg-primary hover:bg-crimson-dark">
                  <a href="#contact">Apply for Loan</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
