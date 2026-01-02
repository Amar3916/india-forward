import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Lightbulb, Code, Presentation, Building2, Handshake, 
  ArrowRight, CheckCircle2, Users, Rocket
} from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Section, SectionHeader, AnimatedCard, FeatureIcon } from "@/components/shared";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const helpWith = [
  {
    icon: <Lightbulb />,
    title: "Idea Validation",
    description: "Test your idea against market realities before investing resources.",
  },
  {
    icon: <Code />,
    title: "Tech Architecture",
    description: "Design scalable, secure technology foundations for your startup.",
  },
  {
    icon: <Rocket />,
    title: "MVP Development",
    description: "Build your minimum viable product to test and iterate quickly.",
  },
  {
    icon: <Presentation />,
    title: "Pitch Decks",
    description: "Create compelling presentations that attract investors.",
  },
  {
    icon: <Building2 />,
    title: "Government & Incubation Connects",
    description: "Connect with government schemes, incubators, and funding bodies.",
  },
  {
    icon: <Handshake />,
    title: "Long-term CTO Support",
    description: "Ongoing technical leadership without the full-time cost.",
  },
];

const whoItsFor = [
  {
    icon: <Users />,
    title: "First-time Founders",
    description: "Taking your first leap into entrepreneurship? We'll guide you through.",
  },
  {
    icon: <Rocket />,
    title: "Students Building Startups",
    description: "Young entrepreneurs with big ideas and limited resources.",
  },
  {
    icon: <Lightbulb />,
    title: "Non-technical Founders",
    description: "Great business ideas but need technical execution support.",
  },
  {
    icon: <Building2 />,
    title: "Govt-linked Innovation",
    description: "Building solutions for government tenders or public good.",
  },
];

const StartupSupportPage = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/3" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-6 px-5 py-2 text-sm font-semibold text-accent bg-accent/20 rounded-full border border-accent/30">
                For Founders
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                End-to-End <span className="text-accent">Startup Support</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
                From idea to execution, we're your startup tech and growth partner. 
                We help founders build, launch, and scale their ventures.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Start Your Startup Journey
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Help With */}
      <Section>
        <SectionHeader
          badge="What We Help With"
          title="From Idea to Scale"
          description="Comprehensive support at every stage of your startup journey."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpWith.map((item, index) => (
            <AnimatedCard key={item.title} delay={index * 0.1}>
              <Card variant="feature" className="h-full">
                <CardHeader>
                  <FeatureIcon icon={item.icon} variant="accent" />
                  <CardTitle className="mt-4">{item.title}</CardTitle>
                  <CardDescription className="mt-2">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* Who It's For */}
      <Section className="bg-secondary">
        <SectionHeader
          badge="Who It's For"
          title="Built for India's Builders"
          description="We support founders from all backgrounds and stages."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whoItsFor.map((item, index) => (
            <AnimatedCard key={item.title} delay={index * 0.1}>
              <div className="p-6 rounded-xl bg-card border border-border text-center h-full hover:border-accent/30 transition-colors">
                <div className="h-14 w-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-accent bg-accent/10 rounded-full">
              Our Approach
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Partner, Not Just <span className="text-accent">Vendor</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We don't just deliver services and disappear. We become your long-term 
              technology partner, invested in your success.
            </p>
            <ul className="space-y-4">
              {[
                "Understand your vision and goals deeply",
                "Build with scalability in mind from day one",
                "Iterate based on real user feedback",
                "Provide ongoing technical guidance",
                "Help you navigate growth challenges",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="elevated" className="p-8">
              <Rocket className="h-12 w-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Build?
              </h3>
              <p className="text-muted-foreground mb-6">
                Share your startup idea with us. We'll discuss how we can help 
                you turn it into reality.
              </p>
              <Link to="/contact">
                <Button variant="accent" size="lg" className="w-full group">
                  Schedule Consultation
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default StartupSupportPage;
