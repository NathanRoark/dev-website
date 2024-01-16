import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos"
import { Icons } from "@/components/icons"
import { ProjectCard } from "@/components/project-card"
import { PageHeader, PageHeaderHeading } from "@/components/page-header"
import { Section } from "@/components/ui/section"
import { RESUME_DATA } from "@/data/resume-data"

const projectsData = [
  {
    title: "Consultly",
    techStack: [
      "Side Project",
      "TypeScript",
      "Next.js",
      "Vite",
      "GraphQL",
      "WebRTC",
    ],
    description: "A platform to build and grow your online business",
    logo: ConsultlyLogo,
    link: {
      label: "consultly.com",
      href: "https://consultly.com/",
    },
  },
  {
    name: "Personal Blog",
    description: "Static Blog for showing and talking about media that I like.",
    techStack: ["Astro", "TailwindCSS", "TypeScript", "Markdown"],
    link: "https://nathanroark.com",
    repo: "https://github.com/nathanroark/blog",
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
      <Section className="print-force-new-page scroll-mb-16">
        <h2 className="text-xl font-bold">Projects</h2>
        <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
          {RESUME_DATA.projects.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={"link" in project ? project.link.href : undefined}
              />
            )
          })}
        </div>
      </Section>
      {/* <div className="grid grid-cols-1  gap-8 sm:px-16 md:grid-cols-2 md:px-8 lg:grid-cols-3  xl:px-0">
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
      </div> */}
    </div>
  )
}
