import React from "react";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";
import BoardItem from "../Components/BoardItem";

const MainPage = () => {
  // const tempList = [
  //   {
  //     id : 1,
  //     name : "kim"
  //   },
  //   {
  //     id : 1,
  //     name : "park"
  //   }
  // ];
return (
  <Container>
      <Title>실패 전시회</Title>
      <SubTitle>카테고리/홈</SubTitle>
      <SecondHeader>
        <BoardTitle>금주의 실패작</BoardTitle>
        <Create>작품 올리러 가기</Create> 
      </SecondHeader>
      <Board>
        <BoardItem/>
      </Board>
  </Container>
);
};

const Container = styled.div`
width: 1512px;
flex-direction: column;
display: flex;
align-items: center;
margin-top:99px;
`

const Title = styled.div`
width: 267px;
height: 17px;
top: 141px;
left: 730px;
gap: 0px;
opacity: 0px;
font-family: Apple SD Gothic Neo;
font-size: 50px;
font-weight: 600;
line-height: 18px;
text-align: center;
color: #929292;
margin-bottom: 20px;
`

const SubTitle = styled.div`
width: 120px;
height: 17px;
top: 179px;
left: 804px;
gap: 0px;
opacity: 0px;
font-family: Apple SD Gothic Neo;
font-size: 16px;
font-weight: 500;
line-height: 18px;
text-align: center;
color: #929292;
`

const Create = styled.button`
width: 200px;
height: 54px;
top: 240px;
left: 1120px;
padding: 21px 18.75px 15px 19.25px;
gap: 0px;
opacity: 0px;
background-color: #E8E8E8;
color: #929292;
display: flex;
justify-content: center;
align-items: center;
`
const BoardTitle = styled.div`
width: 267px;
height: 17px;
top: 271px;
left: 348px;
gap: 0px;
opacity: 0px;
font-family: Apple SD Gothic Neo;
font-size: 32px;
font-weight: 600;
line-height: 18px;
display:flex;
justify-content: left;
color: #929292;
margin-top: 50px;
`

const SecondHeader = styled.div`
width: 976px;
display: flex;
justify-content: space-between;
align-items: bottom;
`

const Board = styled.div`
width: 976px;
height: 830.79px;
display : flex;
`

export default MainPage;





