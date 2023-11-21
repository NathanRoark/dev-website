import ProjectCard from "@/components/project-card"
import { PageHeader, PageHeaderHeading } from "@/components/page-header"

const projectsData = [
  {
    name: "Music Blog",
    description:
      "Static Music Blog for showing and talking about albums that I like.",
    techStack: ["Astro", "TailwindCSS", "TypeScript", "Markdown"],
    link: "https://music.nathanroark.dev",
    repo: "https://github.com/nathanroark/music-website",
  },
  {
    name: "Modeling & Simulation",
    description: "A collection of my Modeling and Simulation projects.",
    techStack: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    link: "https://modeling-and-simulation.nathanroark.dev/",
    repo: "https://github.com/nathanroark/modeling-and-simulation",
  },
  {
    name: "Dev Website & Portfolio",
    description:
      "This website! My developer website to show my software engineering self.",
    techStack: ["NextJS", "TypeScript", "TailwindCSS"],
    link: "https://nathanroark.dev",
    repo: "https://github.com/nathanroark/dev-website",
  },
]

export default function ProjectsPage() {
  const horizon = "from-[#6200EB] via-[#EC417A] to-[#FDD835]"
  const atmosphere = "from-green-300 via-blue-500 to-purple-600"
  const sunset = "from-indigo-500 via-pink-500 to-yellow-500"
  return (
    <div className="container relative pb-32 text-gray-300  ">
      <PageHeader className="pb-8">
        <PageHeaderHeading className="flex flex-col">
          <div className="flex justify-start">
            <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text pb-4 pr-16  text-transparent">
              <span className="text-4xl font-black lg:text-6xl xl:text-7xl">
                Projects
              </span>
            </div>
          </div>

          <span className="text-xl font-semibold lg:text-2xl xl:text-3xl">
            Open source projects I have worked on.
          </span>
        </PageHeaderHeading>
      </PageHeader>

      <div className="grid grid-cols-1  gap-8 md:grid-cols-2  xl:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.name + "-card"}
            name={project.name}
            description={project.description}
            link={project.link}
            techStack={project.techStack}
            repo={project.repo}
          />
        ))}
      </div>
    </div>
  )
}
