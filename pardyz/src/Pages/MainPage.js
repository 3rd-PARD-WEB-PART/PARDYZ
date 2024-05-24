import React from "react";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";

const MainPage = () => {
return (
  <Container>
    <div>
      <Title>실패 전시회</Title>
      <SubTitle>카테고리/홈</SubTitle>
      {/* <Create></Create>  */}
      {/* <BoardTitle></BoardTitle> */}
      {/* <Board></Board> */}
    </div>
  </Container>
);

};

const Container = styled.div`
width: 1512px;
display: flex;
justify-content: center;
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
color: #929292;`

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

export default MainPage;





