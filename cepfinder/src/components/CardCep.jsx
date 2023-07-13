import "../styles/main.sass";

const CardCep = ({code, city, address, state, district}) => {
  return (
    <>
      <div className="cardCep">
        <div className="info">
          <h3>Code:</h3>
          <span>{code}</span>
        </div>
        <div className="info">
          <h3>State:</h3>
          <span>{state}</span>
        </div>
        <div className="info">
          <h3>City:</h3>
          <span>{city}</span>
        </div>
        <div className="info">
          <h3>District:</h3>
          <span>{district}</span>
        </div>
        <div className="info">
          <h3>Adress:</h3>
          <span>{address}</span>
        </div>
      </div>
    </>
  );
};

export default CardCep;
