import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://apollo-music-network.hasura.app/v1/graphql',
});

export default client;
