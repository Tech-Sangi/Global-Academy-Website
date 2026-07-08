import ContactPage from '../../views/ContactPage'

const BASE_URL = 'https://globalacademy.edu.np';

export const metadata = {
  title: "Contact Us — Get in Touch | Global Academy Secondary School",
  description: "Contact Global Academy Secondary School in Mahendranagar, Kanchanpur. Phone: 099-524838 / 524839. Email: info@globalacademy.edu.np. Open Sunday to Friday, 8:00 AM – 5:00 PM.",
  keywords: [
    "contact Global Academy",
    "Global Academy phone number",
    "Global Academy Mahendranagar address",
    "school contact Nepal",
    "Bhimdatta school contact",
  ],
  alternates: {
    canonical: `${BASE_URL}/contact-us`,
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/contact-us`,
    title: "Contact Global Academy Secondary School | Mahendranagar",
    description: "Reach out to Global Academy. Phone: 099-524838. Email: info@globalacademy.edu.np. We are located in Bhimdatta, Mahendranagar, Kanchanpur.",
    images: [{ url: `${BASE_URL}/assets/logo.png`, width: 800, height: 600, alt: "Contact Global Academy" }],
    locale: "en_NP",
    siteName: "Global Academy Secondary School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Global Academy Secondary School",
    description: "Phone: 099-524838. Email: info@globalacademy.edu.np. Located in Bhimdatta, Mahendranagar.",
    images: [`${BASE_URL}/assets/logo.png`],
  },
};

export default function Page() {
  return <ContactPage />;
}
