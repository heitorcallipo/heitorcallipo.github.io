import "../styles/main.sass";

const Input = ({ cep, setCep }) => {
  return (
    <>
      <input
        type="text"
        placeholder="zipcode here 👇"
        value={cep}
        onChange={(e) => {
          setCep(e.target.value);
        }}
      />
    </>
  );
};

export default Input;
