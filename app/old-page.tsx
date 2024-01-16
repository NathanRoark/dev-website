// import Skills from "@/components/Skills"
// import { backendSkills, frontendSkills, otherSkills } from "@/utils/skills"
import { PageHeader, PageHeaderHeading } from "@/components/page-header"
const spearmint =
  "bg-gradient-to-r from-green-300 via-green-400 to-green-500 font-sans"
const gradientAtmosphere = "bg-gradient-to-br " + spearmint

export default function ResumePage() {
  return (
    <div className="container relative pb-32 text-gray-300">
      <div className="pb-32">
        <PageHeader className="pb-8">
          <PageHeaderHeading className="flex items-center justify-center ">
            <div className="flex flex-col">
              <div className="bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text pb-4 pr-16  text-transparent">
                <span className="text-4xl font-black lg:text-6xl xl:text-7xl">
                  Resume
                </span>
              </div>
              <span className="text-xl font-semibold lg:text-2xl xl:text-3xl">
                My professional resume in web form.
              </span>
            </div>
          </PageHeaderHeading>
        </PageHeader>
        <ul className="flex flex-col gap-y-16 pt-8">
          <li>
            <Summary />
          </li>
          <li>
            <Proficiencies />
          </li>
          <li>
            <ProfExperience />
          </li>
          <li>
            <Education />
          </li>
        </ul>
      </div>
    </div>
  )
}

const Summary = () => {
  return (
    <>
      <h3
        className={`bg-clip-text pb-4 font-mono text-3xl font-extrabold leading-none tracking-tight  text-transparent sm:text-[2rem] ${gradientAtmosphere}`}
      >
        Summary
      </h3>
      <hr />
      <ul className="list-disc pl-6 text-lg">
        <li>Full Stack Software Engineer</li>
        <li>4 years of professional experience</li>
        <li>Secret Security Clearance</li>
        <li>
          Worked on teams in collaborative innovative and technical environments
        </li>
        <li>Specializing in JavaScript Frontend and C++ Backend development</li>
        <li>
          Passionate about creating aesthetically great projects with efficient
          reusable, and readable code
        </li>
      </ul>
    </>
  )
}

const Proficiencies = () => {
  return (
    <>
      <h3
        className={`bg-clip-text pb-4 font-mono text-3xl font-extrabold leading-none tracking-tight  text-transparent sm:text-[2rem] ${gradientAtmosphere}`}
      >
        Core Skills Technologies & Proficiencies
      </h3>
      <hr />
      <ul className="list-disc space-y-2">
        <li className="flex flex-col">
          <strong>Native App Development</strong>
          <span className="pl-4">Qt | ElectronJS | Tauri</span>
        </li>
        <li className="flex flex-col">
          <strong>Frontend Technologies</strong>
          <span className="pl-4">
            React | Next.js | TailwindCSS | Jotai | Zustand | D3.js | Astro
          </span>
        </li>
        <li className="flex flex-col">
          <strong>Backend Technologies</strong>
          <span className="pl-4">C++ | Rust | Node.js | Python</span>
        </li>
        <li className="flex flex-col">
          <strong> Database Systems</strong>
          <span className="pl-4">PostgreSQL | MongoDB | SQLite | MySQL</span>
        </li>
      </ul>
    </>
  )
}

const ProfExperience = () => {
  return (
    <>
      <h3
        className={`bg-clip-text pb-4 font-mono text-3xl font-extrabold leading-none tracking-tight  text-transparent sm:text-[2rem] ${gradientAtmosphere}`}
      >
        Professional Experience
      </h3>
      <hr />
      <div className="flex flex-col justify-between gap-y-6">
        <div className="flex flex-col justify-between sm:flex-row">
          <div className="flex flex-col justify-between">
            <p>
              <strong>Software Engineer</strong>
            </p>
            <p>March 2021 - Present</p>
          </div>
          <div className="flex flex-col justify-between sm:text-right">
            <p>Trideum</p>
            <p>Huntsville, AL</p>
          </div>
        </div>
        <div className="flex flex-col justify-between sm:flex-row">
          <div className="flex flex-col justify-between">
            <p>
              <strong>Computer Engineering Intern</strong>
            </p>
            <p>May 2017 - August 2017</p>
          </div>
          <div className="flex flex-col justify-between sm:text-right">
            <p>a.i. Solutions</p>
            <p>Huntsville, AL</p>
          </div>
        </div>
      </div>
    </>
  )
}

const Education = () => {
  return (
    <>
      <h3
        className={`bg-clip-text pb-4 font-mono text-3xl font-extrabold leading-none tracking-tight  text-transparent sm:text-[2rem] ${gradientAtmosphere}`}
      >
        Education
      </h3>
      <hr />{" "}
      <div className="flex flex-col justify-between gap-y-6">
        <div className="flex flex-col  justify-between sm:flex-row">
          <div className="flex flex-col justify-between">
            <p>
              <strong>Masters in Computer Science | 4.0 GPA</strong>
            </p>
            <p>Expected December 2024</p>
          </div>
          <div className="flex flex-col justify-between sm:text-right">
            <p>UAH</p>
            <p>Huntsville, AL</p>
          </div>
        </div>
        <div className="flex flex-col justify-between sm:flex-row">
          <div className="flex flex-col justify-between">
            <p>
              <strong>Bachelors in Computer Engineering | Deans List</strong>
            </p>
            <p>Achieved December 2020</p>
          </div>
          <div className="flex flex-col justify-between sm:text-right">
            <p>UAH</p>
            <p>Huntsville, AL</p>
          </div>
        </div>
      </div>
    </>
  )
}
