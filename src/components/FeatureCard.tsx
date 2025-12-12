import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  solution: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, solution, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="group bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Problem */}
      <div className="mb-6">
        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-display font-semibold text-foreground-dark mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Divider */}
      <div className="w-full h-px bg-border my-6" />
      
      {/* Solution */}
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
          <ArrowRight className="w-3 h-3 text-success" />
        </div>
        <p className="text-sm text-foreground font-medium leading-relaxed">
          {solution}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;