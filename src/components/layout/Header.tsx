import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navigation = {
  products: [
    { name: "OTRAS", href: "/otras", description: "One-Time Registration & Application System" },
    { name: "Career Guidance", href: "/career-guidance", description: "Expert 1-to-1 career mentorship" },
  ],
  careerSubmenu: [
    { name: "How It Works", href: "/career-guidance/how-it-works" },
    { name: "Career Paths", href: "/career-guidance/paths" },
    { name: "Mental Health Support", href: "/career-guidance/mental-health" },
    { name: "Success Stories", href: "/success-stories" },
  ],
  services: [
    { name: "Technology Services", href: "/services#technology" },
    { name: "Digital Marketing", href: "/services#marketing" },
    { name: "Enterprise & Government", href: "/services#enterprise" },
  ],
  main: [
    { name: "Home", href: "/" },
    { name: "Startup Support", href: "/startup-support" },
    { name: "Why Us", href: "/why-maawaabro" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-xl font-bold text-primary-foreground">M</span>
          </div>
          <span className="text-xl font-bold text-foreground">Maawaabro</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <Button variant={isActive("/") ? "nav-active" : "nav"} size="sm">
                    Home
                  </Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-medium">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <div className="grid gap-3">
                      {navigation.products.map((item) => (
                        <NavigationMenuLink asChild key={item.name}>
                          <Link
                            to={item.href}
                            className="block rounded-lg p-3 hover:bg-muted transition-colors"
                          >
                            <div className="font-semibold text-foreground">{item.name}</div>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                      <div className="border-t pt-3 mt-2">
                        <p className="text-xs font-medium text-muted-foreground mb-2">Career Guidance</p>
                        <div className="grid grid-cols-2 gap-2">
                          {navigation.careerSubmenu.map((item) => (
                            <NavigationMenuLink asChild key={item.name}>
                              <Link
                                to={item.href}
                                className="text-sm text-foreground hover:text-accent transition-colors"
                              >
                                {item.name}
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-medium">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[300px] p-4">
                    <div className="grid gap-2">
                      {navigation.services.map((item) => (
                        <NavigationMenuLink asChild key={item.name}>
                          <Link
                            to={item.href}
                            className="block rounded-lg p-3 hover:bg-muted transition-colors font-medium text-foreground"
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/startup-support">
                  <Button variant={isActive("/startup-support") ? "nav-active" : "nav"} size="sm">
                    Startup Support
                  </Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/why-maawaabro">
                  <Button variant={isActive("/why-maawaabro") ? "nav-active" : "nav"} size="sm">
                    Why Us
                  </Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/resources">
                  <Button variant={isActive("/resources") ? "nav-active" : "nav"} size="sm">
                    Resources
                  </Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Link to="/contact">
            <Button variant="outline" size="sm">
              Request Pilot
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="accent" size="sm">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              <Link
                to="/"
                className="block py-2 text-foreground font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Products Section */}
              <div>
                <button
                  onClick={() => setExpandedSection(expandedSection === "products" ? null : "products")}
                  className="flex w-full items-center justify-between py-2 text-foreground font-medium"
                >
                  Products
                  <ChevronDown className={cn("h-4 w-4 transition-transform", expandedSection === "products" && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {expandedSection === "products" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2 overflow-hidden"
                    >
                      {navigation.products.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block py-2 text-muted-foreground hover:text-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                      {navigation.careerSubmenu.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block py-2 text-muted-foreground hover:text-foreground text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Section */}
              <div>
                <button
                  onClick={() => setExpandedSection(expandedSection === "services" ? null : "services")}
                  className="flex w-full items-center justify-between py-2 text-foreground font-medium"
                >
                  Services
                  <ChevronDown className={cn("h-4 w-4 transition-transform", expandedSection === "services" && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {expandedSection === "services" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2 overflow-hidden"
                    >
                      {navigation.services.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block py-2 text-muted-foreground hover:text-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/startup-support"
                className="block py-2 text-foreground font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Startup Support
              </Link>
              <Link
                to="/why-maawaabro"
                className="block py-2 text-foreground font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Us
              </Link>
              <Link
                to="/resources"
                className="block py-2 text-foreground font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>

              <div className="pt-4 space-y-2 border-t border-border">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Request Pilot
                  </Button>
                </Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="accent" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
