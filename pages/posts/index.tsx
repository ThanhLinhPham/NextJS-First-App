import Layout from "../../components/Layout";
import CardView from "../../components/Card";
import { getPosts } from "../../lib/post";

// const posts = [
//   { id: 1, title: "Next JS", content: "Very good" },
//   { id: 2, title: "React JS", content: "Best" },
//   { id: 3, title: "Vue JS", content: "Very nice" },
// ];

const Posts = (props: any) => {
  const { posts } = props;
  return (
    <Layout>
      {(posts || []).map((item: any) => (
        <CardView key={`post${item?.id}`} item={item} />
      ))}
    </Layout>
  );
};

// Get static data from BE
// Lấy dữ liệU tĩnh render ra html trước
export const getStaticProps = async () => {
  const posts = await getPosts(10);
  return {
    props: JSON.parse(
      JSON.stringify({
        posts,
      })
    ),
  };
};

export default Posts;
