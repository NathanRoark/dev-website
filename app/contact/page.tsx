import { ContactInfo } from "@/components/contact-info"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

export default function IndexPage() {
  const contact_form_action = "#"

  return (
    <div className="container relative pb-8">
      <PageHeader className="pb-8">
        <PageHeaderHeading>Contact Us</PageHeaderHeading>
        <PageHeaderDescription>
          We want to hear from you. Reach out to us and we will get back to you
          as soon as we can.
        </PageHeaderDescription>
      </PageHeader>
      <section className="block">
        <div className="overflow-hidden">
          <ContactInfo />
        </div>
      </section>
    </div>
  )
}
