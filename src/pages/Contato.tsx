import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    objective: "",
    income: "",
    message: "",
    acceptTerms: false,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptTerms) {
      toast({
        title: "Atenção",
        description: "Por favor, aceite a política de privacidade para continuar.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    try {
      // Enviar para Google Sheets via Apps Script Web App
      const response = await fetch('https://script.google.com/macros/s/AKfycbzYOUR_DEPLOYMENT_ID/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          objective: formData.objective,
          income: formData.income || 'Não informado',
          message: formData.message || 'Sem mensagem adicional',
        }),
      });

      setLoading(false);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em até 24 horas úteis.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        objective: "",
        income: "",
        message: "",
        acceptTerms: false,
      });
    } catch (error) {
      setLoading(false);
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tente novamente ou entre em contato diretamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-cinzel font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground">
              Agende sua Consultoria
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Converse com nossos especialistas e descubra como construir patrimônio imobiliário.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div>
                <h2 className="font-cinzel font-semibold text-2xl text-foreground mb-6">
                  Fale Conosco
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-gold" size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">Telefone</div>
                      <a href="tel:+551199999999" className="text-muted-foreground hover:text-gold transition-colors">
                        +55 (11) 9999-9999
                      </a>
                      <br />
                      <a
                        href="https://wa.me/5511999999999"
                        className="text-sm text-gold hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Abrir no WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-gold" size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">E-mail</div>
                      <a
                        href="mailto:contato@atlaspatrimonial.com"
                        className="text-muted-foreground hover:text-gold transition-colors"
                      >
                        contato@atlaspatrimonial.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-gold" size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">Escritório</div>
                      <p className="text-muted-foreground">
                        Av. Paulista, 1000
                        <br />
                        São Paulo, SP - Brasil
                        <br />
                        CEP 01310-100
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3">Horário de Atendimento</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Segunda a Sexta: 9h às 18h</div>
                  <div>Sábado: 9h às 13h</div>
                  <div>Domingo: Fechado</div>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-elegant border border-border">
                <h2 className="font-cinzel font-semibold text-2xl text-foreground mb-8">
                  Agendar Consultoria Gratuita
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Seu nome"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                      <Input
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade/UF *</Label>
                      <Input
                        id="city"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="São Paulo, SP"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="objective">Objetivo de Investimento *</Label>
                    <Input
                      id="objective"
                      required
                      value={formData.objective}
                      onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                      placeholder="Ex: Renda passiva, valorização, diversificação"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="income">Renda Mensal Estimada (opcional)</Label>
                    <Input
                      id="income"
                      value={formData.income}
                      onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                      placeholder="Ex: R$ 10.000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem (opcional)</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte-nos mais sobre seus objetivos..."
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={formData.acceptTerms}
                      onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                      className="mt-1"
                    />
                    <Label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                      Aceito a{" "}
                      <a href="/privacidade" className="text-gold hover:underline">
                        Política de Privacidade
                      </a>{" "}
                      e autorizo o uso dos meus dados conforme LGPD.
                    </Label>
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                    {loading ? "Enviando..." : "Enviar Solicitação"}
                    <Send className="ml-2" size={18} />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Responderemos em até 24 horas úteis. Todos os campos marcados com * são obrigatórios.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
