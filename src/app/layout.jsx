import Layout from '../components/Layout'
import Preloader from '../components/Preloader'
import SchemaOrg from '../components/SchemaOrg'
import '../index.css'
import '../App.css'

const BASE_URL = 'https://globalacademy.edu.np';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Global Academy Secondary School | Best School in Mahendranagar, Kanchanpur",
    template: "%s | Global Academy Secondary School",
  },
  description: "Global Academy Secondary School in Mahendranagar, Kanchanpur, Nepal. Providing excellence in education, holistic development, and a nurturing environment for students from Pre-Primary to Grade 10 since 2005.",
  keywords: [
    "Global Academy",
    "Secondary School Mahendranagar",
    "Best School in Nepal",
    "School in Kanchanpur",
    "SEE School Nepal",
    "English Medium School Mahendranagar",
    "Global Academy Mahendranagar",
    "Bhimdatta School",
  ],
  authors: [{ name: "Global Academy Secondary School" }],
  creator: "Global Academy Secondary School",
  publisher: "Global Academy Secondary School",
  category: "education",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Global Academy Secondary School",
    url: BASE_URL,
    title: "Global Academy Secondary School | Mahendranagar, Kanchanpur",
    description: "Excellence in Education. Holistic development and nurturing environment for students from Pre-Primary to Grade 10 in Mahendranagar, Nepal.",
    images: [
      {
        url: `${BASE_URL}/assets/logo.png`,
        width: 800,
        height: 600,
        alt: "Global Academy Secondary School Logo",
      },
    ],
    locale: "en_NP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Academy Secondary School | Mahendranagar",
    description: "Excellence in Education. Holistic development and nurturing environment for students.",
    images: [`${BASE_URL}/assets/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
  other: {
    "geo.region": "NP-SEP",
    "geo.placename": "Mahendranagar, Kanchanpur",
    "geo.position": "28.96071451691866;80.1789945",
    "ICBM": "28.96071451691866, 80.1789945",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/assets/logo.png" />
        <link rel="apple-touch-icon" href="/assets/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <SchemaOrg />
      </head>
      <body suppressHydrationWarning>
        <Preloader />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
