export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Nathan Roark",
  url: "https://nathanroark.dev",
  ogImage: "https://nathanroark.dev/og.png", // png is the original format, jpg is there because discord keeps linking to jpg
  description:
    "Full Stack Engineer passionate about building and learning new things.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/nathanroark",
    github: "https://github.com/nathanroark",
  },
}
