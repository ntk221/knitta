import { Box, Heading, Image, HStack, IconButton, Link} from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="calc(100vh - 14rem)"
    >
      <Image
        src="/images/me.JPG"
        alt="プロフィール画像"
        width={120}
        height={120}
        borderRadius="50%"
      />
      <br />
      <Heading as="h1" fontSize="4xl" textAlign="center" fontFamily="dosis">
        Kazuki Nitta
      </Heading>
      <p>
        Student at  <Link href="https://42tokyo.jp/" color="Coral">42Tokyo</Link>
      </p>
      <HStack mt={6} spacing={6}>
        <IconButton
          aria-label="GitHub"
          icon={<FaGithub />}
          onClick={() => window.open("https://github.com/ntk221")}
        />
        <IconButton
          aria-label="Twitter"
          icon={<FaTwitter />}
          onClick={() => window.open("https://twitter.com/knitta221")}
        />
      </HStack>
    </Box>
  );
};

export default Home;
