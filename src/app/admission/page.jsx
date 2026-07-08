import AdmissionPage from '../../views/AdmissionPage'

const BASE_URL = 'https://globalacademy.edu.np';

export const metadata = {
  title: "Admission Process — Apply Now | Global Academy Secondary School",
  description: "Apply for admission at Global Academy Secondary School, Mahendranagar. Learn about our simple 3-step admission process, required documents, and enrollment fees. Admissions open for all grades.",
  keywords: [
    "school admission Mahendranagar",
    "Global Academy admission",
    "school enrollment Nepal",
    "SEE school admission Kanchanpur",
    "how to apply Global Academy",
  ],
  alternates: {
    canonical: `${BASE_URL}/admission`,
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/admission`,
    title: "School Admission | Global Academy Secondary School Mahendranagar",
    description: "Apply for admission at Global Academy. Simple 3-step process: Register → Evaluation → Enrollment. Admissions open for Montessori to Grade 10.",
    images: [{ url: `${BASE_URL}/assets/logo.png`, width: 800, height: 600, alt: "Global Academy Admission" }],
    locale: "en_NP",
    siteName: "Global Academy Secondary School",
  },
  twitter: {
    card: "summary_large_image",
    title: "School Admission | Global Academy Secondary School",
    description: "Apply for admission at Global Academy. Admissions open for all grades from Montessori to Grade 10.",
    images: [`${BASE_URL}/assets/logo.png`],
  },
};

export default function Page() {
  return <AdmissionPage />;
}
