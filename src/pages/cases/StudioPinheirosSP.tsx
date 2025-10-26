import { CaseStudy } from "@/components/CaseStudy";
import studioPinheirosImg from "@/assets/cases/studio-pinheiros-sp.jpg";

const StudioPinheirosSP = () => {
  return (
    <CaseStudy
      title="Studio Moderno em Pinheiros"
      location="Pinheiros, São Paulo - SP"
      image={studioPinheirosImg}
      propertyDetails={{
        type: "Studio",
        area: "38m²",
        bedrooms: "1",
        bathrooms: "1",
        parking: "1",
      }}
      financials={{
        propertyValue: "R$ 520.000",
        downPayment: "R$ 104.000",
        financed: "R$ 416.000",
        monthlyPayment: "R$ 2.400",
        monthlyRent: "R$ 3.500",
        netResult: "+R$ 1.100",
        yield: "10,4% a.a.",
      }}
      analysis={{
        strengths: [
          "Imóvel Novo e Pronto: Unidade nova com 2 anos de construção, pronta para morar. Acabamento moderno com piso porcelanato, armários planejados e infraestrutura para ar-condicionado.",
          "Público Jovem e Dinâmico: Pinheiros atrai jovens profissionais, estudantes de pós-graduação e estrangeiros. Alta rotatividade de locação com valores consistentes de aluguel.",
          "Ticket de Entrada Acessível: Com entrada de R$ 104.000, este é um dos imóveis com melhor relação custo-benefício para começar a investir em São Paulo com a metodologia 20/80.",
          "Gestão Simplificada: Studios possuem gestão mais simples, com manutenções menos frequentes e custos operacionais reduzidos. Ideal para primeiro investimento imobiliário.",
        ],
        considerations: [
          "Metragem Compacta: O tamanho reduzido limita o público a solteiros ou casais sem filhos. Importante garantir boa apresentação e funcionalidade do espaço.",
          "Concorrência de Mercado: Região com boa oferta de studios. Necessário manter o imóvel bem conservado e preço competitivo para garantir ocupação contínua.",
        ],
        conclusion:
          "Studio em Pinheiros é uma excelente porta de entrada no mercado de investimentos imobiliários. O fluxo de caixa positivo, somado ao baixo custo de entrada e à alta liquidez da região, fazem deste imóvel uma escolha estratégica para quem busca iniciar um portfólio rentável.",
      }}
    />
  );
};

export default StudioPinheirosSP;
