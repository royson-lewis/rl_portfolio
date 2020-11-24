/** @format */

import axios from "axios";
import React from "react";

const sitemapXML = (data) => {
  let latestPost = 0;
  let projectsXML = "";

  //   data.map((post) => {
  //     const postDate = Date.parse(post.modified);
  //     if (!latestPost || postDate > latestPost) {
  //       latestPost = postDate;
  //     }

  //     const projectURL = `https://www.roysonlewis.com/`;
  //     projectsXML += `
  //       <url>
  //          <loc>${projectURL}</loc>
  //          <lastmod>${postDate}</lastmod>
  //          <priority>0.50</priority>
  //       </url>
  //     `;
  //   });

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

     
      <url>
        <loc>https://www.roysonlewis.com/</loc>
        <lastmod>2020-11-23T19:03:37+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://www.roysonlewis.com/services</loc>
        <lastmod>2020-11-23T19:03:37+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.roysonlewis.com/about</loc>
        <lastmod>2020-11-23T19:03:37+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.roysonlewis.com/contact</loc>
        <lastmod>2020-11-23T19:03:37+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.roysonlewis.com/services?service=ui</loc>
        <lastmod>2020-11-23T19:03:37+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.roysonlewis.com/services?service=front</loc>
        <lastmod>2020-11-23T19:03:37+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.roysonlewis.com/services?service=back</loc>
        <lastmod>2020-11-23T19:03:37+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.roysonlewis.com/work/essence</loc>
        <lastmod>2020-11-23T19:03:37+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.roysonlewis.com/work/vamyou</loc>
        <lastmod>2020-11-23T19:03:37+00:00</lastmod>
        <priority>0.80</priority>
      </url>
    </urlset>`;
};

// export default function Sitemap() {
//   async function getInitialProps() {
//     res.setHeader("Content-type", "text/xml");
//     res.write(sitemapXML());
//     res.end();
//   }
//   getInitialProps();
// }

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemapXML());
    res.end();
  }
}

export default Sitemap;
