import HallOfFamePage from '../../views/HallOfFamePage'

const BASE_URL = 'https://globalacademy.edu.np';

export const metadata = {
  title: "Hall of Fame — Distinguished Alumni | Global Academy Secondary School",
  description: "Celebrating the remarkable achievements of Global Academy Secondary School alumni. Our graduates are making an impact as doctors, nurses, and professionals in Nepal and across the world.",
  keywords: [
    "Global Academy alumni",
    "Global Academy hall of fame",
    "school alumni Nepal",
    "successful students Mahendranagar",
    "MBBS students Nepal school",
    "Yogesh Bokati SEE topper",
  ],
  alternates: {
    canonical: `${BASE_URL}/hall-of-fame`,
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/hall-of-fame`,
    title: "Hall of Fame — Distinguished Alumni | Global Academy",
    description: "Our alumni are doctors, nurses, and professionals making Nepal proud. Celebrating outstanding achievements of Global Academy graduates.",
    images: [{ url: `${BASE_URL}/assets/logo.png`, width: 800, height: 600, alt: "Global Academy Hall of Fame" }],
    locale: "en_NP",
    siteName: "Global Academy Secondary School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hall of Fame | Global Academy Secondary School",
    description: "Our alumni are doctors, nurses, and professionals making Nepal proud.",
    images: [`${BASE_URL}/assets/logo.png`],
  },
};

export default function Page() {
  return <HallOfFamePage />;
}
