import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";
<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import { getOneInfoAPI } from "../API/Axios";
import { useState, useEffect } from "react";

const DetailPage = () => {
  const [info, setInfo] = useState([]);

  const id = 43;

  useEffect(() => {
    const getInfo = async (id) => {
      try{
        const response = await getOneInfoAPI(id);
        setInfo(response);
        console.log(info);
      } catch(err) {
        console.error(err);
      }
      
    };
    getInfo(id);
  }, []);

  return (
    <Wrapper>
      <Outlet />
      <Container>
        <div>
          {/* <Img><Curtain src="/curtain.png" /></Img> */}
=======

const DetailPage = () => {
  return (
      <Container>
        <div>
>>>>>>> origin/kye
          <Title>실패 전시회</Title>
          <Subtitle>카테고리/요리</Subtitle>
        </div>
        <Exhibit>
          <Div>
<<<<<<< HEAD
            <img src="/box.png" alt="프로필 이미지" />
            <Name>
              <Label>{info && info.title}/{info && info.painter}</Label>
            </Name>
          </Div>
          <Desc>
            <Label>내가 한 실패는?</Label>
            {info && info.lacked}
          </Desc>
          <Line />
          <Desc>
            <Label>하지만 실패를 통해 이런 것들을 배웠어요!</Label>
            {info && info.explanation}
          </Desc>
          <Line />
          <Desc>
            <Label>그래서 이런 점을 깨닫게 되었어요</Label>
            {info && info.learned}
          </Desc>
          <Line />
          <Desc>
            <Label>실패를 반복하지 않기 위해, 이렇게 하겠습니다!</Label>
            {info && info.longedfor}
          </Desc>
          <Line />
          {/* <Desc>
            <Comment>
              <Label>작품에 대한 감상평을 남겨주세요!</Label>
              <Nickname>
                <>별명:</>
                <Input type="textarea" placeholder="Add a comment...."></Input>
              </Nickname>
              <Input type="textarea" placeholder="Add a comment...."></Input>
              <Button>작성완료</Button>
            </Comment>
          </Desc> */}
        </Exhibit>
      </Container>
    </Wrapper>
  );
};

const Img = styled.div`
width: 608px;
border-image-source : url("/border.png");
`

const Line = styled.hr`
height: 1px;
width: 449px;
background-color: #E8E8E8;
border: none;
`

const Wrapper = styled.div`
width: 1512px;
`

const Curtain = styled.img`
border: 1px;
top: 0;
position: fixed;
z-index: -1;
`

const Desc = styled.div`
display: flex;
flex-direction: column;
width: 449px;
margin-top: 90px;
`

=======
            <img src="/image.png" alt="프로필 이미지" />
            <Name>
              <Label>작품명/작가명</Label>
            </Name>
          </Div>
          <Div>
            <p>
              본격적인 칭찬의 장을 마련해서  칭찬하기 쉬운 환경을 조성해 칭찬을 모두 기록하고 정리하면 어떨까? 본격적인 칭찬의 장을 마련해서  칭찬하기 쉬운 환경을 조성해 칭찬을 모두 기록하고 정리하면 어떨까?본격적인 칭찬의 장을 마련해서  칭찬하기 쉬운 환경을 조성해 칭찬을 모두 기록하고 정리하면
            </p>
          </Div>
          <Comment>
            <Label>작품에 대한 감상평을 남겨주세요!</Label>
            <input type="textarea" placeholder="Add a comment...."></input>
          </Comment>
          <input type="textarea" placeholder="Add a comment...."></input>
          <Button>작성완료</Button>
        </Exhibit>
      </Container>
  );
};

>>>>>>> origin/kye
const Div = styled.div`
display: flex;
flex-direction: column;
width: 469px;
<<<<<<< HEAD
margin-top: 17px;
`
=======
height: 358px;
margin-top: 65px;
`

>>>>>>> origin/kye
const Name = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`

const Exhibit = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 608px;
`

const Container = styled.div`
<<<<<<< HEAD
background-color: #FFFFFF;
=======
>>>>>>> origin/kye
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 1512px;
margin-top: 30px;
`

const Title = styled.p`
font-size: 42px;
font-weight: 600;
line-height: 18px;
text-align: center;
color: #929292;
`

const Subtitle = styled.p`
font-size: 14px;
font-weight: 500;
line-height: 18px;
text-align: center;
color: #929292;
`

const Label = styled.p`
font-size: 22px;
font-weight: 500;
line-height: 18px;
<<<<<<< HEAD
margin-top: 17px;
=======
text-align: right;
margin-top: 17px;
margin-bottom: 90px;
>>>>>>> origin/kye
`

const Comment = styled.div`
display: flex;
<<<<<<< HEAD
flex-direction: column;
justify-content: flex-start;
width: 469px;
margin-top: 124px;
`

const Nickname = styled.div`
display: flex;
`

const Input = styled.input`
background-color: #F7F7F7;
width: 100%;
height: 36px;
padding: 9px;
`

const Button = styled.button`
background-color: #FFBD3D;
color: #222222;

text-align: center;
width: 449px;
height: 51px;
font-weight: 500;
`
=======
flex-direction: row;
justify-content: flex-start;
`

const Button = styled.button``
>>>>>>> origin/kye

export default DetailPage;
