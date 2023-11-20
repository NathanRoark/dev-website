// import Skills from "@/components/Skills"
// import { backendSkills, frontendSkills, otherSkills } from "@/utils/skills"
const atmosphere = "from-green-300 via-blue-500 to-purple-600 font-sans"

const gradientAtmosphere = "bg-gradient-to-br " + atmosphere

export default function ResumePage() {
  return (
    <div className="container relative py-8">
      <section>
        <div className="pb-32">
          <div className="flex justify-between gap-x-2 text-transparent sm:gap-0">
            <div
              className={`w-fit bg-clip-text pb-4  md:w-1/2 lg:w-1/2 ${gradientAtmosphere}`}
            >
              <h1 className="pb-4 font-mono text-5xl font-extrabold  leading-none sm:text-[2rem] lg:text-[3rem] ">
                Resume
              </h1>
            </div>
          </div>
          <ul className="flex flex-col gap-y-16 pt-8">
            <li>
              <Summary />
            </li>
            {/* <li>
            <ProgrammingLanguages />
          </li> */}
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
      </section>
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
      <ul className="list-disc pl-6">
        <li>Full Stack Software Engineer</li>
        <li>3 years of professional experience</li>
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
      <ul className="list-disc pl-8">
        <li>Web Development</li>
        <span className="pl-4 text-sm md:text-lg">
          Vercel | Digital Ocean | PlanetScale
        </span>
        <li>Native App Development</li>
        <span className="pl-4 text-sm md:text-lg">ElectronJS | Qt | Tauri</span>
        <li>Military Networks</li>
        <span className="pl-4 text-sm md:text-lg">Link16 | DIS | VMF</span>
        <li>Modeling and Simulation</li>
        <span className="pl-4 text-sm md:text-lg">
          Agent-based | Discrete Event | Monte Carlo | Distributed
        </span>
      </ul>
    </>
  )
}

// const ProgrammingLanguages = () => {
//   return (
//     <>
//       <h3
//         className={`bg-clip-text pb-4 font-mono text-3xl font-extrabold leading-none tracking-tight  text-transparent sm:text-[2rem] ${gradientAtmosphere}`}
//       >
//         Programming Languages & Tools
//       </h3>
//       <div className="flex w-full flex-col sm:flex-row">
//         <div className="py-2 pr-2 ">
//           <h4 className="text-center text-lg font-bold">Frontend</h4>
//           <hr />
//           <Skills skills={frontendSkills} className="odd:lg:flex-row-reverse" />
//         </div>
//         <div className="px-2 py-2 ">
//           <h4 className="text-center text-lg font-bold">Backend</h4>
//           <hr />
//           <Skills skills={backendSkills} className="odd:lg:flex-row-reverse" />
//         </div>
//         <div className="py-2 pl-2 ">
//           <h4 className="text-center text-lg font-bold">Other</h4>
//           <hr />
//           <Skills skills={otherSkills} className="odd:lg:flex-row-reverse" />
//         </div>
//       </div>
//     </>
//   )
// }

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
