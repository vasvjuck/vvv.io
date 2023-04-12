import { NextSeo } from "next-seo";
// TODO: refactor as moonx | icons
import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  mongodb,
  git,
  figma,
  docker,
  nextjs,
  zustand,
  githubActions
} from "public/icons";
import BallCanvas from 'components/BallCanvas'

const seoTitle = "Skills | Vasyl Vasiuk";
const seoDesc =
  "Vasyl Vasiuk, a frontend software engineer who loves building cool things with code.";

const technologies = [
  {
    name: "Core Skills: ",
    elements: [html, css, javascript, typescript],
  },
  {
    name: "Frameworks: ",
    elements: [nextjs, reactjs]
  },
  {
    name: "State Management: ",
    elements: [redux, zustand]
  },
  {
    name: "Database: ",
    elements: [mongodb],
  },
  {
    name: "Devops: ",
    elements: [docker, githubActions]
  },
  {
    name: "Design: ",
    elements: [figma]
  },
  {
    name: "Tools: ",
    elements: [git]
  }
  // TODO and other tools
  //   name: "Node JS",
  //   icon: nodejs,
  // },
];

export default function Skills() {
  return (
    <>
      <div className="flex flex-col gap-16 md:gap-24">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight">
            Skills
          </h1>
          <p
            className="text-secondary animate-in"
          >
            Just a quick glimpse.
          </p>
        </div>
        <ul
          className="flex-grow grid grid-cols-1 gap-2 lg:gap-3 animated-list animate-in"
        >
          {
            technologies.map(technology => (
              <div className="flex items-center	gap-2 lg:gap-3" key={technology.name}>
                <p className="animate-i text-secondary font-semibold animate-in">{technology.name}</p>
                {
                  technology.elements.map((icon, index) => (
                    <div className="w-14 h-14 lg:w-20 lg:h-20 cursor-pointer" key={index}>
                      <BallCanvas icon={icon} />
                    </div>
                  ))
                }
              </div>
            ))
          }
        </ul>
      </div>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          description: seoDesc,
          // TODO
          url: `https://vvv-io.vercel.app/about/`,
          site_name: "Vasyl Vasiuk",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
    </>
  );
}
