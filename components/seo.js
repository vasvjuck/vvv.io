import { DefaultSeo } from "next-seo";

const config = {
  title: "Vasyl Vasiuk",
  description: " Hi, im a frontend engineer who loves building cool things with code",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vvv-io.vercel.app/",
    site_name: "Vasyl Vasiuk",
  },
};

export default function SEO() {
  return <DefaultSeo {...config} />;
}
