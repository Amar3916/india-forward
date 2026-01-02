import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 lg:py-24", className)}>
      <div className="container mx-auto px-4 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 lg:mb-16",
        centered && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      {badge && (
        <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-accent bg-accent/10 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FeatureIconProps {
  icon: ReactNode;
  variant?: "primary" | "accent";
  size?: "sm" | "md" | "lg";
}

export function FeatureIcon({ icon, variant = "primary", size = "md" }: FeatureIconProps) {
  const sizeClasses = {
    sm: "h-10 w-10",
    md: "h-14 w-14",
    lg: "h-16 w-16",
  };

  const iconSizeClasses = {
    sm: "[&_svg]:h-5 [&_svg]:w-5",
    md: "[&_svg]:h-7 [&_svg]:w-7",
    lg: "[&_svg]:h-8 [&_svg]:w-8",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl",
        sizeClasses[size],
        iconSizeClasses[size],
        variant === "primary" && "bg-primary text-primary-foreground",
        variant === "accent" && "bg-accent text-accent-foreground"
      )}
    >
      {icon}
    </div>
  );
}
