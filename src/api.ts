import { ApolloClient, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

export const client = new ApolloClient({
  uri: "http://coding-challenge-a8s934ksd.eu-central-1.elasticbeanstalk.com/graphql",
  cache: new InMemoryCache(),
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        ships: offsetLimitPagination(),
      },
    },
  },
});