import { CaseStudy } from "@/components/CaseStudy";
import apartamentoJardinsImg from "@/assets/cases/apartamento-jardins-sp.jpg";

const ApartamentoJardinsSP = () => {
  return (
    <CaseStudy
      title="Apartamento 2 Quartos nos Jardins"
      location="Jardins, São Paulo - SP"
      image={apartamentoJardinsImg}
      propertyDetails={{
        type: "Apartamento",
        area: "68m²",
        bedrooms: "2",
        bathrooms: "1",
        parking: "1",
      }}
      financials={{
        propertyValue: "R$ 850.000",
        downPayment: "R$ 170.000",
        financed: "R$ 680.000",
        monthlyPayment: "R$ 3.200",
        monthlyRent: "R$ 4.800",
        netResult: "+R$ 1.600",
        yield: "10,8% a.a.",
      }}
      analysis={{
        strengths: [
          "Localização Premium: Situado no coração dos Jardins, um dos bairros mais valorizados de São Paulo. Excelente infraestrutura urbana com proximidade a metrô, comércio sofisticado e áreas verdes.",
          "Alta Demanda de Locação: A região possui alta procura de locatários qualificados, garantindo baixo índice de vacância. Público-alvo: profissionais liberais, executivos e casais sem filhos.",
          "Valorização Consistente: Histórico de valorização média de 8% ao ano acima da inflação na última década. Imóvel em prédio bem conservado com infraestrutura completa.",
          "Fluxo de Caixa Positivo: Renda de aluguel (R$ 4.200) superior à parcela do financiamento (R$ 3.800), gerando fluxo positivo de R$ 400 mensais para o investidor.",
        ],
        considerations: [
          "IPTU e Condomínio: Considerar custos mensais de IPTU (~R$ 250) e condomínio (~R$ 800). Em contratos com inquilino pessoa jurídica, esses custos podem ser repassados.",
          "Manutenção e Vacância: Reservar fundo de emergência para eventuais manutenções e períodos de vacância (média de 1-2 meses a cada troca de inquilino).",
        ],
        conclusion:
          "Este apartamento nos Jardins representa uma oportunidade sólida de investimento para quem busca renda passiva e valorização patrimonial. A localização privilegiada, somada ao fluxo de caixa positivo desde o primeiro mês, torna este imóvel uma escolha estratégica para construção de patrimônio de longo prazo.",
      }}
    />
  );
};

export default ApartamentoJardinsSP;
