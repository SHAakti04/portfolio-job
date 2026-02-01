import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import CustomCursor from "@/components/CustomCursor";
import CertificationsEducationSection from "@/components/CertificationsEducationSection";
const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "work", "services", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Toaster position="bottom-right" />
      <Header activeSection={activeSection} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <Skills/>
        <ProjectsSection />
        <WorkSection />
        <ServicesSection />
       
         <CertificationsEducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
// import { useState, useEffect } from "react";
// import { Toaster } from "@/components/ui/sonner";
// import Header from "@/components/Header";
// import HeroSection from "@/components/HeroSection";
// import AboutSection from "@/components/AboutSection";
// import ProjectsSection from "@/components/ProjectsSection";
// import WorkSection from "@/components/WorkSection";
// import ServicesSection from "@/components/ServicesSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
// import CertificationsEducationSection from "@/components/CertificationsEducationSection";
// import ContactSection from "@/components/ContactSection";
// import Footer from "@/components/Footer";
// import CustomCursor from "@/components/CustomCursor";

// const Index = () => {
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = [
//         "home",
//         "about",
//         "projects",
//         "work",
//         "services",
//         "testimonials",
//         "certifications",
//         "contact",
//       ];

//       const scrollPosition = window.scrollY + 200;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (
//             scrollPosition >= offsetTop &&
//             scrollPosition < offsetTop + offsetHeight
//           ) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
//       <CustomCursor />
//       <Toaster position="bottom-right" />
//       <Header activeSection={activeSection} />

//       <main>
//         <HeroSection />
//         <AboutSection />
//         <ProjectsSection />
//         <WorkSection />
//         <ServicesSection />
//         <TestimonialsSection />
//         <CertificationsEducationSection />
//         <ContactSection />
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Index;
