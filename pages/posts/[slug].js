import fs from "fs";
import matter from "gray-matter";
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkImages from 'remark-images';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import Link from 'next/link';
import Image from 'next/image';

// URLパラメータで渡されたslugから，対応するmdファイルを読み込む
export async function getStaticProps({ params }) {
  const file = fs.readFileSync(`posts/${params.slug}.md`, "utf-8");
  const { data, content } = matter(file);

  const result = await unified()
    .use(remarkParse)
    .use(remarkImages)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);

  return { props: { frontMatter: data, content: result.toString()} };
}

// postsディレクトリ内のmdファイルの一覧を取得し，それぞれのslugをパスとして返す
export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

const Post = ({ frontMatter, content }) => {

  return (
    <div className="prose">
      <h1 style={{ marginTop: "1em" }}>{frontMatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Post;
