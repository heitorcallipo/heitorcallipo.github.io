import "../styles/main.sass";

const Button = ({ handleCep, fetchData }) => {
  return (
    <button
      onClick={(e) => {
        handleCep();
        fetchData();
      }}
    >
      Enter
    </button>
  );
};

export default Button;
