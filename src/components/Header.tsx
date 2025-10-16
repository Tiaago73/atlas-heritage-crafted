import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Sobre", href: "/sobre" },
  { name: "Soluções", href: "/solucoes" },
  { name: "Cases", href: "/cases" },
  { name: "Blog", href: "/blog" },
  { name: "Mídia", href: "/midia" },
  { name: "FAQ", href: "/faq" },
  { name: "Contato", href: "/contato" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center shadow-gold group-hover:shadow-xl transition-all duration-300">
              <span className="font-cinzel font-bold text-primary text-xl">A</span>
            </div>
            <span className="font-cinzel font-bold text-xl text-foreground hidden sm:block">
              Atlas Patrimonial
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  location.pathname === item.href ? "text-gold" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/area-cliente">Área do Cliente</Link>
            </Button>
            <Button variant="hero" size="default" asChild>
              <Link to="/contato">Agendar Consultoria</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-gold px-4 py-2 ${
                    location.pathname === item.href ? "text-gold bg-muted rounded-lg" : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 px-4 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/area-cliente" onClick={() => setMobileMenuOpen(false)}>
                    Área do Cliente
                  </Link>
                </Button>
                <Button variant="hero" size="default" asChild>
                  <Link to="/contato" onClick={() => setMobileMenuOpen(false)}>
                    Agendar Consultoria
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
