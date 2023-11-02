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

  createRedirect({ fromPath: "/Home", toPath: "/", statusCode: 200, })
  createRedirect({ fromPath: "/About", toPath: "/about-us", statusCode: 200, })
  createRedirect({ fromPath: "/Team", toPath: "/about-us", statusCode: 200, })
  createRedirect({ fromPath: "/Blog", toPath: "/case-studies", statusCode: 200, })
  createRedirect({ fromPath: "/Portfolio", toPath: "/case-studies", statusCode: 200, })
  createRedirect({ fromPath: "/Carrer", toPath: "/careers", statusCode: 200, })
  createRedirect({ fromPath: "/Contact", toPath: "/contact-us", statusCode: 200, })
  createRedirect({ fromPath: "/Service", toPath: "/services", statusCode: 200, })

}
