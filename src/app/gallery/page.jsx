import GalleryPage from '../../views/GalleryPage'

const BASE_URL = 'https://globalacademy.edu.np';

export const metadata = {
  title: "Photo Gallery — School Life & Batches | Global Academy Secondary School",
  description: "Browse the photo gallery of Global Academy Secondary School. View SEE/SLC graduating batches from 2069–2075, school events, facilities, and student life moments in Mahendranagar.",
  keywords: [
    "Global Academy gallery",
    "school photos Nepal",
    "SEE batch photos",
    "SLC batch Mahendranagar",
    "Global Academy events",
    "school life Kanchanpur",
  ],
  alternates: {
    canonical: `${BASE_URL}/gallery`,
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/gallery`,
    title: "Photo Gallery | Global Academy Secondary School",
    description: "View SEE/SLC graduating batches, events, and student life at Global Academy Secondary School, Mahendranagar.",
    images: [{ url: `${BASE_URL}/assets/logo.png`, width: 800, height: 600, alt: "Global Academy Gallery" }],
    locale: "en_NP",
    siteName: "Global Academy Secondary School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Global Academy Secondary School",
    description: "View SEE/SLC graduating batches, events, and student life at Global Academy Secondary School.",
    images: [`${BASE_URL}/assets/logo.png`],
  },
};

export default function Page() {
  return <GalleryPage />;
}
