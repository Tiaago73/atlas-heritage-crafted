import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";

const Termos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Termos de Uso"
            subtitle="Condições gerais de uso dos serviços da Atlas Patrimonial."
            centered
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-muted-foreground mb-4">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>
              <p className="text-muted-foreground">
                Bem-vindo à Atlas Patrimonial. Ao utilizar nosso site e serviços, você concorda com estes Termos 
                de Uso. Por favor, leia atentamente antes de prosseguir.
              </p>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground">
                Ao acessar e usar o site da Atlas Patrimonial e seus serviços de consultoria imobiliária, você 
                concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer 
                parte destes termos, não deverá utilizar nossos serviços.
              </p>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">2. Descrição dos Serviços</h2>
              <p className="text-muted-foreground mb-3">
                A Atlas Patrimonial oferece serviços de consultoria especializada em investimentos imobiliários, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Consultoria para aquisição de imóveis de investimento</li>
                <li>Estudos de viabilidade econômica e financeira</li>
                <li>Assessoria em obtenção de crédito imobiliário</li>
                <li>Gestão de locação e administração de imóveis</li>
                <li>Implementação da Metodologia 20/80 de Autoquitação</li>
              </ul>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">3. Elegibilidade e Cadastro</h2>
              <p className="text-muted-foreground">
                Para utilizar nossos serviços, você deve:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-3">
                <li>Ser maior de 18 anos e capaz de firmar contratos juridicamente vinculativos</li>
                <li>Fornecer informações verdadeiras, precisas e completas durante o cadastro</li>
                <li>Manter suas informações de cadastro atualizadas</li>
                <li>Ser responsável pela confidencialidade de suas credenciais de acesso</li>
              </ul>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">4. Investimentos e Riscos</h2>
              <div className="p-6 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                <p className="text-muted-foreground font-semibold mb-3">
                  ⚠️ AVISO IMPORTANTE SOBRE INVESTIMENTOS:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Investimentos imobiliários envolvem riscos financeiros significativos</li>
                  <li>Rentabilidades passadas não garantem resultados futuros</li>
                  <li>Projeções e estimativas são baseadas em premissas que podem não se concretizar</li>
                  <li>Você pode perder parte ou todo o capital investido</li>
                  <li>A vacância (períodos sem locatário) pode ocorrer e afetar sua renda</li>
                  <li>Variações no mercado imobiliário podem impactar a valorização do imóvel</li>
                  <li>Custos com manutenção, impostos e taxas devem ser considerados</li>
                </ul>
              </div>
              <p className="text-muted-foreground mt-4">
                A Atlas Patrimonial atua como consultora e não garante retornos financeiros. Recomendamos fortemente 
                que você consulte profissionais especializados (advogados, contadores, consultores financeiros) antes 
                de tomar decisões de investimento.
              </p>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">5. Obrigações do Cliente</h2>
              <p className="text-muted-foreground mb-3">
                Como cliente da Atlas Patrimonial, você concorda em:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Fornecer documentação completa e verdadeira para análises e processos</li>
                <li>Cumprir com prazos e requisitos estabelecidos em contratos e acordos</li>
                <li>Efetuar pagamentos de honorários e taxas conforme acordado</li>
                <li>Comunicar quaisquer mudanças relevantes em sua situação financeira</li>
                <li>Não utilizar os serviços para fins ilegais ou fraudulentos</li>
                <li>Respeitar direitos de propriedade intelectual da Atlas Patrimonial</li>
              </ul>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">6. Propriedade Intelectual</h2>
              <p className="text-muted-foreground">
                Todo o conteúdo presente no site da Atlas Patrimonial, incluindo mas não limitado a textos, 
                gráficos, logos, ícones, imagens, estudos, metodologias e software, é propriedade exclusiva da 
                Atlas Patrimonial ou de seus licenciadores e está protegido pelas leis brasileiras e internacionais 
                de propriedade intelectual e direitos autorais.
              </p>
              <p className="text-muted-foreground mt-3">
                A Metodologia 20/80 de Autoquitação é marca registrada da Atlas Patrimonial e não pode ser 
                reproduzida ou utilizada sem autorização expressa.
              </p>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">7. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground">
                A Atlas Patrimonial não se responsabiliza por:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-3">
                <li>Decisões de investimento tomadas exclusivamente pelo cliente</li>
                <li>Recusa de crédito por instituições financeiras</li>
                <li>Flutuações do mercado imobiliário e econômico</li>
                <li>Problemas estruturais ou ocultos em imóveis adquiridos</li>
                <li>Inadimplência de inquilinos ou períodos de vacância</li>
                <li>Mudanças na legislação que afetem investimentos imobiliários</li>
                <li>Interrupções ou falhas técnicas no site</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Nossa responsabilidade está limitada ao escopo dos serviços contratados conforme descrito nos 
                contratos específicos de prestação de serviços.
              </p>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">8. Cancelamento e Rescisão</h2>
              <p className="text-muted-foreground">
                Você pode cancelar nossos serviços a qualquer momento, observando os termos específicos do contrato 
                de prestação de serviços. A Atlas Patrimonial reserva-se o direito de suspender ou encerrar o acesso 
                aos serviços em caso de:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-3">
                <li>Violação destes Termos de Uso</li>
                <li>Fornecimento de informações falsas ou fraudulentas</li>
                <li>Inadimplência de pagamentos</li>
                <li>Comportamento inadequado ou abusivo com nossa equipe</li>
              </ul>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">9. Privacidade e Proteção de Dados</h2>
              <p className="text-muted-foreground">
                O tratamento de seus dados pessoais está regido por nossa <a href="/privacidade" className="text-gold hover:underline">Política de Privacidade</a>, 
                que é parte integrante destes Termos de Uso. Recomendamos que você a leia atentamente para 
                compreender como coletamos, usamos e protegemos suas informações.
              </p>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">10. Modificações nos Termos</h2>
              <p className="text-muted-foreground">
                A Atlas Patrimonial reserva-se o direito de modificar estes Termos de Uso a qualquer momento. 
                Alterações significativas serão comunicadas por e-mail ou através de aviso em nosso site. O uso 
                continuado dos serviços após modificações constitui aceitação dos novos termos.
              </p>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">11. Lei Aplicável e Foro</h2>
              <p className="text-muted-foreground">
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa 
                relacionada a estes termos será submetida ao foro da comarca de São Paulo, SP, com exclusão de 
                qualquer outro, por mais privilegiado que seja.
              </p>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">12. Contato</h2>
              <p className="text-muted-foreground">
                Para dúvidas, sugestões ou questões relacionadas a estes Termos de Uso, entre em contato:
              </p>
              <div className="mt-4 p-6 bg-muted/30 rounded-lg">
                <p className="text-foreground font-semibold mb-2">Atlas Patrimonial</p>
                <p className="text-muted-foreground">E-mail: <a href="mailto:contato@atlaspatrimonial.com" className="text-gold hover:underline">contato@atlaspatrimonial.com</a></p>
                <p className="text-muted-foreground">Telefone: <a href="tel:+5513981419279" className="text-gold hover:underline">+55 13 98141-9279</a></p>
                <p className="text-muted-foreground">WhatsApp: <a href="https://wa.me/5513981419279" className="text-gold hover:underline">+55 13 98141-9279</a></p>
                <p className="text-muted-foreground">Endereço: São Paulo, SP - Brasil</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gold/10 border border-gold/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Reconhecimento:</strong> Ao utilizar os serviços da Atlas Patrimonial, você reconhece que 
                leu, compreendeu e concorda com estes Termos de Uso, bem como com nossa Política de Privacidade. 
                Se você não concorda com estes termos, não utilize nossos serviços.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Termos;