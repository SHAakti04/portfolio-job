import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

const projects = [
  {
    id: 1,
    number: "01",
    category: "Web",
    title: "Barbershop\nwebsite",
    subtitle: "Technologies used",
    description: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
    image: project1,
  },
  {
    id: 2,
    number: "02",
    category: "Design",
    title: "Interface Design\nFor Ice Cream Shop",
    subtitle: "Technologies used",
    description: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
    image: project2,
  },
  {
    id: 3,
    number: "03",
    category: "Web",
    title: "SEO For Coffee\nWebsites",
    subtitle: "Technologies used",
    description: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
    image: project3,
  },
  {
    id: 4,
    number: "04",
    category: "Design",
    title: "Web Design\nFor Restaurant",
    subtitle: "Technologies used",
    description: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
    image: project4,
  },
  {
    id: 5,
    number: "05",
    category: "Web",
    title: "Fast Food\nWebsite",
    subtitle: "Technologies used",
    description: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
    image: project5,
  },
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section" id="projects">
      <div className="container">
        {/* Section title */}
        <h2
          className={`section__title font-display transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          I Make Incredible <br />
          <span>Projects</span>
        </h2>

        {/* Projects Swiper */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="projects-swiper pb-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: (typeof projects)[0];
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 card-hover">
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
        
        {/* Number overlay */}
        <span className="absolute top-4 left-4 font-display text-4xl font-bold text-primary/30">
          {project.number}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-primary text-sm font-medium uppercase tracking-wider">
          {project.category}
        </span>
        <h3 className="font-display text-xl font-semibold mt-2 mb-3 whitespace-pre-line leading-tight">
          {project.title}
        </h3>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
          {project.subtitle}
        </p>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </div>
    </article>
  );
};

export default ProjectsSection;
