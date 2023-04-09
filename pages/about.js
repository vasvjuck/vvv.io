import Image from "next/image";
import { NextSeo } from "next-seo";

import Link from "components/Link";
import Section from "components/Section";
import Workplaces from "components/Workplaces";
import Gallery from "components/Gallery";
import ConnectLinks from "components/ConnectLinks";

import dc from "public/gallery/dc.jpg";
import avatar from "public/gallery/avatar.jpg";

// TODO: 
const workplaces = [
  {
    title: "FrontEnd Developer",
    company: "Moonshiner",
    time: "2022 - Present",
    // imageSrc: hinesLogo,
    link: "https://moonshiner.at/",
  },
  {
    title: "FrontEnd Insternship",
    company: "LinkUp",
    time: "2021 - 2022",
    // imageSrc: perishipLogo,
    link: "https://linkupst.com/",
  },
  {
    title: "Information System & Technologies",
    company: "West Unkrainian University",
    time: "2020 - Present",
    // imageSrc: uhdLogo,
  },
];

const seoTitle = "About | Vasyl Vasiuk";
const seoDesc =
  "Vasyl Vasiuk, a frontend software engineer who loves building cool things with code.";

export default function About() {
  return (
    <>
      <div className="flex flex-col gap-16 md:gap-24">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight">
            About Me
          </h1>
          <p
            className="text-secondary animate-in"
          >
            Just a quick glimpse.
          </p>
        </div>
        <div className="lg:hidden mb-8">
          <div
            className="animate-in"
          >
            <Image
              src={dc}
              alt={"city"}
              width={324}
              height={139}
              className="relative h-60 inset-0 object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl -rotate-6"
              priority
            />
          </div>

          <div
            className="animate-in"
          >
            <Image
              src={avatar}
              alt={"Vasyl Vasiuk"}
              width={220}
              height={260}
              className="absolute w-48 inset-0 object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl rotate-6 left-[45%] md:left-[60%] md:w-56 -top-48"
              priority
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <Gallery />
        </div>
        <div
          className="flex flex-col gap-12 animate-in md:gap-16"
        >
          <Section heading="About" headingAlignment="left">
            <div className="flex flex-col gap-6">
              <p>Hello, I&apos;m Vasyl Vasiuk!</p>

              <p>
                {/* TODO */}
                I&apos;m a frontend engineer currently working at{" "}
                <a
                  className="underline"
                  href="https://moonshiner.at/"
                  target="__blank"
                >
                  Moonshiner
                </a>
                , web development company based in Vienna.
              </p>
            </div>
          </Section>

          <Section heading="Links" headingAlignment="left" >
            <div className="flex flex-col w-full gap-8">
              <p>
                Have a question or just want to chat? Feel free to {" "}
                <a href="mailto:contact@vasiuk.br09@gmail.com" className="underline">email me</a>.
              </p>
              <ul className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 animated-list">
                {ConnectLinks.map(link => (
                  <li
                    className="transition-opacity col-span-1"
                    key={link.label}
                  >
                    <Link
                      href={link.href}
                      className="transition-opacity no-underline w-full border rounded-lg p-4 border-primary inline-grid"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{link.icon}</span>
                        {link.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 ml-auto text-secondary"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section heading="Work" headingAlignment="left">
            <div className="flex flex-col w-full gap-8">
              <p>
                {new Date().getFullYear() - 2022}+ years of professional development
                experience 🤯😳
              </p>
              <p>
                Story about my experience | whoop whoop 🥳
              </p>
              <Workplaces items={workplaces} />
            </div>
          </Section>
        </div>
      </div>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          description: seoDesc,
          url: `https://samuelkraft.com/about/`,
          site_name: "Vasyl Vasiuk",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
    </>
  );
}
