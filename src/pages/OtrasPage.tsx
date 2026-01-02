import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Building2, Shield, FileCheck, CreditCard, Users, 
  BarChart3, Lock, ArrowRight, CheckCircle2, Download
} from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Section, SectionHeader, AnimatedCard, FeatureIcon } from "@/components/shared";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const modules = [
  {
    icon: <Users />,
    title: "One-Time Registration (OTR)",
    description: "Register once, apply everywhere. Unified candidate profile across all exams.",
  },
  {
    icon: <FileCheck />,
    title: "DigiLocker & Document Vault",
    description: "Secure document storage with DigiLocker integration for verified credentials.",
  },
  {
    icon: <CreditCard />,
    title: "Exam Application Engine",
    description: "Seamless application processing with payment gateway integration.",
  },
  {
    icon: <Shield />,
    title: "Admit Card & Result Engine",
    description: "Automated admit card generation and secure result publication.",
  },
  {
    icon: <Lock />,
    title: "AI-based Fraud Detection",
    description: "Advanced AI algorithms to detect and prevent exam fraud and scams.",
  },
  {
    icon: <BarChart3 />,
    title: "Admin & Government Dashboard",
    description: "Comprehensive dashboard for real-time monitoring and analytics.",
  },
];

const users = [
  { name: "State Governments", description: "For state-level recruitment examinations" },
  { name: "Public Service Commissions", description: "UPSC, State PSCs, and similar bodies" },
  { name: "Universities", description: "University entrance and semester examinations" },
  { name: "Large Exam Bodies", description: "SSC, Banking, Railway, and other major exams" },
];

const OtrasPage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-6 px-5 py-2 text-sm font-semibold text-accent bg-accent/20 rounded-full border border-accent/30">
                Government Solution
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                OTRAS
              </h1>
              <p className="text-2xl text-accent font-semibold mb-4">
                One Time Registration & Application System
              </p>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
                A centralized digital platform for government exam registration, 
                document verification, application processing, admit cards, results, 
                and fraud prevention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl" className="group">
                    Request Pilot / Demo
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="hero-outline" size="xl" className="group">
                  <Download className="h-5 w-5" />
                  Download Concept Note
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Modules */}
      <Section>
        <SectionHeader
          badge="Key Modules"
          title="Comprehensive Exam Management"
          description="Everything you need to run secure, scalable government examinations."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <AnimatedCard key={module.title} delay={index * 0.1}>
              <Card variant="feature" className="h-full">
                <CardHeader>
                  <FeatureIcon icon={module.icon} variant="primary" />
                  <CardTitle className="mt-4">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* Who Uses OTRAS */}
      <Section className="bg-secondary">
        <SectionHeader
          badge="Who Uses OTRAS"
          title="Built for Government & Institutions"
          description="OTRAS is designed to meet the demanding requirements of large-scale government examinations."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {users.map((user, index) => (
            <AnimatedCard key={user.name} delay={index * 0.1}>
              <div className="p-6 rounded-xl bg-card border border-border text-center h-full">
                <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{user.name}</h3>
                <p className="text-sm text-muted-foreground">{user.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-accent bg-accent/10 rounded-full">
              Why OTRAS
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Secure. Scalable. <span className="text-accent">Trusted.</span>
            </h2>
            <ul className="space-y-4">
              {[
                "99.9% uptime guarantee for critical exam periods",
                "End-to-end encryption for candidate data",
                "Real-time monitoring and analytics dashboard",
                "Seamless integration with existing systems",
                "Dedicated support for government bodies",
                "Compliance with government security standards",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary rounded-2xl p-8 lg:p-12"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready for a Pilot?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how OTRAS can transform your examination process. 
              We offer pilot programs for government bodies.
            </p>
            <Link to="/contact">
              <Button variant="accent" size="lg" className="w-full group">
                Request Demo
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default OtrasPage;
