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
  githubActions,
} from "public/icons";
import cn from "clsx";
import { useState } from "react";
import dynamic from "next/dynamic";
import SkillsList from "@/components/skillsList";
import Section from "@/components/Section";

const BallCanvas = dynamic(() => import('components/BallCanvas'));

const seoTitle = "Skills | Vasyl Vasiuk";
const seoDesc =
  "Vasyl Vasiuk, a frontend software engineer who loves building cool things with code.";

const technologies = [
  {
    name: "Core Skills: ",
    elements: [
      { name: 'Html', icon: html },
      { name: 'Css', icon: css, },
      { name: 'Javascript', icon: javascript },
      { name: 'Typescript', icon: typescript }
    ],
  },
  {
    name: "Frameworks: ",
    elements: [
      { name: 'NextJs', icon: nextjs, href: 'https://nextjs.org/' },
      { name: 'ReactJs', icon: reactjs, href: 'https://react.dev/' }
    ]
  },
  {
    name: "State Management: ",
    elements: [
      { name: 'Redux', icon: redux, href: 'https://redux.js.org/' },
      { name: 'Zustand', icon: zustand, href: 'https://zustand-demo.pmnd.rs/' }
    ]
  },
  {
    name: "Database: ",
    elements: [{ name: 'MongoDb', icon: mongodb, href: 'https://www.mongodb.com/' }],
  },
  {
    name: "Devops: ",
    elements: [
      { name: 'Docker', icon: docker, href: 'https://docs.docker.com/' },
      { name: 'GitHub Actions', icon: githubActions, href: 'https://docs.github.com/en/actions' }
    ]
  },
  {
    name: "Design: ",
    elements: [{ name: 'Figma', icon: figma, href: 'https://www.figma.com/' }]
  },
  {
    name: "Tools: ",
    elements: [{ name: 'Git', icon: git, href: 'https://git-scm.com/' }]
  }
  // TODO and other tools
  //   name: "Node JS",
  //   icon: nodejs,
  // },
];

export default function Skills() {
  const [initialView, setInitialView] = useState(true)

  return (
    <>
      <div className="flex flex-col gap-4 md:gap-8">
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
        <ul className="flex items-center gap-1">
          <button
            className={cn(
              "px-4 py-2 rounded-lg text-sm hover:text-primary transition-colors",
              initialView ? "bg-secondaryA text-primary" : "text-secondary"
            )}
            onClick={() => setInitialView(true)}
          >
            Boring 🤓
          </button>
          <button
            className={cn(
              "px-4 py-2 rounded-lg text-sm hover:text-primary transition-colors",
              !initialView ? "bg-secondaryA text-primary" : "text-secondary"
            )}
            onClick={() => setInitialView(false)}
          >
            Cool 😎
          </button>
        </ul>
        {
          initialView ? (
            <div className="animate-in">
              <SkillsList skills={technologies} />
            </div>
          ) : (
            <div>
              {
                technologies.map(technology => (
                  <Section key={technology} heading={technology.name} headingAlignment="left">
                    <div className="flex items-center	gap-3 ">
                      {
                        technology.elements.map((el, index) => (
                          <div className="w-14 h-14 lg:w-20 lg:h-20 cursor-pointer" key={index}>
                            <BallCanvas icon={el.icon} />
                          </div>
                        ))
                      }
                    </div>
                  </Section>
                ))
              }
            </div>
          )
        }
      </div >
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
      />
    </>
  );
}
