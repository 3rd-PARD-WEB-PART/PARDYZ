
import React from "react";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";
import BoardItem from "../Components/BoardItem";
import { getAllInfoAPI } from "../API/Axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuBar from "../Components/MenuBar";
import CreateButton from "../Components/CreateButton";
import { useRecoilState } from "recoil";
import {first, second, third, fourth} from "../Atom";

const MainPage = () => {

  const [first, setFirst] = useRecoilState()
  const tempList = [
    {
      id : 1,
      name : "kim"
    },
    {
      id : 2,
      name : "park2"
    },
    {
      id : 3,
      name : "park3"
    },

  ];

  // const getMember = async () => {
  //   const [data, setData] = useState();

  //   const newData = await getAllInfoAPI();

  //   setData(newData);
  // };

  

return (
  <Whole>
  <Container>
    <Menu>
      <MenuBar/>
    </Menu>
      <Svg>
        <Link to="/detail">  
          <CreateButton/> 
        </Link>
      </Svg>
      {/* <Tiara/>
      <Title>실패 전시회</Title>
      <SubTitle>카테고리/홈</SubTitle>
      <MenuBar/>
      <SecondHeader>
        <BoardTitle>금주의 실패작</BoardTitle>
        <Link to="/detail">
          <Create>작품 올리러 가기</Create> 
        </Link>
      </SecondHeader>
      <Board>
      
          {tempList.map((item) => {
            return <BoardItem key={item.id} member={item}/>;
          })}
      
      </Board> */}

  </Container>
  </Whole>
);
};

const Menu = styled.div`
margin-top: 70px;
`

const Svg = styled.div`
&:hover{
  cursor: pointer;
}
margin-top: 75px;
margin-left: 750px;
display: flex;
`

const Whole = styled.div`
background-image: url("/MainPage.png");
background-size: cover;
width: 1512px;
height: 1370px;
// top: 900px;
gap: 0px;
opacity: 0px;
`

const Tiara = styled.div`
width: 120px;
height: 40px;
display: flex;
background-image: url("/Vector.png");
background-size: cover;
margin-bottom: 30px;
`

const Container = styled.div`

flex-direction: column;
display: flex;
align-items: center;
margin-top:90px;
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
color: #E8E8E8;
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
margin-bottom: 10px;
color: #E8E8E8;
`

const Create = styled.button`
width: 150px;
height: 15px;
top: 347px;
left: 1040px;
padding: 18px 19px 19px 19px;
gap: 0px;
border-radius: 6px;
opacity: 0px;
background: linear-gradient(180deg, #FFBD3D 0%, #FFBD3D 78.94%, #9E7018 143.52%);
box-shadow: 0px 4px 4px 0px #00000040;
&:hover{
  cursor: pointer;
}
display: flex;
font-family: 210 Cheoeumcheoreom;
font-size: 22px;
font-weight: 400;
line-height: 18px;
text-align: center;
justify-content: center;
`
const BoardTitle = styled.div`
width: 267px;
height: 17px;
top: 365px;
left: 283px;
gap: 0px;
border: 0.4px 0px 0px 0px;
opacity: 0px;
font-family: 210 Cheoeumcheoreom;
font-size: 32px;
font-weight: 400;
line-height: 18px;
text-align: center;
display:flex;
justify-content: left;
color: #E8E8E8;
margin-top: 30px;
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
margin-top: 10px;
`

export default MainPage;



