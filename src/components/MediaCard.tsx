import { Link } from "react-router-dom";
import { ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MediaCardProps {
  title: string;
  source: string;
  date: string;
  url: string;
  thumbnail?: string;
  excerpt?: string;
}

export const MediaCard = ({ title, source, date, url, thumbnail, excerpt }: MediaCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-300 border border-border h-full group">
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-gold/10">
            <ExternalLink size={48} className="text-muted-foreground/30" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-medium text-gold">{source}</span>
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {date}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg text-foreground line-clamp-2 leading-snug">{title}</h3>

        {/* Excerpt */}
        {excerpt && <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>}

        {/* CTA */}
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-between group-hover:text-gold transition-colors"
          asChild
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            Ler matéria completa
            <ExternalLink size={16} />
          </a>
        </Button>
      </div>
    </div>
  );
};
