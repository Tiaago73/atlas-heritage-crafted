import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Lock, Mail, Shield } from "lucide-react";

const AreaCliente = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulação de validação - sempre retorna erro
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Erro de autenticação",
        description: "Usuário ou senha inválidos. Por favor, verifique suas credenciais.",
        variant: "destructive",
      });
      setFormData({ email: "", password: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <Shield className="text-gold" size={16} />
              <span className="text-sm font-medium text-primary-foreground">
                Área Exclusiva para Clientes
              </span>
            </div>
            <h1 className="font-cinzel font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground">
              Portal do Cliente
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Acesse sua área exclusiva para acompanhar investimentos, documentos e relatórios de performance.
            </p>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-elegant border border-border">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Lock className="text-gold" size={32} />
                </div>
                <h2 className="font-cinzel font-semibold text-2xl text-foreground mb-2">
                  Acesse sua Conta
                </h2>
                <p className="text-muted-foreground">
                  Entre com suas credenciais para continuar
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      id="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="••••••••"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer text-muted-foreground">
                    <input type="checkbox" className="rounded border-border" />
                    Lembrar de mim
                  </label>
                  <button 
                    type="button"
                    className="text-gold hover:underline"
                    disabled
                  >
                    Esqueci minha senha
                  </button>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full" 
                  disabled={loading}
                >
                  {loading ? "Entrando..." : "Entrar"}
                </Button>

                <div className="pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    Ainda não é cliente?{" "}
                    <a href="/contato" className="text-gold hover:underline font-medium">
                      Agende uma consultoria
                    </a>
                  </p>
                </div>
              </form>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Segurança", icon: Shield },
                { label: "Criptografia", icon: Lock },
                { label: "Privacidade", icon: Shield },
              ].map((item, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-lg">
                  <item.icon className="mx-auto text-gold mb-2" size={20} />
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AreaCliente;
