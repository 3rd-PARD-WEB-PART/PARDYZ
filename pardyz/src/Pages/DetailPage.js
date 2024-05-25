import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { getOneInfoAPI } from "../API/Axios";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { firstState, secondState, thirdState, fourthState } from "../Atom";

const DetailPage = () => {
  const [first, setFirst] = useRecoilState(firstState);
  const [second, setSecond] = useRecoilState(secondState);
  const [third, setThird] = useRecoilState(firstSthirdStatetate);
  const [fourth, setFourth] = useRecoilState(fourthState);

  const [info, setInfo] = useState([]);

  const id = 43;

  useEffect(() => {
    const getInfo = async (id) => {
      try {
        const response = await getOneInfoAPI(id);
        setInfo(response);
        console.log(info);
      } catch (err) {
        console.error(err);
      }
    };
    getInfo(id);
  }, []);

  return (
    <Wrapper>
      <Container>
        <Exhibit>
          {/* 이미지 & 이름 */}
          <Div>
            <Name>
              <Author>dd{info && info.title} </Author>
              <PaintTitle>dd{info && info.painter}</PaintTitle>
            </Name>
          </Div>

          <Down>
            <Desc>
              <Label>✓ 내가 한 실패는?</Label>
              <div>{first}</div>

            </Desc>
            <Line />
            <Desc>
              <Label>✓ 하지만 실패를 통해 이런 것들을 배웠어요!</Label>

              <div>{second}</div>

            </Desc>
            <Line />
            <Desc>
              <Label>✓ 그래서 이런 점을 깨닫게 되었어요</Label>

              <div>{third}</div>

            </Desc>
            <Line />
            <Desc>
              <Label>✓ 실패를 반복하지 않기 위해, 이렇게 하겠습니다!</Label>
              <div>{fourth}</div>

            </Desc>
            <Line />
          </Down>
        </Exhibit>
      </Container>
    </Wrapper>
  );
};

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  margin-top: 10px;
`;

export const Line = styled.hr`
  height: 1px;
  width: 600px;
  background-color: #e8e8e8;
  border: none;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  width: 1512px;
  height: 2000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* z-value: -1; */
  background-image: url("/Detail.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  width: 449px;
  gap: 42px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 469px;
  margin-top: 450px;
`;

const Down = styled.div`
  margin-top: 65px;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
`;

const Author = styled.div`
  color: #1b1b1b;
  font-family: "Apple SD Gothic Neo";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`;

const PaintTitle = styled.div`
  color: #1b1b1b;
  font-family: "Apple SD Gothic Neo";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 81.818% */
`;

const Exhibit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 608px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 530px;
`;

export const Label = styled.div`
  font-size: 22px;
  font-weight: 500;
`;

export default DetailPage;
