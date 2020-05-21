import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

const client = new ApolloClient({
  link: createHttpLink({
    uri: "https://rocketlistbackend.herokuapp.com/graphql",
  }),
  cache: new InMemoryCache(),
});

export default client;
