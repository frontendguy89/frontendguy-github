import { type Post } from "@/posts";
import { Roboto_Slab } from "next/font/google";
import Link from "next/link";

const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
    weight: "700",
  });


export function Posts({ posts }: { posts: Post[] }) {
  return (
    <ol>
      {posts.map(({ slug, title, publishDate, categories }) => (
        <li key={slug}>
          <h2 className={robotoSlab.className}>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h2>
          <p>
            <strong>Published:</strong>{" "}
            {new Date(publishDate).toLocaleDateString()}{" "}
            <strong>Categories:</strong>{" "}
          </p>
        </li>
      ))}
    </ol>
  );
}