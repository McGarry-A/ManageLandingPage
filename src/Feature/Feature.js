import "./Feature.css";

const Feature = ({ number, title, description }) => {
  return (
    <div className="feature">
      <div className="feature-col-1">
        <h3 className="feature-number">{number}</h3>
      </div>
      <div className="feature-col-2">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
