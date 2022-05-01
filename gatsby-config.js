module.exports = {
  siteMetadata: {
    title: 'Hypha Observability Framework',
    description:
      "Hypha is an open-source observability framework for distributed systems that combines the context of traces with the detail of logs. Hypha deploys an end-to-end telemetry pipeline that sets up distributed tracing, aggregates existing logs, and correlates logs with traces. This facilitates a powerful debugging workflow using Hypha's simple UI.",
    url: 'https://teamhypha.com',
    image: '/hypha/hypha-graphic-color.png',
    keywords: `observability, open-source`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/hypha/hypha-graphic-color.png`,
      },
    },
  ],
}
