import { LucideIcon } from "lucide-react";

interface StepCardProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const StepCard = ({ number, icon: Icon, title, description }: StepCardProps) => {
  return (
    <div className="relative group">
      <div className="bg-card rounded-xl p-8 shadow-elegant hover:shadow-xl transition-all duration-300 border border-border h-full">
        {/* Number Badge */}
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center shadow-gold">
          <span className="font-cinzel font-bold text-xl text-primary">{number}</span>
        </div>

        {/* Icon */}
        <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-300">
          <Icon size={32} className="text-primary group-hover:text-gold transition-colors duration-300" />
        </div>

        {/* Content */}
        <h3 className="font-cinzel font-semibold text-xl text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
