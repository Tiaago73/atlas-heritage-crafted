import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Linkedin, Twitter } from "lucide-react";
import { CTASection } from "./CTASection";

interface BlogPostProps {
  title: string;
  subtitle?: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  children: ReactNode;
}

export const BlogPost = ({
  title,
  subtitle,
  category,
  date,
  readTime,
  image,
  children,
}: BlogPostProps) => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `${title} - Atlas Patrimonial`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero with Image */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary to-primary-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6">
              <ArrowLeft size={20} />
              <span>Voltar para o Blog</span>
            </Link>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30">
                <span className="text-sm font-medium text-gold">{category}</span>
              </div>

              <h1 className="font-cinzel font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground">
                {title}
              </h1>

              {subtitle && (
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  {subtitle}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-6 text-sm text-primary-foreground/70">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Share buttons */}
            <div className="flex items-center gap-3 mb-12 pb-8 border-b border-border">
              <span className="text-sm text-muted-foreground font-medium">Compartilhar:</span>
              <div className="flex gap-2">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-gold hover:text-primary transition-all flex items-center justify-center"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-gold hover:text-primary transition-all flex items-center justify-center"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-gold hover:text-primary transition-all flex items-center justify-center"
                >
                  <Twitter size={18} />
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(shareUrl);
                    alert('Link copiado!');
                  }}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-gold hover:text-primary transition-all flex items-center justify-center"
                >
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            {/* Article content */}
            <div className="prose prose-lg max-w-none prose-headings:font-cinzel prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground">
              {children}
            </div>

            {/* CTA Box */}
            <div className="mt-16 p-8 bg-gradient-navy rounded-2xl border border-gold/20">
              <div className="text-center space-y-4">
                <h3 className="font-cinzel font-bold text-2xl text-primary-foreground">
                  Pronto para começar a investir?
                </h3>
                <p className="text-primary-foreground/80">
                  Agende uma consultoria gratuita e descubra as melhores oportunidades para você.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contato">Falar com Especialista</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTASection />
      <Footer />
    </div>
  );
};
