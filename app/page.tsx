import Link from "next/link"
import LinkCard from "@/components/link-card"
import { cn } from "@/lib/utils"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

export default function IndexPage() {
  const gradient = "bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400"
  return (
    <div className="container relative pb-8">
      <PageHeader className="pb-8 ">
        <PageHeaderHeading className="flex items-center justify-center">
          <a className="flex flex-col">
            <div
              className={cn(gradient, "bg-clip-text pr-16  text-transparent")}
            >
              <span className="text-4xl font-black italic sm:text-6xl lg:text-8xl xl:text-9xl">
                Nathan Roark
              </span>
            </div>
            <span className="text-2xl font-normal sm:text-4xl lg:text-6xl xl:text-7xl">
              Software Engineer
            </span>
          </a>
        </PageHeaderHeading>
        <PageHeaderDescription className="text-base">
          <p className="py-2 text-xl sm:text-2xl lg:text-4xl">
            Welcome to my developer website.
          </p>
          <p className="py-2">
            I&apos;m a <b>Full Stack Software Engineer</b> at{" "}
            <Link
              className="font-bold text-blue-600 opacity-75 hover:opacity-100 dark:text-blue-400"
              href="https://www.trideum.com/"
            >
              Trideum
            </Link>{" "}
            where I own the frontend of many of our applications and build tools
            for engineers. I&apos;m a specializing in{" "}
            <b>React, Next.js and C++</b>. I have a Undergraduate Degree in
            Computer Engineering from The University of Alabama in Huntsville.
            And I&apos;m currently working on my{" "}
            <b>Masters in Computer Science</b> from The University of Alabama in
            Huntsville.
          </p>
        </PageHeaderDescription>
        <div className="flex w-full items-center space-x-4 pb-8  pt-4 md:pb-10 lg:pt-8">
          <LinkCard
            name="Projects"
            description="All of my projects, open source packages, and apps"
            link="/projects"
          />
          <LinkCard
            name="Resume"
            description="Semi-formal version of my resume in a web format"
            link="/resume"
          />
          <LinkCard
            name="Links"
            description="Semi-formal version of my resume in a web format"
            link="/links"
          />
        </div>
      </PageHeader>
      <div className="flex flex-col justify-center gap-2 pt-16 md:flex-row "></div>
    </div>
  )
}
