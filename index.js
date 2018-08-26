/**
 * @file Defines ESLint rules and configuration exported by the package
 * @author Madiodio Gaye <papigaye1@gmail.com>
 */

module.exports = {
  extends: ["./rules/es6"].map(require.resolve) // thank you AirBnB...
};
