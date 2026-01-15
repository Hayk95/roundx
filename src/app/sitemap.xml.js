export const runtime = 'edge';

const baseUrl = 'https://roundxtransport.com';

const staticPages = [
    '',
    'quote',
    'privacy-policy',
    'terms-and-conditions'
];

function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPages
        .map((page) => {
            return `
            <url>
                <loc>${baseUrl}/${page}</loc>
                <changefreq>weekly</changefreq>
                <priority>${page === '' ? 1.0 : 0.8}</priority>
            </url>`;
        })
        .join('')}
    </urlset>`;
}

export async function GET(request) {
    const sitemap = generateSiteMap();
    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
