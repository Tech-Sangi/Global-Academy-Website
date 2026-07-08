import HomePage from '../views/HomePage'

const BASE_URL = 'https://globalacademy.edu.np';

export const metadata = {
  title: "Best Secondary School in Mahendranagar, Kanchanpur | Global Academy",
  description: "Global Academy Secondary School — the premier English-medium co-educational school in Mahendranagar, Kanchanpur. Offering Montessori to Grade 10 (SEE) with award-winning faculty and facilities. Admissions open.",
  keywords: [
    "best school in Mahendranagar",
    "secondary school Kanchanpur",
    "English medium school Nepal",
    "SEE school Mahendranagar",
    "Global Academy",
    "school admission Nepal",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Global Academy Secondary School | Best School in Mahendranagar",
    description: "Award-winning English-medium secondary school in Mahendranagar, Kanchanpur. Excellence in academics, co-curricular activities, and student development since 2005.",
    images: [
      {
        url: `${BASE_URL}/assets/logo.png`,
        width: 800,
        height: 600,
        alt: "Global Academy Secondary School",
      },
    ],
    locale: "en_NP",
    siteName: "Global Academy Secondary School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Academy Secondary School | Mahendranagar",
    description: "Award-winning English-medium secondary school in Mahendranagar, Kanchanpur since 2005.",
    images: [`${BASE_URL}/assets/logo.png`],
  },
};

export default function Page() {
  return <HomePage />;
}
