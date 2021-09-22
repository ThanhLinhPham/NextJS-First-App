import { Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPostById, getPostIds } from "../../lib/post";
import Link from "next/link";
import { Button } from "react-bootstrap";

const Post = (props: any) => {
  const { post } = props;
  const { title, body } = post;
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
          <Link href="/posts" passHref>
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

// Lay du lieu kieu tinh, nhung du lieu nao, tinh nao con phu thuoc va path param
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
