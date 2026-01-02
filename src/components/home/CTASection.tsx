import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Build{" "}
            <span className="text-accent">Something Great?</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
            Whether you need career guidance, a government-grade exam platform, or 
            technology support for your startup — we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Get Started Today
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/otras">
              <Button variant="hero-outline" size="xl">
                Request OTRAS Demo
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
