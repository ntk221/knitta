import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.100">
      <Flex maxW="4xl" mx="auto" h="24" alignItems="center" justifyContent="center">
        <Text textAlign="center" fontFamily="dosis">© 2023 Kazuki Nitta</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
