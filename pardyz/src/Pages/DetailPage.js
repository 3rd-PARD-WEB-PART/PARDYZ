import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";
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
      {/* <Outlet /> */}
      <Header>
        <img src="/top.png" width="10%" />
        <img src="/logo.png" width="30%" />
      </Header>
      {/* <Subtitle>카테고리/요리</Subtitle> */}
      <Container>
        <Exhibit>
          <Div>
            <File><img src="/file.png" /></File>
            <Name>
              <Label>{info && info.title}/{info && info.painter}</Label>
            </Name>
          </Div>
          <Desc>
            <Label>✓ 내가 한 실패는?</Label>
            {info && info.lacked}
          </Desc>
          <Line />
          <Desc>
            <Label>✓ 하지만 실패를 통해 이런 것들을 배웠어요!</Label>
            {info && info.explanation}
          </Desc>
          <Line />
          <Desc>
            <Label>✓ 그래서 이런 점을 깨닫게 되었어요</Label>
            {info && info.learned}
          </Desc>
          <Line />
          <Desc>
            <Label>✓ 실패를 반복하지 않기 위해, 이렇게 하겠습니다!</Label>
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

const File = styled.div`
width: auto;
border-image-source : url("/border.png");
`

const Header = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0px;
margin-top: 10px;
`

const Line = styled.hr`
height: 1px;
width: 449px;
background-color: #E8E8E8;
border: none;
`

const Wrapper = styled.div`
width: 1512px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
z-value: -1;
background-image : url("/bg.png");
background-repeat : no-repeat;
background-size : cover;
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
background-color: #FFFFFF;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 1104px;
margin-top: 30px;
`

const Title = styled.p`
font-family: 'cheoeumcheoreom-210', sans-serif;
font-style: normal;
font-weight: 300;
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
margin: 0px;
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
background-color: #FFBD3D;
color: #222222;

text-align: center;
width: 449px;
height: 51px;
font-weight: 500;
`

export default DetailPage;
