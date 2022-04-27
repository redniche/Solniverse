import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface IDonation {
  nickname: string;
  amount: number;
  message: string;
}

function Payment() {
  const navigate = useNavigate();

  const [nickName, setNickName] = useState("");
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDonation>({ mode: "onBlur" });

  const onClick = () => {
    alert("팬텀 월렛을 이용한 Solana Pay 진행할게용");
  };
  return (
    <Container>
      <PageName>Payment Page</PageName>
      <Line />
      <Wrapper>
        <PaymentWrapper>
          <Title>Your Information</Title>
          <InfoWrapper>
            <Name>백종원</Name>
            <AccountTitle>Account</AccountTitle>
            <Account>Pu674dikkyAAUotqgQUZMe5fHzsgnYwFKQEmjEx4oR8</Account>
          </InfoWrapper>
          <Title>Creator Information</Title>
          <InfoWrapper>
            <Name>홀리냥</Name>
            <AccountTitle>Account</AccountTitle>
            <Account>Pu674dikkyAAUotqgQUZMe5fHzsgnYwFKQEmjEx4oR8</Account>
          </InfoWrapper>
          <Title>Donate Information</Title>
          <TotalPriceWrapper>
            <PriceWrapper>
              <Price>Donate Price</Price>
              <USDC>100 USDC</USDC>
            </PriceWrapper>
            <Line />
            <PriceWrapper>
              <Price>Total</Price>
              <USDC>100.00 USDC</USDC>
            </PriceWrapper>
          </TotalPriceWrapper>
          <ButtonWrapper>
            <Button onClick={onClick}>Pay</Button>
          </ButtonWrapper>
        </PaymentWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin: 32px 64px;
  min-width: 400px;
`;

const PageName = styled.div`
  font-size: 32px;
  font-weight: bold;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const PaymentWrapper = styled.div`
  width: 70%;
  min-width: 400px;
`;

const InfoWrapper = styled.div`
  border-radius: 5px;
  padding: 20px;
  background-color: #ececec;
`;
const Title = styled.div`
  margin-top: 32px;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: bold;
`;
const Name = styled.div`
  font-size: 16px;
`;
const AccountTitle = styled.div`
  font-weight: bold;
  margin-top: 8px;
`;
const Account = styled.div`
  font-size: 14px;
  color: #686868;
  margin-top: 2px;
`;

const TotalPriceWrapper = styled.div`
  margin-top: 16px;
  background-color: #ececec;
  border-radius: 5px;
  padding: 20px;
`;
const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Price = styled.div`
  font-size: 14px;
`;
const USDC = styled.div`
  font-weight: bold;
`;

const Line = styled.hr`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const ButtonWrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 30%;
  height: 40px;
  color: #ffffff;
  background-color: #00a8ff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export default Payment;
