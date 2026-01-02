import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const footerLinks = {
  products: [
    { name: "OTRAS Platform", href: "/otras" },
    { name: "Career Guidance", href: "/career-guidance" },
    { name: "How It Works", href: "/career-guidance/how-it-works" },
    { name: "Career Paths", href: "/career-guidance/paths" },
  ],
  services: [
    { name: "Technology Services", href: "/services#technology" },
    { name: "Digital Marketing", href: "/services#marketing" },
    { name: "Enterprise & Government", href: "/services#enterprise" },
    { name: "Startup Support", href: "/startup-support" },
  ],
  company: [
    { name: "About Us", href: "/why-maawaabro" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <span className="text-xl font-bold text-accent-foreground">M</span>
                </div>
                <span className="text-xl font-bold">Maawaabro</span>
              </Link>
              <p className="text-primary-foreground/80 max-w-sm mb-6 leading-relaxed">
                Building India's Future — Careers, Exams & Startups Powered by Technology. 
                We enable careers, simplify exams, and empower innovation.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:info@maawaabro.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@maawaabro.com</span>
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </a>
                <div className="flex items-start gap-3 text-primary-foreground/80">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>India</span>
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Maawaabro. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <Link to="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
