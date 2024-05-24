import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { getOneInfoAPI } from "../API/Axios";
import { useState, useEffect } from "react";

const DetailPage = () => {
  const [info, setInfo] = useState([]);

  const id = 1;

  useEffect((id) => {
    const getInfo = async (id) => {
      const response = await getOneInfoAPI();
      setInfo(response);
      console.log(info);
    };
    getInfo(id);
  }, []);

  return (
    <Wrapper>
      <Outlet />
      <Container>
        <div>
          <Title>실패 전시회</Title>
          <Subtitle>카테고리/요리</Subtitle>
        </div>
        <Exhibit>
          <Div>
            <img src="/box.png" alt="프로필 이미지" />
            <Name>
              <Label>{info && info.title}/{info && info.painter}</Label>
            </Name>
          </Div>
          <Desc>
            {info && info.lacked}
            {/* <Comment>
              <Label>작품에 대한 감상평을 남겨주세요!</Label>
              <Nickname>
                <>별명:</>
                <Input type="textarea" placeholder="Add a comment...."></Input>
              </Nickname>
              <Input type="textarea" placeholder="Add a comment...."></Input>
              <Button>작성완료</Button>
            </Comment> */}
          </Desc>
          <Desc>{info && info.explanation}</Desc>
          <Desc>{info && info.learned}</Desc>
          <Desc>{info && info.longedfor}</Desc>
        </Exhibit>
      </Container>
    </Wrapper>
  );
};

const Img = styled.div`
width: 608px;
border-image-source : url("/border.png");
`

const Wrapper = styled.div`
width: 1512px;
`

const Curtain = styled.img`
width: 1512px;
height: 406px;
border: 1px;
position: absolute;
z-index: -1;
`

const Desc = styled.div`
display: flex;
flex-direction: column;
width: 449px;
margin-top: 90px;
`

const Div = styled.div`
display: flex;
flex-direction: column;
width: 469px;
margin-top: 17px;
`
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
margin-top: 17px;
`

const Comment = styled.div`
display: flex;
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
background-color: black;
color: white;
`

export default DetailPage;
