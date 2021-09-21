import { Card } from "react-bootstrap";

interface CardViewProps {
  item: {
    title: string;
    content: string;
  };
}

const CardView = (props: CardViewProps) => {
  const { item } = props;
  const { title, content } = item;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardView;
