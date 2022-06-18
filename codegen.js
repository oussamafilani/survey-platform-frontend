module.exports = {
  schema: [
    {
      'https://babelmadina.hasura.app/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': process.env.ADMIN_SECRET,
        },
      },
    },
  ],
  overwrite: true,
  generates: {
    './src/generated/graphql.generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}
