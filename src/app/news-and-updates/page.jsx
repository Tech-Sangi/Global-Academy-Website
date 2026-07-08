import NewsEventsPage from '../../views/NewsEventsPage'

const BASE_URL = 'https://globalacademy.edu.np';

export const metadata = {
  title: "News & Events — Latest Updates | Global Academy Secondary School",
  description: "Stay informed with the latest news, announcements, and events from Global Academy Secondary School, Mahendranagar. Follow our official Facebook page for real-time school updates.",
  keywords: [
    "Global Academy news",
    "school events Mahendranagar",
    "Global Academy announcements",
    "school notices Nepal",
    "Global Academy Facebook updates",
  ],
  alternates: {
    canonical: `${BASE_URL}/news-and-updates`,
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/news-and-updates`,
    title: "News & Events | Global Academy Secondary School",
    description: "Latest news, announcements, and events from Global Academy Secondary School. Stay connected with our school community.",
    images: [{ url: `${BASE_URL}/assets/logo.png`, width: 800, height: 600, alt: "Global Academy News and Events" }],
    locale: "en_NP",
    siteName: "Global Academy Secondary School",
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Events | Global Academy Secondary School",
    description: "Latest news, announcements, and events from Global Academy Secondary School, Mahendranagar.",
    images: [`${BASE_URL}/assets/logo.png`],
  },
};

export default function Page() {
  return <NewsEventsPage />;
}
