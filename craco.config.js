const path = require(`path`)
const aliases = {
  '@pages': `./src/pages`,
  '@app': `./src/app`,
  '@constants': `./src/constants`,
  '@shared': `./src/shared`,
  '@services': `./src/services`,
  '@layout': `./src/layout`,
  '@graphql': `./src/apollo`,
}
const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ]),
)

module.exports = {
  webpack: {
    alias: resolvedAliases,
  },
}
