import { Icons } from "@/components/icons"
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons"

import { PageHeader, PageHeaderHeading } from "@/components/page-header"
import Link from "next/link"
export default function AboutPage() {
  return (
    <div className="container relative pb-32 text-gray-300  ">
      <PageHeader className="pb-8">
        <PageHeaderHeading className="flex items-center justify-center ">
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-blue-300 to-purple-500 bg-clip-text pb-4 pr-16  text-transparent">
              <span className="text-4xl font-black lg:text-6xl xl:text-7xl">
                Links
              </span>
            </div>
            <span className="text-xl font-semibold lg:text-2xl xl:text-3xl">
              Links to places you can find me on the internet.
            </span>
          </div>
        </PageHeaderHeading>
      </PageHeader>
      <div className="flex max-w-md flex-col gap-6 pt-16">
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/nathan-roark/"
          className="flex w-full items-center justify-between rounded-lg border border-sky-500 p-4 text-sky-200
            no-underline transition-all hover:shadow hover:shadow-sky-500"
        >
          <div className="flex items-center">
            <LinkedInLogoIcon className="h-8 w-8" />
            <div className="ml-3">LinkedIn</div>
          </div>
          <Icons.arrowIcon className="w-6" />
        </Link>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/nathanroark"
          className="flex w-full items-center justify-between rounded-lg border border-emerald-500 p-4 text-emerald-200
           no-underline transition-all  hover:shadow hover:shadow-emerald-500"
        >
          <div className="flex items-center">
            <GitHubLogoIcon className="h-8 w-8" />
            <div className="ml-3">GitHub</div>
          </div>
          <Icons.arrowIcon className="w-6" />
        </Link>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://discordapp.com/users/nroark"
          className="flex w-full items-center justify-between rounded-lg border border-indigo-500 p-4 text-indigo-200
           no-underline transition-all  hover:shadow hover:shadow-indigo-500"
        >
          <div className="flex items-center">
            <DiscordLogoIcon className="h-8 w-8" />
            <div className="ml-3">Discord</div>
          </div>
          <Icons.arrowIcon className="w-6" />
        </Link>
      </div>
    </div>
  )
}
