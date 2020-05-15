import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:3001/api' }),
  cache: new InMemoryCache()
});

export default client;