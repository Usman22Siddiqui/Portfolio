"use client";

import { Project } from "@/data/projects";
import SmoothScroller from "@/components/project/SmoothScroller";
import ProjectNavbar from "@/components/project/ProjectNavbar";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectOverview from "@/components/project/ProjectOverview";
import ScrollSequence from "@/components/project/ScrollSequence";
import FeatureHighlight from "@/components/project/FeatureHighlight";
import ScreenshotGallery from "@/components/project/ScreenshotGallery";
import TechStackSection from "@/components/project/TechStackSection";
import NextProject from "@/components/project/NextProject";

interface ProjectPageClientProps {
  project: Project;
  nextProject: Project;
}

export default function ProjectPageClient({ project, nextProject }: ProjectPageClientProps) {
  // Use explicit feature screenshots mapping
  const featureScreenshots = project.featureScreenshots || [];

  return (
    <main className="relative bg-[#08080a] min-h-screen selection:bg-accent/30 selection:text-white overflow-x-clip">
      <SmoothScroller>
        <ProjectNavbar
          title={project.title}
          accentColor={project.accentColor}
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
        />

        {/* Hero */}
        <ProjectHero
          title={project.title}
          subtitle={project.subtitle}
          heroDescription={project.heroDescription}
          category={project.category}
          accentColor={project.accentColor}
          gradient={project.gradient}
        />

        {/* Project Overview */}
        <ProjectOverview
          description={project.description}
          overview={project.overview}
          accentColor={project.accentColor}
          architecture={project.architecture}
        />

        {/* Scroll-driven Screenshot Showcase */}
        <ScrollSequence
          screenshots={project.screenshots}
          title={project.title}
          accentColor={project.accentColor}
          liveUrl={project.liveUrl}
        />

        {/* Feature Highlights */}
        {project.features.map((feature, i) => (
          <FeatureHighlight
            key={i}
            title={feature}
            description={project.featureDescriptions?.[i] || `${feature} — a core capability that demonstrates the project's technical depth and thoughtful design approach.`}
            screenshotSrc={featureScreenshots[i] || undefined}
            projectTitle={project.title}
            accentColor={project.accentColor}
            reverse={i % 2 === 1}
            liveUrl={project.liveUrl}
            index={i}
          />
        ))}

        {/* Screenshot Gallery */}
        <ScreenshotGallery
          screenshots={project.screenshots}
          title={project.title}
          accentColor={project.accentColor}
          liveUrl={project.liveUrl}
        />

        {/* Tech Stack & Challenges */}
        <TechStackSection
          techStack={project.techStack}
          accentColor={project.accentColor}
          challenges={project.challenges}
          results={project.results}
        />

        {/* Next Project */}
        <NextProject project={nextProject} />

        {/* Footer */}
        <footer className="relative z-20 py-16 text-center text-white/30 border-t border-white/5 bg-[#08080a]">
          <p className="text-sm">
            © {new Date().getFullYear()} Muhammad Usman Siddiqui. Crafted with Next.js & Framer Motion.
          </p>
        </footer>
      </SmoothScroller>
    </main>
  );
}
