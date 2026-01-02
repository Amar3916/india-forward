import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/shared";

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "No Fake Promises",
    description: "We deliver what we commit. Honest, transparent, and reliable.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Ground-Level Understanding",
    description: "Built from real problems faced by real people across India.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Ethics + Execution",
    description: "We combine strong values with strong results.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Government Experience",
    description: "We've built real government systems that work at scale.",
  },
];

export function TrustSection() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-accent bg-accent/10 rounded-full">
            Why Maawaabro
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
            Built Different.{" "}
            <span className="text-accent">Built Right.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We're not another tech company making empty promises. We've been on the ground, 
            understanding real challenges, and building solutions that actually work.
          </p>
          <Link to="/why-maawaabro">
            <Button variant="default" size="lg" className="group">
              Learn Our Story
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-secondary border border-border hover:border-accent/30 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
