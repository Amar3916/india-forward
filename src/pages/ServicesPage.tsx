import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Code, Palette, Building2, Server, Shield, 
  Megaphone, Search, TrendingUp, BarChart3,
  ArrowRight, CheckCircle2
} from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Section, SectionHeader, AnimatedCard, FeatureIcon } from "@/components/shared";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const technologyServices = [
  {
    icon: <Code />,
    title: "Web & App Development",
    description: "Modern, scalable web and mobile applications.",
    tech: ["React", "Node.js", "React Native", "Flutter"],
  },
  {
    icon: <Server />,
    title: "Backend & Microservices",
    description: "Robust backend systems using modern architecture.",
    tech: ["Java Spring", "Microservices", "gRPC", "REST APIs"],
  },
  {
    icon: <BarChart3 />,
    title: "AI / ML Solutions",
    description: "Intelligent solutions powered by machine learning.",
    tech: ["Python", "TensorFlow", "NLP", "Computer Vision"],
  },
  {
    icon: <Shield />,
    title: "Cybersecurity & Compliance",
    description: "Secure systems that meet compliance standards.",
    tech: ["Security Audits", "Penetration Testing", "GDPR", "ISO 27001"],
  },
];

const digitalMarketing = [
  {
    icon: <Palette />,
    title: "Startup Branding",
    description: "Complete brand identity from logo to guidelines.",
  },
  {
    icon: <Megaphone />,
    title: "Performance Marketing",
    description: "Data-driven campaigns that deliver ROI.",
  },
  {
    icon: <Search />,
    title: "SEO & Growth Strategy",
    description: "Organic growth through search optimization.",
  },
  {
    icon: <TrendingUp />,
    title: "Website & Landing Pages",
    description: "Conversion-optimized web experiences.",
  },
];

const enterpriseServices = [
  "Secure, government-grade platforms",
  "Scalable architecture for millions of users",
  "Audit-ready systems and documentation",
  "Compliance with government standards",
  "24/7 support and monitoring",
  "Custom integrations and APIs",
];

const ServicesPage = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-accent bg-accent/20 rounded-full border border-accent/30">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Technology & Digital <span className="text-accent">Solutions</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              From cutting-edge development to strategic marketing, we provide 
              end-to-end technology services for startups, enterprises, and governments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Services */}
      <Section id="technology">
        <SectionHeader
          badge="Technology Services"
          title="Build with Modern Tech"
          description="Enterprise-grade development using cutting-edge technologies."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {technologyServices.map((service, index) => (
            <AnimatedCard key={service.title} delay={index * 0.1}>
              <Card variant="feature" className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <FeatureIcon icon={service.icon} variant="primary" />
                    <div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription className="mt-2">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* Digital Marketing */}
      <Section id="marketing" className="bg-secondary">
        <SectionHeader
          badge="Digital Marketing"
          title="Grow Your Brand"
          description="Strategic marketing that drives real business results."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {digitalMarketing.map((service, index) => (
            <AnimatedCard key={service.title} delay={index * 0.1}>
              <Card variant="feature" className="h-full text-center">
                <CardHeader className="items-center">
                  <div className="h-14 w-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="mt-2">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* Enterprise & Government */}
      <Section id="enterprise">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-accent bg-accent/10 rounded-full">
              Enterprise & Government IT
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Built for <span className="text-accent">Scale & Security</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We specialize in building secure, scalable platforms that meet the 
              demanding requirements of government and enterprise clients.
            </p>
            <ul className="space-y-3">
              {enterpriseServices.map((service) => (
                <li key={service} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-hero rounded-2xl p-8 lg:p-12"
          >
            <Building2 className="h-12 w-12 text-accent mb-6" />
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Government & Large Enterprise?
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Let's discuss your requirements. We offer custom solutions tailored 
              to your specific needs and compliance requirements.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                Request Consultation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default ServicesPage;
