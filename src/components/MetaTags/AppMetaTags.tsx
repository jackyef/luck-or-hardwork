import { theme } from '@/theme/theme'
import { useRouter } from 'next/router';
import Head from 'next/head'

export const publicUrl = 'https://luck-or-hardwork.vercel.app';

const defaultTitle = 'Is success determined by luck 🍀 or hard work 🛠️?';
const defaultDescription =
  `Some people think that it's their hardwork that led them to their success. Others think that luck is the one that led to one's success.`;
const defaultOgImage =
  'https://jackyef-og-img.vercel.app/**Is%20success%20determined%20by%20luck%20%F0%9F%8D%80%20or%20hard%20work%20%F0%9F%9B%A0%EF%B8%8F%3F**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fmy-site-2-pi.vercel.app%2Fmonochrome%2Flogo.svg';

interface Props {
  image?: string;
  title?: string;
  description?: string;
}


export const AppMetaTags: React.FC<Props> = ({
  image = defaultOgImage,
  title = defaultTitle,
  description = defaultDescription,
}) => {
  const router = useRouter();
  const url = `${publicUrl}${router.pathname}`;

  return (
    <Head>
      <meta name="theme-color" content={theme.colors.gray['700']} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Facebook OG meta tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Meta Tags  */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={url} />
      <meta property="twitter:creator" content="@jackyef__" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:url" content={url} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": "${title}",
          "image": ["${image}"],
          "author": {
            "@type": "Person",
            "@id": "https://twitter.com/jackyef__",
            "name": "Jacky Efendi",
            "url": "https://twitter.com/jackyef__"
          },
          "publisher": {
              "@type": "Person",
              "@id": "https://twitter.com/jackyef__",
              "name": "Jacky Efendi",
              "url": "https://twitter.com/jackyef__"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${publicUrl}"
          }
        }`,
        }}
      />
    </Head>
  )
}