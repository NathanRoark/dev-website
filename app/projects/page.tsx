import ProjectCard from "@/components/project-card"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { cn } from "@/lib/utils"

const projectsData = [
  {
    name: "Music Blog",
    description:
      "Static Music Blog for showing and talking about albums that I like.",
    techStack: ["NextJS", "TailwindCSS", "TypeScript", "Markdown"],
    link: "https://music.nathanroark.dev",
    repo: "https://github.com/nathanroark/music-website",
  },
  {
    name: "Pokedex",
    description: "Pokedex App using the T3 stack.",
    techStack: ["NextJS", "tRPC", "Prisma", "TailwindCSS", "TypeScript"],
    link: "https://pokedex.nathanroark.dev",
    repo: "https://github.com/nathanroark/pokedex",
  },
  {
    name: "Advent of Code Test Suite",
    description: "My Advent of Code Challenges in TypeScript.",
    techStack: ["React", "Jotai", "NextJS", "TypeScript", "TailwindCSS"],
    link: "https://advent-of-code.nathanroark.dev/",
    repo: "https://github.com/nathanroark/advent-of-code-next",
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
      "This website! My dev website to show my software engineering self.",
    techStack: ["NextJS", "TypeScript", "TailwindCSS"],
    link: "https://nathanroark.dev",
    repo: "https://github.com/nathanroark/dev-website",
  },
]

export default function ProjectsPage() {
  const fire = "from-amber-500 via-red-500 to-yellow-500"
  const atmosphere = "from-green-300 via-blue-500 to-purple-600"
  const gradientFire = "bg-gradient-to-br " + fire
  const gradientAtmosphere = "bg-gradient-to-br " + atmosphere
  return (
    <div className="container relative">
      <section className="px-24 pb-32 text-gray-300  ">
        <PageHeader className="pb-8 ">
          <PageHeaderHeading className="flex items-center justify-center italic">
            <div className="flex flex-col">
              <div
                className={cn(
                  gradientAtmosphere,
                  "bg-clip-text pb-4 pr-16  text-transparent"
                )}
              >
                <div className="text-2xl font-black sm:text-4xl lg:text-6xl xl:text-7xl">
                  Projects
                </div>
              </div>
              <div className="text-lg font-normal sm:text-xl lg:text-2xl xl:text-3xl">
                Open source projects I have worked on.
              </div>
            </div>
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
      </section>
    </div>
  )
}
