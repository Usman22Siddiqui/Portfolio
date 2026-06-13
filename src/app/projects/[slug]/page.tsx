import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectPageClient from "./ProjectPageClient";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const ogImage = project.screenshots[0] || "/icon.png";

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Usman Siddiqui`,
      description: project.description,
      url: `https://usman-portfolio.vercel.app/projects/${project.slug}`,
      siteName: "Usman Siddiqui Portfolio",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${project.title} Preview`,
        }
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Usman Siddiqui`,
      description: project.description,
      images: [ogImage],
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Find next project
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return <ProjectPageClient project={project} nextProject={nextProject} />;
}
