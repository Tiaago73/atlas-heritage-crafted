import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";

const Privacidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Política de Privacidade"
            subtitle="Sua privacidade e segurança dos seus dados são prioridade para a Atlas Patrimonial."
            centered
            onPrimary
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
                A Atlas Patrimonial está comprometida em proteger sua privacidade. Esta Política de Privacidade 
                descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais em conformidade 
                com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">1. Informações que Coletamos</h2>
              <p className="text-muted-foreground mb-3">
                Coletamos informações que você nos fornece diretamente ao:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Preencher formulários de contato e solicitação de consultoria</li>
                <li>Criar uma conta em nossa plataforma</li>
                <li>Participar de eventos, webinars ou consultorias</li>
                <li>Comunicar-se conosco por e-mail, telefone ou WhatsApp</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                <strong>Dados pessoais coletados podem incluir:</strong> nome completo, CPF, RG, e-mail, 
                telefone, endereço, informações financeiras (renda, capacidade de investimento), documentos 
                necessários para análise de crédito e viabilidade de investimento.
              </p>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">2. Como Utilizamos suas Informações</h2>
              <p className="text-muted-foreground mb-3">
                Utilizamos suas informações pessoais para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Fornecer serviços de consultoria e gestão imobiliária</li>
                <li>Realizar estudos de viabilidade e análises de crédito</li>
                <li>Processar solicitações de financiamento e aquisição de imóveis</li>
                <li>Comunicar-nos com você sobre serviços, atualizações e oportunidades</li>
                <li>Melhorar nossos serviços e experiência do cliente</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">3. Compartilhamento de Informações</h2>
              <p className="text-muted-foreground mb-3">
                Podemos compartilhar suas informações com:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Instituições Financeiras:</strong> Para análise e aprovação de crédito imobiliário</li>
                <li><strong>Parceiros Imobiliários:</strong> Para viabilizar a compra, venda e locação de imóveis</li>
                <li><strong>Prestadores de Serviços:</strong> Empresas que nos auxiliam em operações administrativas e tecnológicas</li>
                <li><strong>Autoridades Governamentais:</strong> Quando exigido por lei ou ordem judicial</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de 
                marketing sem seu consentimento explícito.
              </p>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">4. Segurança dos Dados</h2>
              <p className="text-muted-foreground">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações 
                contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia, 
                controles de acesso, armazenamento seguro e treinamento de nossa equipe sobre práticas de 
                proteção de dados.
              </p>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">5. Seus Direitos (LGPD)</h2>
              <p className="text-muted-foreground mb-3">
                De acordo com a LGPD, você tem direito a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Confirmação e acesso:</strong> Saber se tratamos seus dados e acessá-los</li>
                <li><strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados</li>
                <li><strong>Anonimização, bloqueio ou eliminação:</strong> De dados desnecessários ou tratados em desconformidade</li>
                <li><strong>Portabilidade:</strong> Solicitar a transferência de seus dados a outro fornecedor</li>
                <li><strong>Eliminação:</strong> Solicitar a exclusão de dados tratados com seu consentimento</li>
                <li><strong>Informação:</strong> Sobre entidades públicas e privadas com as quais compartilhamos dados</li>
                <li><strong>Revogação do consentimento:</strong> Retirar seu consentimento a qualquer momento</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Para exercer seus direitos, entre em contato conosco através do e-mail: <a href="mailto:privacidade@atlaspatrimonial.com" className="text-gold hover:underline">privacidade@atlaspatrimonial.com</a>
              </p>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">6. Retenção de Dados</h2>
              <p className="text-muted-foreground">
                Mantemos suas informações pessoais pelo tempo necessário para cumprir as finalidades descritas 
                nesta política, cumprir obrigações legais, resolver disputas e fazer cumprir nossos acordos. 
                Documentos relacionados a transações imobiliárias podem ser mantidos por períodos mais longos 
                conforme exigido pela legislação brasileira.
              </p>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">7. Cookies e Tecnologias Similares</h2>
              <p className="text-muted-foreground">
                Nosso site utiliza cookies e tecnologias similares para melhorar sua experiência, analisar o 
                tráfego e personalizar conteúdo. Você pode configurar seu navegador para recusar cookies, mas 
                isso pode afetar a funcionalidade do site.
              </p>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">8. Alterações nesta Política</h2>
              <p className="text-muted-foreground">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças 
                significativas por e-mail ou através de um aviso em nosso site. Recomendamos que você revise 
                esta página regularmente para se manter informado sobre nossas práticas de privacidade.
              </p>
            </div>

            <div>
              <h2 className="font-cinzel font-bold text-2xl text-foreground mb-4">9. Contato</h2>
              <p className="text-muted-foreground">
                Para questões sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, 
                entre em contato conosco:
              </p>
              <div className="mt-4 p-6 bg-muted/30 rounded-lg">
                <p className="text-foreground font-semibold mb-2">Atlas Patrimonial</p>
                <p className="text-muted-foreground">E-mail: <a href="mailto:privacidade@atlaspatrimonial.com" className="text-gold hover:underline">privacidade@atlaspatrimonial.com</a></p>
                <p className="text-muted-foreground">Telefone: <a href="tel:+5513981419279" className="text-gold hover:underline">+55 13 98141-9279</a></p>
                <p className="text-muted-foreground">Endereço: São Paulo, SP - Brasil</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gold/10 border border-gold/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Encarregado de Proteção de Dados (DPO):</strong> Para exercer seus direitos ou esclarecer 
                dúvidas sobre o tratamento de dados pessoais, você pode entrar em contato diretamente com nosso 
                Encarregado de Proteção de Dados através do e-mail: dpo@atlaspatrimonial.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacidade;