module.exports = {
  siteMetadata: {
    title: `Hypha`,
    siteUrl: `https://teamhypha.io`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
  ],
}
