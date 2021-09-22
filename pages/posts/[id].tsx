import { getPostById, getPostIds } from "../../lib/post";

const Post = (props: any) => {
  const { post } = props;
  return <div>{post.title}</div>;
};

export const getStaticPaths = async () => {
  const paths = await getPostIds();
  return {
    paths,
    fallback: false, // bat y path nao k return boi getStaticPaths se toi trang 404
  };
};

export const getStaticProps = async (props: any) => {
  const { params } = props;
  const { id } = params;
  const post = await getPostById(id);
  return {
    props: {
      post,
    },
  };
};

export default Post;
