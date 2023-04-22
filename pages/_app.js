import Layout from "../components/layout";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Dosis} from "@next/font/google";
import "../styles/globals.css";

const dosis = Dosis({ subsets: ["latin"] });
const theme = extendTheme({
  fonts: {
    dosis: dosis.style.fontFamily,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default (MyApp);
