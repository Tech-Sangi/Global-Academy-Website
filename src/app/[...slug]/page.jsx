import { notFound } from 'next/navigation';
import ContentPage from '../../views/ContentPage';
import { pageCatalog } from '../../data/pageCatalog';

const BASE_URL = 'https://globalacademy.edu.np';

export async function generateStaticParams() {
  return pageCatalog.map((page) => {
    const slug = page.path.replace(/^\//, '').split('/');
    return { slug };
  });
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const path = '/' + slug.join('/');
  const page = pageCatalog.find((p) => p.path === path);

  if (!page) {
    return {
      title: 'Page Not Found',
      robots: { index: false, follow: false },
    };
  }

  const canonicalUrl = `${BASE_URL}${page.path}`;

  return {
    title: page.title,
    description: page.summary || `Learn about ${page.title} at Global Academy Secondary School, Mahendranagar, Kanchanpur, Nepal.`,
    keywords: [
      page.title,
      page.category,
      'Global Academy',
      'Secondary School Mahendranagar',
      'Nepal school',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title: `${page.title} | Global Academy Secondary School`,
      description: page.summary || `${page.title} — Global Academy Secondary School, Mahendranagar.`,
      images: [
        {
          url: `${BASE_URL}/assets/logo.png`,
          width: 800,
          height: 600,
          alt: `${page.title} — Global Academy`,
        },
      ],
      locale: 'en_NP',
      siteName: 'Global Academy Secondary School',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${page.title} | Global Academy Secondary School`,
      description: page.summary || `${page.title} — Global Academy Secondary School, Mahendranagar.`,
      images: [`${BASE_URL}/assets/logo.png`],
    },
  };
}

export default async function DynamicPage({ params }) {
  const { slug } = await params;
  const path = '/' + slug.join('/');
  const page = pageCatalog.find((p) => p.path === path);
  if (!page) {
    notFound();
  }
  return <ContentPage page={page} />;
}
