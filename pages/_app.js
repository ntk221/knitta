import Layout from "../components/layout";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Dosis } from "@next/font/google";
import "../styles/globals.css";
import Head from "next/head";

const dosis = Dosis({ subsets: ["latin"] });
const theme = extendTheme({
  fonts: {
    dosis: dosis.style.fontFamily,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@YourTwitterHandle" />
        <meta property="twitter:title" content="My Awesome Page" />
        <meta
          property="twitter:description"
          content="This is a description of my awesome page"
        />
        <meta
          property="twitter:image"
          content="/images/me.JPG"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
