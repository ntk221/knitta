import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
        <div className="border rounded-lg">
          <Image
            src={`/${post.frontMatter.image}`}
            alt={post.frontMatter.title}
            width={300}
            height={200}
          />
        </div>
        <div className="px-2 py-4">
          <h1 className="font-bold text-lg">{post.frontMatter.title}</h1>
          <span>{post.frontMatter.date}</span>
        </div>
    </Link>
  );
};

export default PostCard;