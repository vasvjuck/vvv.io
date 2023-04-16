import Image from "next/image";
import { NextSeo } from "next-seo";

import avatar from "public/avatar-round.jpeg";
import Link from "components/Link";

import whiteTurtle from "public/turtle-white.svg";

const seoTitle = "Home | Vasyl Vasiuk";
const seoDesc =
  "Vasyl Vasiuk, a frontend software engineer who loves building cool things with code.";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-8 animate-in">
          <div>
            <h1 className="animate-in text-3xl font-bold tracking-tight">
              Vasyl Vasiuk
            </h1>
            <p
              className="text-secondary animate-in"
              style={{ "--index": 1 }}
            >
              I write code.
            </p>
          </div>
          <div
            className="animate-in flex flex-col md:flex-row gap-6 text-secondary md:items-center"
          >
            <Image
              src={avatar}
              width={100}
              height={100}
              alt="avatar"
              className="rounded-full bg-secondary  animate-in"
            />
          </div>
          <p
            className="text-primary max-w-lg animate-in"
          >
            Hi, I&apos;m Vasyl Vasiuk, a frontend engineer who loves building cool
            things with code 👨‍💻
          </p>
          <ul
            className="flex flex-col md:flex-row gap-2 md:gap-6 text-secondary animated-list animate-in"
          >
            <li className="transition-opacity">
              <Link
                href="mailto:vasiuk.br09@gmail.com"
                className="flex gap-2 items-center no-underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Email me</span>
              </Link>
            </li>
            <li className="transition-opacity">
              <Link
                href="https://www.linkedin.com/in/vasyl-vasiuk-5273a3224/"
                className="flex gap-2 items-center no-underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Follow me</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          description: seoDesc,
          url: `https://vvv-io.vercel.app/`,
          site_name: "Vasyl Vasiuk",
          images: [
            {
              url: whiteTurtle.src,
              alt: 'whiteTurtle.src'
            }
          ]
        }}
      />
    </>
  );
}