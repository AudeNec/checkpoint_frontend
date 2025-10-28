import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { PageLayout } from "./components/Layout";

import { CountryDetails } from "./pages/CountryDetails";
import { CountryForm } from "./pages/CountryForm";
import { CountriesList } from "./pages/CountriesList";
import { HomePage } from "./pages/Home";

import "./App.css";

const client = new ApolloClient({
  uri: "/api",
  cache: new InMemoryCache(),
  credentials: "same-origin",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route Component={PageLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="*" Component={() => <Navigate to="/" />} />
            <Route path="/countries" Component={CountriesList} />
            <Route path="/countries/:code" Component={CountryDetails} />
            <Route path="/countries/new" Component={CountryForm} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
