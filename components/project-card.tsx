import React from "react"
import styles from "@/styles/projectCard.module.css"
import Link from "next/link"
import { Icons } from "@/components/icons"

const ProjectCard: React.FC<{
  name: string
  description: string
  link: string
  techStack: string[]
  repo?: string
}> = ({ name, description, link, techStack, repo }) => {
  const createSubtitle = (text: string) => {
    return text.split(" ").map((word, index) => (
      <span
        style={{
          transitionDelay: `${index * 40}ms`,
        }}
        className={styles.cardSubtitleWord}
        key={"subtitleIndex-" + text + "-" + index}
      >
        {word}
      </span>
    ))
  }

  return (
    <Link className="group" href={link} target="_blank">
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.cardTop}>
            <h3 className={styles.cardTitle}>
              {name}
              {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span> */}
            </h3>
            <h4 className={styles.cardSubtitle}>
              {createSubtitle(description).map((e) => e)}
            </h4>
          </div>
          <div className={styles.cardBottom}>
            <div className={styles.techStack}>
              {techStack.map((tech) => (
                <div key={name + tech} className={styles.techItem}>
                  {tech}
                </div>
              ))}
            </div>
            {repo && (
              <div className="group flex items-end justify-evenly rounded-lg p-1 text-white">
                <Link
                  className="h-fit w-fit rounded-lg bg-black p-2 duration-200 hover:scale-110"
                  href={repo}
                  target="_blank"
                >
                  <Icons.gitHub
                    strokeWidth="32"
                    fill="currentColor"
                    className="h-6 w-6"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
export default ProjectCard
