import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  avatar?: string;
  role?: string;
}

export const TestimonialCard = ({ name, location, text, avatar, role }: TestimonialCardProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="bg-card rounded-xl p-8 shadow-elegant border border-border h-full flex flex-col">
      {/* Quote Icon */}
      <Quote size={32} className="text-gold mb-4" />

      {/* Testimonial Text */}
      <p className="text-foreground leading-relaxed mb-6 flex-grow italic">"{text}"</p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-border">
        <Avatar className="w-12 h-12">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-gradient-gold text-primary font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold text-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">
            {role && <span>{role} • </span>}
            {location}
          </div>
        </div>
      </div>
    </div>
  );
};
