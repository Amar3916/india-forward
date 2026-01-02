import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Section, SectionHeader } from "@/components/shared";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SuccessStoriesPage = () => {
  const stories = [
    { name: "Rahul S.", role: "Cleared UPSC Prelims", quote: "The guidance helped me focus on what truly matters." },
    { name: "Priya M.", role: "Software Engineer at MNC", quote: "Found clarity after years of confusion." },
    { name: "Amit K.", role: "Startup Founder", quote: "Maawaabro helped me launch my MVP in 3 months." },
  ];

  return (
    <PageLayout>
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Success Stories</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real people, real results. See how we've helped others achieve their goals.
            </p>
          </motion.div>
        </div>
      </section>
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Card key={story.name} variant="feature">
              <CardHeader>
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}</div>
                <p className="text-foreground italic mb-4">"{story.quote}"</p>
                <p className="font-bold text-foreground">{story.name}</p>
                <p className="text-sm text-muted-foreground">{story.role}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button variant="accent" size="lg" className="group">
              Start Your Success Story <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
};

export default SuccessStoriesPage;
