import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import atlasLogo from "@/assets/atlas-logo.png";

const footerLinks = {
  navegacao: [
    { name: "Sobre", href: "/sobre" },
    { name: "Soluções", href: "/solucoes" },
    { name: "Cases", href: "/cases" },
    { name: "Blog", href: "/blog" },
  ],
  recursos: [
    { name: "FAQ", href: "/faq" },
    { name: "Contato", href: "/contato" },
    { name: "Área do Cliente", href: "/area-cliente" },
  ],
  legal: [
    { name: "Política de Privacidade", href: "/privacidade" },
    { name: "Termos de Uso", href: "/termos" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/atlas_patrimonial/", icon: Instagram },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src={atlasLogo} 
                alt="Atlas Patrimonial" 
                className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
              />
              <span className="font-cinzel font-bold text-xl">Atlas Patrimonial</span>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Estratégia, transparência e execução em investimentos imobiliários.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-cinzel font-semibold text-gold mb-4">Navegação</h3>
            <ul className="space-y-3">
              {footerLinks.navegacao.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-cinzel font-semibold text-gold mb-4">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-cinzel font-semibold text-gold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+5513981419279" className="hover:text-gold transition-colors">
                    +55 13 98141-9279
                  </a>
                  <br />
                  <a href="https://wa.me/5513981419279" className="hover:text-gold transition-colors">
                    WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:contato@atlaspatrimonial.com" className="hover:text-gold transition-colors">
                  contato@atlaspatrimonial.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Atlas Patrimonial. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-xs text-primary-foreground/50 mt-6 max-w-4xl mx-auto text-center">
            <strong>Aviso Legal:</strong> O investimento em imóveis envolve riscos e não garante retorno financeiro.
            Todas as projeções apresentadas são baseadas em estudos de viabilidade e dependem de análise individual
            de cada caso. Recomendamos consulta com profissionais especializados antes de qualquer decisão de investimento.
          </p>
        </div>
      </div>
    </footer>
  );
};
