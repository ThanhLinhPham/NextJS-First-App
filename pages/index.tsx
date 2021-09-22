import type { NextPage } from "next";
import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../components/Layout";
import Link from "next/dist/client/link";

const Home: NextPage = () => {
  return (
    <Layout>
      <Jumbotron>
        <h1>My Next App</h1>
        <p>This is my Next JS App</p>
        <p>
          <Link href="/posts">
            <Button variant="primary">Posts</Button>
          </Link>
        </p>
      </Jumbotron>
    </Layout>
  );
};

export default Home;
