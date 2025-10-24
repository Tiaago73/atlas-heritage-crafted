interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = false,
  className = "",
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
      <h2 className="font-cinzel font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-muted-foreground max-w-3xl leading-relaxed ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
