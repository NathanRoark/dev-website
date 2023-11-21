import React from "react"
import styles from "@/styles/projectCard.module.css"
import Link from "next/link"
import { Icons } from "@/components/icons"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <CardHeader className={styles.cardTop}>
            <CardTitle className={styles.cardTitle}>{name}</CardTitle>
            <div className={styles.cardSubtitle}>
              {createSubtitle(description).map((e) => e)}
            </div>
          </CardHeader>
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
                  className=""
                  href={repo}
                  target="_blank"
                  passHref
                  legacyBehavior
                >
                  <Icons.gitHub
                    strokeWidth="32"
                    fill="currentColor"
                    className="h-12 w-12 rounded-lg bg-black p-2 duration-200 hover:scale-110"
                  />
                </Link>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
export default ProjectCard
