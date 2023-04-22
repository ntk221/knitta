import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Grid, GridItem } from "@chakra-ui/react";
import PostCard from "../components/postcard";


export const getStaticProps = () => {
  const files = fs.readdirSync("posts");
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const fileContent = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });
  return {
    props: {
      posts: posts,
    },
  };
};

const Home = ({ posts }) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4} my={8}>
      {posts.map((post) => (
        <GridItem key={post.slug}>
          <PostCard post={post} />
        </GridItem>
      ))}
    </Grid>
  );
}

export default Home;

