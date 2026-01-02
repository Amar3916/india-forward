import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Users, Heart, Target, Compass, ArrowRight, 
  CheckCircle2, GraduationCap, Briefcase, Building2
} from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Section, SectionHeader, AnimatedCard, FeatureIcon } from "@/components/shared";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const targetAudience = [
  { icon: <GraduationCap />, name: "Students", description: "10th, 12th, UG, PG students" },
  { icon: <Briefcase />, name: "Job Seekers", description: "Freshers and experienced professionals" },
  { icon: <Building2 />, name: "Govt Aspirants", description: "Government exam aspirants" },
  { icon: <Heart />, name: "Those Feeling Stuck", description: "Confused, or seeking direction" },
];

const whatWeProvide = [
  {
    title: "Career Clarity Sessions",
    description: "One-on-one sessions to understand your strengths, interests, and goals.",
  },
  {
    title: "Reality-Based Career Mapping",
    description: "Practical career paths based on real market demands, not hype.",
  },
  {
    title: "Failure Recovery & Motivation",
    description: "Bounce back from setbacks with personalized support and guidance.",
  },
  {
    title: "Government & Private Career Paths",
    description: "Explore opportunities in both government and private sectors.",
  },
  {
    title: "Long-term Mentorship",
    description: "Ongoing support throughout your career journey.",
  },
];

const revenueModel = [
  "Paid 1-to-1 guidance sessions",
  "Career roadmap plans",
  "Institutional partnerships",
  "No selling courses — ever",
];

const CareerGuidancePage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-6 px-5 py-2 text-sm font-semibold text-accent bg-accent/20 rounded-full border border-accent/30">
                People-First Approach
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Career Guidance <span className="text-accent">Platform</span>
              </h1>
              <p className="text-2xl text-primary-foreground/90 font-semibold mb-4">
                Not Coaching. Not Courses. <span className="text-accent">Only Guidance.</span>
              </p>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
                Expert 1-to-1 career mentorship for students, job seekers, and anyone 
                feeling lost or stuck in their career journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl" className="group">
                    Book Guidance Session
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="hero-outline" size="xl">
                    Talk to a Mentor
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <Section>
        <SectionHeader
          badge="Who It's For"
          title="We Guide People Who Need It Most"
          description="Our career guidance is for anyone seeking clarity, direction, and real support."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetAudience.map((audience, index) => (
            <AnimatedCard key={audience.name} delay={index * 0.1}>
              <div className="p-6 rounded-xl bg-secondary border border-border text-center h-full hover:border-accent/30 transition-colors">
                <div className="h-14 w-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                  {audience.icon}
                </div>
                <h3 className="font-bold text-foreground mb-2">{audience.name}</h3>
                <p className="text-sm text-muted-foreground">{audience.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* What We Provide */}
      <Section className="bg-secondary">
        <SectionHeader
          badge="What We Provide"
          title="Real Guidance, Real Results"
          description="Our mentors focus on practical, actionable career advice."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatWeProvide.map((item, index) => (
            <AnimatedCard key={item.title} delay={index * 0.1}>
              <Card variant="feature" className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription className="mt-2">{item.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* Revenue Model */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-accent bg-accent/10 rounded-full">
              Our Promise
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Honest Model. <span className="text-accent">No Hidden Agendas.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Unlike others, we don't sell courses or push you towards expensive programs. 
              Our only focus is your career success.
            </p>
            <ul className="space-y-4">
              {revenueModel.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
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
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Explore More
              </h3>
              <div className="space-y-3">
                <Link to="/career-guidance/how-it-works" className="block">
                  <Button variant="outline" className="w-full justify-between group">
                    How It Works
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/career-guidance/paths" className="block">
                  <Button variant="outline" className="w-full justify-between group">
                    Career Paths We Cover
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/career-guidance/mental-health" className="block">
                  <Button variant="outline" className="w-full justify-between group">
                    Mental Health Support
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/success-stories" className="block">
                  <Button variant="outline" className="w-full justify-between group">
                    Success Stories
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
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
              Ready to Find Your <span className="text-accent">Path?</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Take the first step towards career clarity. Book a session with our mentors today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Book Your Session
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

export default CareerGuidancePage;
