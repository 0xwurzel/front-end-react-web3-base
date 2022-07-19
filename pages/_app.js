import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Header from "../components/Header";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://something",
});

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>
                <ApolloProvider client={client}>
                    <Header />
                    <Component {...pageProps} />
                </ApolloProvider>
            </NotificationProvider>
        </MoralisProvider>
    );
}

export default MyApp;
