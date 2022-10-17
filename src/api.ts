import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://coding-challenge-a8s934ksd.eu-central-1.elasticbeanstalk.com/graphql",
  cache: new InMemoryCache(),
});
