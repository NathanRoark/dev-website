export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Nathan Roark",
  url: "https://nathanroark.dev",
  ogImage: "https://nathanroark.dev/og.jpg",
  description:
    "A team of young technical professionals ready to solve the worlds toughest challenges.",
  mainNav: [
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Resume",
      href: "/resume",
    },
    {
      title: "Links",
      href: "/links",
    },
  ],
  links: {
    twitter: "https://twitter.com/nathanroark",
    github: "https://github.com/nathanroark",
  },
}
