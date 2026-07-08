/**
 * SchemaOrg — Server Component
 * Injects JSON-LD structured data for Google rich results.
 * Rendered once in the root layout, always present on every page.
 */

const BASE_URL = 'https://globalacademy.edu.np';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "School"],
  "@id": `${BASE_URL}/#organization`,
  "name": "Global Academy Secondary School",
  "alternateName": "Global Academy Mahendranagar",
  "url": BASE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${BASE_URL}/assets/logo.png`,
    "width": 512,
    "height": 512,
  },
  "image": `${BASE_URL}/assets/logo.png`,
  "description": "Global Academy Secondary School is a leading co-educational English medium school in Mahendranagar, Kanchanpur, Nepal. Established in 2005, offering Pre-Primary (Montessori) to Grade 10 (SEE) education with a focus on academic excellence and holistic student development.",
  "foundingDate": "2005",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "X56H+7H",
    "addressLocality": "Bhimdatta",
    "addressRegion": "Sudurpashchim Pradesh",
    "postalCode": "10900",
    "addressCountry": "NP",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.96071451691866,
    "longitude": 80.1789945,
  },
  "telephone": "+977-99-524838",
  "email": "info@globalacademy.edu.np",
  "openingHours": "Su-Fr 07:00-17:00",
  "hasMap": "https://maps.google.com/maps?q=28.96071451691866,80.1789945",
  "sameAs": [
    "https://www.facebook.com/globalacademy.edu.np",
    "https://www.instagram.com/globalacademy.edu.np/",
    "https://www.youtube.com/@globalacademymnr",
  ],
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": 30,
  },
  "knowsAbout": [
    "Secondary Education",
    "Montessori Education",
    "SEE Preparation",
    "Holistic Student Development",
    "English Medium Education Nepal",
  ],
  "award": [
    "Innovation in Education Award — Exito International Awards Dubai 2024",
    "Most Innovative Principal of the Year — Dubai 2024",
  ],
  "alumni": [
    {
      "@type": "Person",
      "name": "Yogesh Bokati",
      "description": "Sudurpaschim Province SEE Topper, currently pursuing MBBS",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  "url": BASE_URL,
  "name": "Global Academy Secondary School",
  "description": "Official website of Global Academy Secondary School, Mahendranagar, Kanchanpur, Nepal.",
  "publisher": {
    "@id": `${BASE_URL}/#organization`,
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${BASE_URL}/gallery?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  "inLanguage": "en-NP",
};

export default function SchemaOrg() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
