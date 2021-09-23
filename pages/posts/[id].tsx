import { Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPostById, getPostIds } from "../../lib/post";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { useRouter } from "next/dist/client/router";
import { Spinner } from "react-bootstrap";

const Post = (props: any) => {
  const router = useRouter();
  // Neu trang chua tao ra, isFallback cua router === true
  // Va trang tam thoi sau day duoc render
  if (router.isFallback) {
    return (
      <Layout>
        <div
          style={{
            width: "100%",
            minHeight: 100,
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Spinner animation="border" role="status" variant="dark">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      </Layout>
    );
  }

  // Khi getStaticProps() chay xong lan dau tien
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
  const paths = await getPostIds(5);
  return {
    paths,
    // bat y path nao k return boi getStaticPaths se toi trang 404
    // fallback: false,

    // path nao k return se show trang tam thoi => se doi getStaticProps prop chay => getStaticProps chay xong se return trang hoan chinh
    fallback: true,
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
