import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";


/*const client = new ApolloClient({
    uri: "https://rs-food-craft.herokuapp.com/graphql",
    cache: new InMemoryCache(),
});*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    /*<ApolloProvider client={client}>*/
        <BrowserRouter>
            <App/>
        </BrowserRouter>
 /*   </ApolloProvider>*/
);
