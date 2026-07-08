import { notFound } from 'next/navigation';
import ContentPage from '../../views/ContentPage';
import { pageCatalog } from '../../data/pageCatalog';

export async function generateStaticParams() {
  return pageCatalog.map((page) => {
    // Strip leading slash, split by '/'
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
      title: 'Page Not Found | Global Academy Secondary School',
    };
  }
  return {
    title: `${page.title} | Global Academy Secondary School`,
    description: page.summary || 'Global Academy Secondary School website page.',
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
