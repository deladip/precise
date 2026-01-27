import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Business Solutions", href: "/business-solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/">
            <a className="font-serif text-2xl font-bold tracking-tight text-primary hover:opacity-90 transition-opacity">
              PRECISE METHOD
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    location === link.href
                      ? "text-accent"
                      : "text-primary/80"
                  )}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-sm px-6 font-medium">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-2 text-base font-medium",
                    location === link.href
                      ? "text-accent"
                      : "text-primary/80"
                  )}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white mt-4">
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
