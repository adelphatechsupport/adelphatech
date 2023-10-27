module.exports = {
  siteMetadata: {
    title: `SEO, SEM and Custom Web and Mobile App Development Services`,
    description: `AdelphaTech is a leading web & mobile application development firm based in Toronto, Canada that offers custom web, and mobile app development services.`,
    author: `Adelphatech`,
    siteUrl: 'https://adelphatechmaster.gatsbyjs.io',
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-htaccess`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        checkSupportedExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Titillium Web', 'Helvetica', 'Arial', 'sans-serif'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'G-D41ZK2KEDD',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // Enables Google Optimize Experiment ID
        experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // Set Variation ID. 0 for original 1,2,3....
        variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'example.com',
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'G-D41ZK2KEDD',
          // Setting this parameter is optional
          anonymize: false,
          head: false,
        },
        facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     endpoint: '', // add your MC list endpoint here; see instructions from gatsby's website
    //   },
    // },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.example.com',
        sitemap: 'https://www.example.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: '/custom/',
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: 'www.adephatechmaster.gatsbyjs.io', // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `
          ErrorDocument 401 /401.html
          ErrorDocument 404 /404.html
          ErrorDocument 500 /500.html
        `,
        redirect: [
          'RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]',
          {
            from: 'www.adephatechmaster.gatsbyjs.io/Home',
            to: 'www.adephatechmaster.gatsbyjs.io',
          },
          {
            from: 'www.adephatechmaster.gatsbyjs.io/About',
            to: 'www.adephatechmaster.gatsbyjs.io/About',
          },
          {
            from: 'www.adephatechmaster.gatsbyjs.io/Team',
            to: 'www.adephatechmaster.gatsbyjs.io/About',
          },
          {
            from: 'www.adephatechmaster.gatsbyjs.io/Portfolio',
            to: 'www.adephatechmaster.gatsbyjs.io/case-studies',
          },
          {
            from: 'www.adephatechmaster.gatsbyjs.io/Blog',
            to: 'www.adephatechmaster.gatsbyjs.io/case-studies',
          },
          {
            from: 'www.adephatechmaster.gatsbyjs.io/Carrer',
            to: 'www.adephatechmaster.gatsbyjs.io/careers',
          },
          {
            from: 'www.adephatechmaster.gatsbyjs.io/Contact',
            to: 'www.adephatechmaster.gatsbyjs.io/contact-us',
          },
        ],
        custom: `
            # This is a custom rule!
            # This is a another custom rule!
        `,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
