export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Telperion",
  url: "https://telperion.nathanroark.dev",
  ogImage: "https://telperion.nathanroark.dev/og.jpg",
  description:
    "A team of young technical profesionals ready to solve the worlds toughest challenges.",
  mainNav: [
    {
      title: "Team",
      href: "/team",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/nathanroark",
    github: "https://github.com/nathanroark",
  },
}
