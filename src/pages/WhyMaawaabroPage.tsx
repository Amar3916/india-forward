import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Target, Eye, Award, Heart, Shield, Zap, Users, 
  ArrowRight, Quote, CheckCircle2 
} from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Section, SectionHeader, AnimatedCard } from "@/components/shared";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const differentiators = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "No Fake Promises",
    description: "We deliver what we commit. Honest, transparent, and reliable in every engagement.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "No Forced Course Selling",
    description: "Unlike others, we don't push you towards expensive courses. Pure guidance only.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Built Real Government Systems",
    description: "We've designed and deployed platforms used by millions for government exams.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Ground-Level India Understanding",
    description: "We understand the real challenges faced by students and professionals in India.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Ethics + Execution",
    description: "We combine strong values with strong results. Integrity is non-negotiable.",
  },
];

const WhyMaawaabroPage = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-accent bg-accent/20 rounded-full border border-accent/30">
              Why Maawaabro
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Built Different. <span className="text-accent">Built Right.</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              We're not another tech company making empty promises. We've been on the ground, 
              understanding real challenges, and building solutions that actually work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why We're Different */}
      <Section>
        <SectionHeader
          badge="What Sets Us Apart"
          title="Why We're Different"
          description="In a world of hype and empty promises, we choose substance."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <AnimatedCard key={item.title} delay={index * 0.1}>
              <Card variant="feature" className="h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardHeader>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section className="bg-secondary">
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedCard delay={0}>
            <Card variant="elevated" className="h-full p-8">
              <div className="h-14 w-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To build trusted platforms that guide individuals, governments, and startups 
                toward sustainable success. A future where technology serves people, not exploits them.
              </p>
            </Card>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <Card variant="elevated" className="h-full p-8">
              <div className="h-14 w-14 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Enable careers, simplify exams, and empower innovation using secure, scalable 
                technology. Every solution we build aims to create real, measurable impact.
              </p>
            </Card>
          </AnimatedCard>
        </div>
      </Section>

      {/* Founder's Note */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-accent bg-accent/10 rounded-full">
                From the Founder
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                A Personal Note
              </h2>
            </div>

            <Card variant="elevated" className="p-8 lg:p-12">
              <Quote className="h-10 w-10 text-accent/30 mb-6" />
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>
                  I've seen firsthand how broken systems fail people — students losing 
                  years to bad career advice, exam aspirants facing unfair processes, 
                  founders struggling without proper support.
                </p>
                <p>
                  Maawaabro was born from these real problems. Not in a fancy office, 
                  but from ground-level understanding of what India truly needs.
                </p>
                <p>
                  We don't make promises we can't keep. We don't sell what you don't need. 
                  We focus on building trust through honest work and real results.
                </p>
                <p className="text-muted-foreground italic">
                  If you're looking for a partner who genuinely cares about your success, 
                  you've found us.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-bold text-foreground">The Maawaabro Team</p>
                <p className="text-sm text-muted-foreground">Building for India, from India</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Whether you need career guidance, a government platform, or startup support — 
              let's talk about how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Get in Touch
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WhyMaawaabroPage;
