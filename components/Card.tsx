import { Card } from "react-bootstrap";
import Link from "next/link";

interface CardViewProps {
  item: {
    title: string;
    body: string;
    id: number;
  };
}

const CardView = (props: CardViewProps) => {
  const { item } = props;
  const { title, body, id } = item;
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {id}--{title}
        </Card.Title>
        <Card.Text>{body}</Card.Text>
        <Link href={`/posts/${id}`} passHref>
          <Card.Link>See more</Card.Link>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardView;
