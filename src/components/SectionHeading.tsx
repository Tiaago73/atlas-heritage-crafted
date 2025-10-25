interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  onPrimary?: boolean;
}

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = false,
  className = "",
  onPrimary = false,
}: SectionHeadingProps) => {
  return (
    <div className={`space-y-4 ${centered ? "text-center" : ""} ${className}`}>
      {badge && (
        <div className={`inline-flex ${centered ? "mx-auto" : ""}`}>
          <span className="px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium border border-gold/20">
            {badge}
          </span>
        </div>
      )}
      <h2 className={`font-cinzel font-bold text-3xl sm:text-4xl lg:text-5xl ${onPrimary ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-3xl leading-relaxed ${onPrimary ? "text-primary-foreground/80" : "text-muted-foreground"} ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
