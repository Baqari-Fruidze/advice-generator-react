import styled from "styled-components";
import { useEffect, useState } from "react";
import dice from "/images/icon-dice.svg";
import divider from "/images/pattern-divider-desktop.svg";
interface AdviceType {
  slip: {
    id: number;
    advice: string;
  };
}
function App() {
  const [advice, setAdvice] = useState<AdviceType>();
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("	https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data);
    };
    fetchData();
  }, [count]);
  return (
    <Container>
      <h1> advice #{advice?.slip.id}</h1>
      <p>{advice?.slip.advice}</p>
      <img src={divider} alt="" />
      <Circle onClick={() => setCount((prev) => prev + 1)}>
        <img src={dice} alt="" />
      </Circle>
    </Container>
  );
}
const Circle = styled.div`
  margin-top: 5rem !important;
  margin-bottom: -8rem !important;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 64px;
  background: var(--Neon-Green, #53ffaa);
  box-shadow: 0px 0px 40px 0px #53ffaa;
  width: 6.4rem;
  height: 6.4rem;
  flex-shrink: 0;
  &:hover {
    cursor: pointer;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4.8rem;
  width: 54rem;
  border-radius: 15px;
  background: var(--Dark-Grayish-Blue, #313a48);
  box-shadow: 30px 50px 80px 0px rgba(0, 0, 0, 0.1);
  & h1 {
    color: var(--Neon-Green, #53ffaa);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 4.086px;
    margin-bottom: 2.4rem;
  }
  p {
    color: var(--Light-Cyan, #cee3e9);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.3px;
    margin-bottom: 4.8rem;
  }
`;
export default App;
