
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading = ({ title, subtitle, className }: SectionHeadingProps) => {
  return (
    <div className={cn("text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 animate-on-scroll", className)}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight mb-3 sm:mb-4 text-balance">
        <span className="relative">
          {title}
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/20 rounded"></span>
        </span>
      </h2>
      {subtitle && (
        <p className="text-md sm:text-lg text-muted-foreground text-balance px-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
