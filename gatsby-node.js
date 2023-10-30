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

  createRedirect({ fromPath: "/Home", toPath: "/", isPermanent: true })
  createRedirect({ fromPath: "/About", toPath: "/about-us", isPermanent: true })
  createRedirect({ fromPath: "/Team", toPath: "/about-us", isPermanent: true })
  createRedirect({ fromPath: "/Blog", toPath: "/case-studies", isPermanent: true })
  createRedirect({ fromPath: "/Portfolio", toPath: "/case-studies", isPermanent: true })
  createRedirect({ fromPath: "/Carrer", toPath: "/careers", isPermanent: true })
  createRedirect({ fromPath: "/Contact", toPath: "/contact-us", isPermanent: true })
  createRedirect({ fromPath: "/Service", toPath: "/services", isPermanent: true })
}
