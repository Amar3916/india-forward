import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Building2, Code, Rocket, Palette, Globe, 
  ArrowRight, CheckCircle2 
} from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Section, SectionHeader, AnimatedCard } from "@/components/shared";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const careerPaths = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Government Exams",
    description: "UPSC, State PSC, SSC, Banking, Railways, and more government opportunities.",
    paths: [
      "Civil Services (IAS, IPS, IFS)",
      "State Civil Services",
      "SSC CGL, CHSL, MTS",
      "Banking (IBPS, SBI, RBI)",
      "Railways, Defence, Teaching",
    ],
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "IT & Software",
    description: "Technology careers in development, data science, cybersecurity, and more.",
    paths: [
      "Software Development",
      "Data Science & Analytics",
      "Cybersecurity",
      "Cloud Computing",
      "Product Management",
    ],
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Startups & Business",
    description: "Entrepreneurship, startup roles, and business development opportunities.",
    paths: [
      "Starting Your Own Venture",
      "Joining Early-Stage Startups",
      "Business Development",
      "Operations & Strategy",
      "Funding & Investment",
    ],
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Creative & Non-Traditional",
    description: "Design, content, media, and unconventional career paths.",
    paths: [
      "UX/UI Design",
      "Content Creation & Writing",
      "Digital Marketing",
      "Photography & Videography",
      "Gaming & Esports",
    ],
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "International Opportunities",
    description: "Global careers, higher education abroad, and international placements.",
    paths: [
      "Masters Abroad",
      "Work Visa Pathways",
      "Remote International Jobs",
      "International Organizations",
      "Study Abroad Planning",
    ],
  },
];

const CareerPathsPage = () => {
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
              Explore Options
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Career Paths <span className="text-accent">We Cover</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From government jobs to tech startups, creative fields to global opportunities — 
              we guide you through all possible career directions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Career Paths */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerPaths.map((path, index) => (
            <AnimatedCard key={path.title} delay={index * 0.1}>
              <Card variant="feature" className="h-full">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {path.icon}
                  </div>
                  <CardTitle className="text-xl">{path.title}</CardTitle>
                  <CardDescription className="mt-2">{path.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {path.paths.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedCard>
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
            Not Sure Which Path is Right?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our mentors can help you discover the best career path based on your 
            unique skills, interests, and goals.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg" className="group">
              Get Personalized Guidance
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </Section>
    </PageLayout>
  );
};

export default CareerPathsPage;
