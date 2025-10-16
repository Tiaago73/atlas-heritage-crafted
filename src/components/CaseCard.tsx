import { Link } from "react-router-dom";
import { MapPin, TrendingUp, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseCardProps {
  slug: string;
  location: string;
  propertyValue: string;
  monthlyRent: string;
  monthlyPayment: string;
  netResult: string;
  image?: string;
  tags?: string[];
}

export const CaseCard = ({
  slug,
  location,
  propertyValue,
  monthlyRent,
  monthlyPayment,
  netResult,
  image,
  tags = [],
}: CaseCardProps) => {
  const isPositive = netResult.includes("+");

  return (
    <Link to={`/case/${slug}`} className="group block">
      <div className="bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-300 border border-border h-full">
        {/* Image */}
        <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
          {image ? (
            <img src={image} alt={location} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-gold/10">
              <Home size={48} className="text-muted-foreground/30" />
            </div>
          )}
          <div className="absolute top-4 right-4">
            <div className="px-3 py-1.5 rounded-lg bg-card/95 backdrop-blur-sm shadow-md">
              <MapPin size={14} className="inline mr-1 text-gold" />
              <span className="text-xs font-medium text-foreground">{location}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded-md bg-gold/10 text-gold text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-muted-foreground mb-1">Valor do Imóvel</div>
              <div className="font-semibold text-foreground">{propertyValue}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Renda Mensal</div>
              <div className="font-semibold text-gold">{monthlyRent}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Parcela Estimada</div>
              <div className="font-semibold text-foreground">{monthlyPayment}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Resultado Líquido</div>
              <div className={`font-semibold flex items-center ${isPositive ? "text-green-600" : "text-red-600"}`}>
                <TrendingUp size={14} className="mr-1" />
                {netResult}
              </div>
            </div>
          </div>

          <Button variant="outline" size="sm" className="w-full group-hover:bg-gold group-hover:text-primary group-hover:border-gold transition-colors">
            Ver Estudo Completo
          </Button>
        </div>
      </div>
    </Link>
  );
};
