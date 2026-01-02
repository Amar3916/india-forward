import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Building2, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-6 px-5 py-2 text-sm font-semibold text-accent bg-accent/20 rounded-full border border-accent/30">
              🇮🇳 Empowering India's Future
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            Building India's Future —{" "}
            <span className="text-accent">Careers, Exams & Startups</span>{" "}
            Powered by Technology
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Career guidance for individuals. OTRAS for government exam systems. 
            Technology & startup support for India's builders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/career-guidance">
              <Button variant="hero" size="xl" className="group">
                <Target className="h-5 w-5" />
                Get Career Guidance
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/otras">
              <Button variant="hero-outline" size="xl" className="group">
                <Building2 className="h-5 w-5" />
                Explore OTRAS
              </Button>
            </Link>
            <Link to="/startup-support">
              <Button variant="hero-outline" size="xl" className="group">
                <Rocket className="h-5 w-5" />
                Start Your Startup Journey
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "10K+", label: "Careers Guided" },
            { value: "50+", label: "Government Partners" },
            { value: "100+", label: "Startups Supported" },
            { value: "99.9%", label: "Platform Uptime" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
            >
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
