import { Flex } from "@chakra-ui/react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Flex flex="1" maxW="4xl" mx="auto">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
}
