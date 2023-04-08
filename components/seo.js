import { DefaultSeo } from "next-seo";

const config = {
  title: "Vasyl Vasiuk",
  description: "Software engineer, and content creator",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vvv.io",
    site_name: "Vasyl Vasiuk",
    // TODO
    images: [
      {
        url: "https://samuelkraft.com/og.jpg",
        alt: "Vasyl Vasiuk",
      },
    ],
  },
};

export default function SEO() {
  return <DefaultSeo {...config} />;
}
