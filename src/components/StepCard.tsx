import { cn } from "@/lib/utils";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const StepCard = ({ step, title, description, className, delay = 0 }: StepCardProps) => {
  return (
    <div 
      className={cn(
        "relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 opacity-0 animate-fade-up",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Step number */}
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-lg shadow-lg">
        {step}
      </div>
      
      <div className="pt-4">
        <h3 className="text-xl font-display text-foreground-dark mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
