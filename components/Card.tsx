import { Card } from "react-bootstrap";

interface CardViewProps {
  item: {
    title: string;
    body: string;
  };
}

const CardView = (props: CardViewProps) => {
  const { item } = props;
  const { title, body } = item;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardView;
