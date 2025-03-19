
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading = ({ title, subtitle, className }: SectionHeadingProps) => {
  return (
    <div className={cn("text-center max-w-2xl mx-auto mb-12 md:mb-16 animate-on-scroll", className)}>
      <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
