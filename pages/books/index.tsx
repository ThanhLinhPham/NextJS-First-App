import { Button, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getRandomJoke } from "../../lib/jokes";
import Link from "next/link";
import { getBooks } from "../../lib/books";

const Books = (props: any) => {
  const { books } = props;
  //   const { value } = joke;
  return (
    <Layout>
      {books.map((book: any, index: number) => {
        return (
          <Card key={index}>
            <Card.Body>
              <Card.Title>{book?.bookName}</Card.Title>
              <Card.Text>{book?.bookContent}</Card.Text>
              <Link href="/" passHref>
                <Button variant="dark">Back</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
      My book
    </Layout>
  );
};

// Du lieu phu thuoc vao request nhưng vẫn tạo ra HTML tĩnh cho FE
export const getStaticProps = async () => {
  const books = await getBooks();
  console.log(books);
  return {
    props: JSON.parse(
      JSON.stringify({
        books,
      })
    ),
  };
};

export default Books;
