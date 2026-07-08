import Layout from '../components/Layout'
import Preloader from '../components/Preloader'
import '../index.css'
import '../App.css'

export const metadata = {
  title: "Global Academy Secondary School | Best School in Mahendranagar, Kanchanpur",
  description: "Global Academy Secondary School in Mahendranagar, Kanchanpur. Providing excellence in education, holistic development, and a nurturing environment for students since 2005.",
  keywords: ["Global Academy", "Secondary School", "Mahendranagar", "Kanchanpur", "Best School in Nepal", "Education", "School in Mahendranagar"],
  themeColor: "#961162",
  openGraph: {
    type: "website",
    url: "https://globalacademy.edu.np/",
    title: "Global Academy Secondary School | Mahendranagar",
    description: "Excellence in Education. Holistic development and nurturing environment for students.",
    images: ["https://globalacademy.edu.np/assets/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Academy Secondary School | Mahendranagar",
    description: "Excellence in Education. Holistic development and nurturing environment for students.",
    images: ["https://globalacademy.edu.np/assets/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/assets/logo.png" />
      </head>
      <body suppressHydrationWarning>
        <Preloader />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
