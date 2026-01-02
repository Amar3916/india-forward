import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OtrasPage from "./pages/OtrasPage";
import CareerGuidancePage from "./pages/CareerGuidancePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import CareerPathsPage from "./pages/CareerPathsPage";
import MentalHealthPage from "./pages/MentalHealthPage";
import ServicesPage from "./pages/ServicesPage";
import StartupSupportPage from "./pages/StartupSupportPage";
import WhyMaawaabroPage from "./pages/WhyMaawaabroPage";
import ContactPage from "./pages/ContactPage";
import ResourcesPage from "./pages/ResourcesPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/otras" element={<OtrasPage />} />
          <Route path="/career-guidance" element={<CareerGuidancePage />} />
          <Route path="/career-guidance/how-it-works" element={<HowItWorksPage />} />
          <Route path="/career-guidance/paths" element={<CareerPathsPage />} />
          <Route path="/career-guidance/mental-health" element={<MentalHealthPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/startup-support" element={<StartupSupportPage />} />
          <Route path="/why-maawaabro" element={<WhyMaawaabroPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
