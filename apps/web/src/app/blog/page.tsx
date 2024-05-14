import { categories } from "../../categories";
import { Pagination } from "../components/mdx/pagination";
import { Posts } from "../components/mdx/posts";
import { getPaginatedPosts, postsPerPage } from "../../posts";
import { Roboto_Slab } from "next/font/google";
import Breadcrumb from "../components/Breadcrumb";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: "700",
});

export default async function Home() {
  const { posts, total } = await getPaginatedPosts({
    page: 1,
    limit: postsPerPage,
  });

  return (
    <main>
      <Breadcrumb
              homeElement={"Home"}
              separator={<span> / </span>}
              activeClasses="ml-2 dark:text-[#e6e6e6]"
              containerClasses="flex py-5"
              listClasses="hover:underline mr-2 font-bold"
              capitalizeLinks
            />
      <h1 className={robotoSlab.className}>Next.js MDX Blog</h1>
      <Posts posts={posts} />

      <Pagination
        baseUrl="/page"
        page={1}
        perPage={postsPerPage}
        total={total}
      />

      <h2 className={robotoSlab.className}>Categories</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <a href={`category/${cat}`}>{cat}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
