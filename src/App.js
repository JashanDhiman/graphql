import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetUsers from "./Components/GetUsers";
//import Form from "./Components/Form";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  } 
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://jashan-dev-3.myshopify.com/admin/api/2022-04/graphql.json" ,credentials: 'same-origin'}),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      {" "}
      <GetUsers />
      {/*<Form />*/}
    </ApolloProvider>
  );
}
export default App;
