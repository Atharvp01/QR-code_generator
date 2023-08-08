import QRCode from "react-qr-code";
import { useState } from "react";
import styled from "styled-components";

const QR_Generator = () => {
  const [link, setLink] = useState("");
  const [hasButtonClicked, setHasButtonClicked] = useState(false);
  const handleLink = (e) => {
    setLink(e.target.value);
  };

  return (
    <>
      <Heading className="heading">
        <h1>Enter the link whose QR code has to be generated</h1>
        <input onChange={handleLink}></input>
      </Heading>
      <ButtonContainer className="Qr">
        <button onClick={() => setHasButtonClicked(true)}>Generate QR</button>
      </ButtonContainer>
      <div></div>
      <div>{hasButtonClicked && <QRCode value={link} />}</div>
    </>
  );
};

const Heading = styled.div`
  h1 {
    margin-top: 2rem;
  }
  text-align: center;
  input {
    border: none;
    background-color: white;
    color: black;
    border-radius: 3px;
    padding: 5px;
    margin-top: 2rem;
  }
`;

const ButtonContainer = styled.div`
  button {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export default QR_Generator;
