import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout";
import { Section, SectionHeader } from "@/components/shared";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Newspaper, Bell } from "lucide-react";

const ResourcesPage = () => {
  const categories = [
    { icon: <BookOpen />, title: "Career Insights", description: "Expert advice on career planning and growth." },
    { icon: <Newspaper />, title: "Government Exam Updates", description: "Latest news on government exams and notifications." },
    { icon: <Bell />, title: "Announcements", description: "Updates from Maawaabro and new features." },
  ];

  return (
    <PageLayout>
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Resources</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Blogs, guides, and updates to help you on your journey.
            </p>
          </motion.div>
        </div>
      </section>
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Card key={cat.title} variant="feature" className="text-center">
              <CardHeader className="items-center">
                <div className="h-14 w-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">{cat.icon}</div>
                <CardTitle>{cat.title}</CardTitle>
                <CardDescription>{cat.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-12">Blog posts coming soon!</p>
      </Section>
    </PageLayout>
  );
};

export default ResourcesPage;
