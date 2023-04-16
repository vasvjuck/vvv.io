import { DefaultSeo } from "next-seo";

const config = {
  title: "Vasyl Vasiuk",
  description: "Vasyl Vasiuk, a frontend software engineer who loves building cool things with code.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vvv-io.vercel.app/",
    images: [
      {
        url: 'https://vvv-io.vercel.app/_next/static/media/turtle-black.79820721.svg',
        alt: 'turtle'
      }
    ],
    site_name: "Vasyl Vasiuk",
  },
};

export default function SEO() {
  return <DefaultSeo {...config} />;
}
