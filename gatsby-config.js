module.exports = {
  siteMetadata: {
    title: 'SamarPanda.com',
    description: 'Technical Architect at Quikr',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-17019061-1',
      },
    },
  ],
};
