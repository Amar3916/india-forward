import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, RefreshCw, Users, Brain, ArrowRight, AlertTriangle } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Section, SectionHeader, AnimatedCard } from "@/components/shared";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const supportAreas = [
  {
    icon: <RefreshCw className="h-8 w-8" />,
    title: "Failure Handling",
    description: "Failed an exam? Didn't get the job? We help you process, learn, and bounce back stronger.",
    points: [
      "Processing rejection constructively",
      "Learning from setbacks",
      "Building resilience",
      "Creating comeback strategies",
    ],
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Loneliness Support",
    description: "Career journeys can be lonely. We provide a supportive space to share and grow.",
    points: [
      "Regular check-ins",
      "Peer connection opportunities",
      "Mentor support system",
      "Community engagement",
    ],
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Decision Paralysis Help",
    description: "Too many options? Can't decide? We help you cut through the noise and make clarity.",
    points: [
      "Breaking down decisions",
      "Weighing pros and cons",
      "Setting priorities",
      "Taking action despite uncertainty",
    ],
  },
];

const MentalHealthPage = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-accent bg-accent/10 rounded-full">
              Supportive Guidance
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mental Health & <span className="text-accent">Confidence Support</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Career struggles affect mental well-being. We provide supportive guidance 
              to help you navigate these challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <Section className="py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 flex gap-4">
            <AlertTriangle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Important Note</h3>
              <p className="text-muted-foreground text-sm">
                We provide career-related mental health support and guidance, <strong>not therapy</strong>. 
                If you're experiencing severe mental health issues, please consult a licensed mental health professional. 
                Our role is to support your career journey with empathy and understanding.
              </p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Support Areas */}
      <Section>
        <SectionHeader
          badge="How We Help"
          title="Support for Your Career Journey"
          description="We understand the emotional challenges of career decisions and transitions."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {supportAreas.map((area, index) => (
            <AnimatedCard key={area.title} delay={index * 0.1}>
              <Card variant="feature" className="h-full">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                    {area.icon}
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                  <CardDescription className="mt-2">{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <Heart className="h-4 w-4 text-accent shrink-0" />
                        <span className="text-sm text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
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
            <Heart className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              You're Not Alone in This
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Whatever you're going through in your career journey, we're here to listen, 
              support, and guide you forward.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Talk to a Mentor
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default MentalHealthPage;
