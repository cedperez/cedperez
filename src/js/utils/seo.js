// This file contains utility functions for improving SEO, such as setting meta tags and generating structured data.

function setMetaTags(title, description, keywords) {
    document.title = title;

    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = description;
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = keywords.join(', ');
    document.head.appendChild(metaKeywords);
}

function generateStructuredData(data) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": data.name,
        "url": data.url,
        "description": data.description,
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${data.url}/?search={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
}

export { setMetaTags, generateStructuredData };