import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

export function TeamSection() {
  const people = [
    {
      name: "Matthew Watson",
      role: "Co-Founder / CEO",
      imageUrl: "/default-avatar.jpg",
    },
    {
      name: "Nathan Roark",
      role: "Co-Founder / CTO",
      imageUrl: "/default-avatar.jpg",
    },
    {
      name: "Kirsten Mullican",
      role: "Co-Founder / CIO",
      imageUrl: "/default-avatar.jpg",
    },
    {
      name: "Nick Heaven",
      role: "Co-Founder / CDO",
      imageUrl: "/default-avatar.jpg",
    },
    {
      name: "Nic Eliason",
      role: "Co-Founder / CCO",
      imageUrl: "/default-avatar.jpg",
    },
  ]
  return (
    <Card>
      <CardHeader>
        <CardTitle>Meet our leadership</CardTitle>
        <CardDescription>
          We are not just a team; we are a close-knit family of innovators,
          creators, and problem solvers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 "
        >
          {people.map((person) => (
            <li key={"team-section-" + person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                  width={64}
                  height={64}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight ">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-primary">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
