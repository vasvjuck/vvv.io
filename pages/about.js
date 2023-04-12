import Image from "next/image";
import { NextSeo } from "next-seo";

import Section from "components/Section";
import Workplaces from "components/Workplaces";
import Gallery from "components/Gallery";

import dc from "public/gallery/dc.jpg";
import avatar from "public/gallery/avatar.jpg";
import moonshiner from "public/work/moon.jpeg";
import linkup from "public/work/linkup.jpeg";
import wunu from "public/work/wunu.jpeg";

const workplaces = [
  {
    title: "FrontEnd Developer",
    company: "Moonshiner",
    time: "06.2022 - Present",
    imageSrc: moonshiner,
    link: "https://moonshiner.at/",
  },
  {
    title: "FrontEnd Academy | Insternship",
    company: "LinkUp",
    time: "11.2021 - 02.2022",
    imageSrc: linkup,
    link: "https://linkupst.com/",
  },
  {
    title: "Information System & Technologies",
    company: "West Ukrainian National University",
    time: "09.2020 - Present",
    imageSrc: wunu,
  },
];

const seoTitle = "About | Vasyl Vasiuk";
const seoDesc =
  "Vasyl Vasiuk, a frontend software engineer who loves building cool things with code.";

const About = () => {
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
          {/* TODO: skils */}
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

export default About;