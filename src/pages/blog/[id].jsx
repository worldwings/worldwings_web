import BlogDetailsScreen from "@/components/screens/blog_details/blog_details";
import SEO from "@/components/common/seo/seo";
import { BLOG_POSTS } from "@/constants/constants";
import mammoth from "mammoth";
import fs from "fs";
import path from "path";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const post = BLOG_POSTS.find((p) => p.id === id);

  let detailsHTML = null;

  if (post && post.folder) {
    try {
      const docPath = path.join(
        process.cwd(),
        "public",
        "blogs",
        post.folder,
        `${post.folder}.docx`
      );

      if (fs.existsSync(docPath)) {
        const buffer = fs.readFileSync(docPath);
        const result = await mammoth.convertToHtml({ buffer });
        detailsHTML = result.value;
      }
    } catch (err) {
      console.error("Blog SSR Error:", err);
    }
  }

  return {
    props: {
      id,
      detailsHTML,
    },
  };
}

const BlogDetailsPage = ({ id, detailsHTML }) => {
  const post = BLOG_POSTS.find((p) => p.id === id);

  return (
    <>
      <SEO 
        title={post ? post.title : "Blog"} 
        description={post ? post.title : "Read our latest travel stories"} 
      />
      <BlogDetailsScreen id={id} detailsHTML={detailsHTML} />
    </>
  );
};

export default BlogDetailsPage;
