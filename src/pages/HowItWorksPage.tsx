import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Users, Map, ClipboardList, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Section, SectionHeader } from "@/components/shared";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: <Phone className="h-8 w-8" />,
    title: "Discovery Call",
    description: "We start with a 30-minute call to understand your current situation, challenges, and aspirations.",
    details: [
      "Understanding your background",
      "Identifying pain points",
      "Setting initial expectations",
    ],
  },
  {
    number: "02",
    icon: <Users className="h-8 w-8" />,
    title: "Skill & Interest Mapping",
    description: "Deep dive into your skills, interests, personality, and market opportunities.",
    details: [
      "Skills assessment",
      "Interest exploration",
      "Market opportunity analysis",
    ],
  },
  {
    number: "03",
    icon: <Map className="h-8 w-8" />,
    title: "Career Path Blueprint",
    description: "Based on our analysis, we create a personalized career roadmap tailored to your goals.",
    details: [
      "Short-term milestones",
      "Long-term vision",
      "Alternative paths",
    ],
  },
  {
    number: "04",
    icon: <ClipboardList className="h-8 w-8" />,
    title: "Action Plan + Follow-ups",
    description: "Concrete action items with regular check-ins to ensure you stay on track.",
    details: [
      "Weekly/monthly tasks",
      "Progress tracking",
      "Continuous support",
    ],
  },
];

const HowItWorksPage = () => {
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
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How Career Guidance <span className="text-accent">Works</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A structured, personalized approach to help you find clarity and direction in your career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <Section>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-border hidden md:block" />
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Number & Icon */}
                <div className="shrink-0">
                  <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center relative z-10">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8 md:pb-12">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-accent">STEP {step.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        <span className="text-sm text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-muted-foreground mb-6">
            Book your discovery call today and take the first step towards career clarity.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg" className="group">
              Book Discovery Call
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </Section>
    </PageLayout>
  );
};

export default HowItWorksPage;
