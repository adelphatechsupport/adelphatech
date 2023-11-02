/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({ fromPath: "/Home", toPath: "/", })
  createRedirect({ fromPath: "/About", toPath: "/about-us", })
  createRedirect({ fromPath: "/Team", toPath: "/about-us", })
  createRedirect({ fromPath: "/Blog", toPath: "/case-studies", })
  createRedirect({ fromPath: "/Portfolio", toPath: "/case-studies", })
  createRedirect({ fromPath: "/Carrer", toPath: "/careers", })
  createRedirect({ fromPath: "/Contact", toPath: "/contact-us", })
  createRedirect({ fromPath: "/Service", toPath: "/services", })

}
