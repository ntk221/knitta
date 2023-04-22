import { Box, Flex, Text, ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Box
      as="header"
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      position="sticky"
      top="0"
      zIndex="sticky"
    >
      <Flex
        maxW="4xl"
        mx="auto"
        h="12"
        alignItems="center"
        justifyContent="space-between"
        px="4"
      >
        <Link href="/">
          <Text fontWeight="bold" fontFamily="dosis">HOME</Text>
        </Link>
        <Flex>
          <Box mr="4">
            <Link href="/about">
                <Text fontWeight="bold" fontFamily="dosis">About Me</Text>
            </Link>
          </Box>
          <Box>
            <Link href="/blog">
              <Text fontWeight="bold" fontFamily="dosis">Blog</Text>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
