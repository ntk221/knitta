import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Flex flexDirection="column" minHeight="100vh" >
      <Box py={4} textAlign="center" borderRadius={8} > 
          <Heading as="h1" size="2xl" fontWeight="bold" fontFamily="dosis">
            About Me
          </Heading>
      </Box>
      <Box flexGrow={1} px={4} py={8}>
        <Heading as="h2" size="lg" mb={4} fontFamily="dosis">
          👋Hi, I'm Kazuki Nitta.
        </Heading>
        <Text mb={4}>
          42Tokyoでソフトウェアエンジニアリングを学んでいます。特に関心のある開発領域は，Webアプリケーション開発，システムプログラミングです。{" "}
          <br />
          ソフトウェアの開発手法についても興味があり，ソフトウェアをどのように設計し，管理するべきかという点について42のプロジェクトを通して学習しています。{" "}
          <br />
        </Text>
        <Text mb={4}>以下は現在の私のスキルです。</Text>
        <List styleType="disc">
          <ListItem>
            C言語, JavaScript, TypeScript, React, Next.js, Node.js, MongoDB,
            PostgreSQL, Docker, Git, GitHub, Linux, Unix , etc...
          </ListItem>
          <ListItem>
            簡単なWebアプリケーションの開発，データベースの設計，構築
          </ListItem>
          <ListItem>
            Unix系のOSにおけるターミナル上での作業, Dockerを用いた開発
          </ListItem>
          <ListItem>GitHubを用いたチーム開発</ListItem>
          <ListItem>一次資料を読み込むことができる程度の英語力</ListItem>
          <ListItem>
            プログラミングにおける基本的なデータ構造，アルゴリズムの理解
          </ListItem>
          <ListItem>コンピュータシステムの基礎知識(オペレーティングシステムの基礎，コンピュータの構成)</ListItem>
        </List>
        <Text>etc..</Text>
      </Box>
    </Flex>
  );
};

export default AboutMe;
