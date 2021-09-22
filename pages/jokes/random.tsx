import { Button, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getRandomJoke } from "../../lib/jokes";
import Link from "next/link";

const Random = (props: any) => {
  const { joke } = props;
  const { value } = joke;
  return (
    <Layout>
      <Card>
        <Card.Body>
          <Card.Title>Here is your random joke for today!</Card.Title>
          <Card.Text>{value}</Card.Text>
          <Link href="/" passHref>
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const joke = await getRandomJoke();
  return {
    props: {
      joke,
    },
  };
};

export default Random;
