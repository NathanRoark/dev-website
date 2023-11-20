import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { TeamSection } from "@/components/team-section"

export default function IndexPage() {
  return (
    <div className="container relative pb-8">
      <PageHeader className="pb-8">
        <PageHeaderHeading>About Our Team</PageHeaderHeading>
        <PageHeaderDescription>
          At Telperion, we are a dynamic and dedicated group of developers,
          designers, and engineers who share a common passion for innovation.
        </PageHeaderDescription>
      </PageHeader>
      <section className="block ">
        <div className="overflow-hidden">
          <TeamSection />
        </div>
      </section>
    </div>
  )
}
