import { getPostBySlug } from "../lib/lib";
import PageWithIndex from "../components/PageWithIndex";
import Markdown from "../components/Markdown";

export default function Faq({ post, markdown }) {
  return <PageWithIndex post={post} markdown={markdown}/>;
}

export async function getStaticProps() {
  const post = getPostBySlug(
    "/faq",
    ["title", "slug", "content"],
    "/"
  );

  const markdown = await Markdown({ post });

  return {
    props: { post, markdown },
  };
}
