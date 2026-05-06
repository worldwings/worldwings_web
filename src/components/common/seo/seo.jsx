import Head from "next/head";
import { useRouter } from "next/router";

const SEO = ({ title, description, ogTitle, ogDescription, ogImage }) => {
  const router = useRouter();
  
  const defaultTitle = "World Wings Tours and Travels";
  const defaultDescription =
    "Your trusted partner for domestic and international tours, visas, passport services, and travel assistance. Explore the world with World Wings.";
  const siteUrl = "https://worldwingstours.com"; // Adjust if different

  const finalTitle = title ? `${title} | World Wings` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalOgTitle = ogTitle || finalTitle;
  const finalOgDescription = ogDescription || finalDescription;
  const finalOgImage = ogImage || "/logo/logo.png";

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}${router.asPath}`} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={finalOgImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={finalOgImage} />
    </Head>
  );
};

export default SEO;
