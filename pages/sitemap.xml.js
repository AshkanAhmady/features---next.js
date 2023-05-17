import axios from 'axios';
import * as fs from 'fs'

const Sitemap = () => {
    return null
}

export default Sitemap;

export const getServerSideProps = async ({ res }) => {
    const BASE_URL = 'http://localhost:3000';


    //  ignore some pages that we dont need to put in sitemap
    // and get all static pages
    const staticPaths = fs.readdirSync("pages").filter((staticPage) => {
        return ![
            "api",
            "_app.js",
            "_document.js",
            "404.js",
            "sitemap.xml.js",
        ].includes(staticPage);
    }).map((staticPagePath) => {
        return `${BASE_URL}/${staticPagePath}`;
    });

    // all dynamic paths
    const { data: posts } = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const dynamicPaths = posts.map(post => {
        return `${BASE_URL}/posts/${post.id}`
    })

    const allPaths = [...staticPaths, ...dynamicPaths];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
            .map((url) => {
                return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
            })
            .join("")}
    </urlset>`;


    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};