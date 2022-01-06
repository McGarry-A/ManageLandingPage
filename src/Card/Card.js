import "./Card.css";

const Card = ({ image, author, quote }) => {
  return (
    <div>
      <img src={image} alt="avatar" />
      <cite>{author}</cite>
      <blockquote>{quote}</blockquote>
    </div>
  );
};

export default Card;
