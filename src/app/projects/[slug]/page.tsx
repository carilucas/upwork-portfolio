import { myProjects } from "@/constants";
import { redirect } from "next/navigation";
import { HeroProject, Seccion2, Section3 } from "./ux";
import { ProjectsPagination } from "@/components";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  if (!slug) redirect("/#work");
  const project = myProjects.find((project) => project.slug === slug);
  if (!project) redirect("/#work");

  const { mockup, title, projectDesc, mockup2, tags } = project;
  return (
    <>
      <HeroProject
        img={mockup}
        title={title}
        subtitle={projectDesc[0].subtitle}
        description={projectDesc[0].desc}
      />
      <Seccion2
        subtitle={projectDesc[1].subtitle}
        description={projectDesc[1].desc}
        techStack={tags}
      />
      <Section3
        subtitle1={projectDesc[2].subtitle}
        description1={projectDesc[2].desc}
        subtitle2={projectDesc[3].subtitle}
        description2={projectDesc[3].desc}
        img={mockup2 || ''}
        href={project.href}
      />
      <ProjectsPagination slug={slug} />
    </>
  );
}
