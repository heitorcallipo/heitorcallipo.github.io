import { useState, useEffect } from "react";
import "../styles/main.sass";
import Button from "./Button";
import Input from "./Input";
import CardCep from "./CardCep";
import axios from "axios";

const ContainerCep = () => {
  const [showCep, setShowCep] = useState(false);
  const [address, setAddress] = useState("");
  const [code, setCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [cep, setCep] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://cdn.apicep.com/file/apicep/${cep}.json`
      );
      setAddress(response.data.address);
      setCode(response.data.code);
      setCity(response.data.city);
      setState(response.data.state);
      setDistrict(response.data.district);
    } catch (error) {
      // Lidar com o erro aqui, exibir uma mensagem de erro, definir um estado de erro.
      console.log(error);
    }
  };

  const handleCep = () => {
    setShowCep((prevState) => !prevState);
  };

  return (
    <>
      <div className="container">
        <div className="innerContainer">
          <Input cep={cep} setCep={setCep} />
          <Button handleCep={handleCep} fetchData={fetchData} />
        </div>
        {showCep === true && (
          <CardCep
            address={address}
            code={code}
            city={city}
            state={state}
            district={district}
          />
        )}
      </div>
    </>
  );
};

export default ContainerCep;
