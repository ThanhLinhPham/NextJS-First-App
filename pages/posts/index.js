import Layout from "../../components/Layout";
import CardView from "../../components/Card";

const posts = [
  { id: 1, title: "Next JS", content: "Very good" },
  { id: 2, title: "React JS", content: "Best" },
  { id: 3, title: "Vue JS", content: "Very nice" },
];

const Posts = () => {
  return (
    <Layout>
      {posts.map((item) => (
        <CardView key={`post${item.id}`} item={item} />
      ))}
    </Layout>
  );
};

export default Posts;
