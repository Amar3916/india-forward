import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Section } from "@/components/shared";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24-48 hours.",
    });
  };

  return (
    <PageLayout>
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-accent bg-accent/10 rounded-full">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's <span className="text-accent">Talk</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question or want to work with us? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: <Mail />, title: "Email", value: "info@maawaabro.com", href: "mailto:info@maawaabro.com" },
                { icon: <Phone />, title: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: <MapPin />, title: "Location", value: "India" },
              ].map((item) => (
                <Card key={item.title} variant="feature">
                  <CardHeader className="flex-row items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <CardTitle className="text-base">{item.title}</CardTitle>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground hover:text-accent transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <CardDescription>{item.value}</CardDescription>
                      )}
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <Card variant="elevated" className="lg:col-span-2 p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inquiry">Inquiry Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="career">Career Guidance</SelectItem>
                      <SelectItem value="otras">OTRAS Pilot / Demo</SelectItem>
                      <SelectItem value="startup">Startup Consultation</SelectItem>
                      <SelectItem value="general">General Enquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your needs..." rows={5} required />
                </div>
                <Button type="submit" variant="accent" size="lg" className="w-full group">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
