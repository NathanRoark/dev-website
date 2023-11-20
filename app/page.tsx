import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

export default function IndexPage() {
  return (
    <div className="container relative pb-8">
      <PageHeader className="pb-8 ">
        <PageHeaderHeading className="flex items-center justify-center italic">
          <div className="block ">
            <Icons.logo
              className="h-20 w-20 sm:h-32 sm:w-32 lg:h-40 lg:w-40 xl:h-64 xl:w-64"
              fill="currentColor"
            />
          </div>
          <a className="flex flex-col">
            <span className="text-4xl font-black sm:text-6xl lg:text-8xl xl:text-9xl">
              Nathan
            </span>
            <span className="text-2xl font-normal sm:text-4xl lg:text-6xl xl:text-7xl">
              Roark
            </span>
          </a>
        </PageHeaderHeading>
        <PageHeaderDescription className="text-base sm:pl-2 md:pl-8 ">
          <p className="py-2 text-xl sm:text-2xl lg:text-4xl">
            Where excellence takes root.
          </p>
          <p className="py-2">
            Welcome to Telperion Technologies LLC. As a company deeply committed
            to excellence, we specialize in delivering the best professional
            software and information technology subcontracting services to the
            Defense & Space industry.
          </p>
          <p className="py-2">
            At Telperion Technologies, we are driven by a passion for innovation
            and a relentless pursuit of excellence. Our mission is to provide
            cutting-edge technical solutions to address the unique challenges
            and complexities within engineering development.
          </p>
        </PageHeaderDescription>
        <div className="flex w-full items-center space-x-4 pb-8  pt-4 sm:pl-8 md:pb-10 lg:pt-8">
          <Link href="/team" className={buttonVariants()}>
            Team
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "outline" })}
          >
            Contact
          </Link>
        </div>
      </PageHeader>
    </div>
  )
}
