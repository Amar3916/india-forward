import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Building2, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader, FeatureIcon } from "@/components/shared";

const pillars = [
  {
    icon: <Users />,
    title: "Career Guidance Platform",
    description: "Personal, expert-led career mentorship for students and professionals.",
    features: [
      "1-to-1 expert guidance",
      "Mental clarity & direction",
      "No course selling, only guidance",
    ],
    href: "/career-guidance",
    cta: "Get Guidance",
    variant: "accent" as const,
  },
  {
    icon: <Building2 />,
    title: "OTRAS",
    subtitle: "Government Exam Platform",
    description: "One-Time Registration & Application System for scalable, secure exam processing.",
    features: [
      "One-Time Registration",
      "Secure, scalable exam processing",
      "Built for Government & Institutions",
    ],
    href: "/otras",
    cta: "Learn More",
    variant: "primary" as const,
  },
  {
    icon: <Rocket />,
    title: "Technology & Startup Services",
    description: "End-to-end technology and growth support for India's builders.",
    features: [
      "Startup tech & growth partner",
      "Digital marketing & AI solutions",
      "End-to-end execution",
    ],
    href: "/startup-support",
    cta: "Start Building",
    variant: "accent" as const,
  },
];

export function WhatWeDoSection() {
  return (
    <Section className="bg-secondary">
      <SectionHeader
        badge="What We Do"
        title="Three Pillars of Impact"
        description="We're building trusted platforms that guide individuals, governments, and startups toward sustainable success."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card variant="pillar" className="h-full flex flex-col">
              <CardHeader className="pb-4">
                <FeatureIcon icon={pillar.icon} variant={pillar.variant} size="lg" />
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  {pillar.subtitle && (
                    <p className="text-sm text-accent font-medium mt-1">
                      {pillar.subtitle}
                    </p>
                  )}
                </div>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  {pillar.description}
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  {pillar.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={pillar.href}>
                  <Button
                    variant={pillar.variant === "accent" ? "accent" : "default"}
                    className="w-full group"
                  >
                    {pillar.cta}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
