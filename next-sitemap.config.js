module.exports = {
    siteUrl: 'https://galaxyofai.com', // Replace with your website's URL
    generateRobotsTxt: true,          // Generate a robots.txt file
    changefreq: 'daily',              // Frequency of updates (e.g., daily, weekly)
    priority: 0.7,                    // Priority for each page
    sitemapSize: 5000,                // Max entries per sitemap file
    exclude: [],        // Add any paths you want to exclude
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' }, // Allow all bots to crawl the site
      ],
    },
  };
  