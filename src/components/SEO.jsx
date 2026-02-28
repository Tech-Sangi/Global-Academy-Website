import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    name = "Global Academy Secondary School",
    type = "website"
}) => {
    const fullTitle = `${title} | ${name}`;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name='description' content={description} />

            {/* OpenGraph tags for social media */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={name} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />

            {/* Additional SEO improvements */}
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={window.location.href} />
        </Helmet>
    );
};

export default SEO;
