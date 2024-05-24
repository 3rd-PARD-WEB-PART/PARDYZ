import React from "react";
import styled from "styled-components";

function MenuBar() {
  return(
    <Bar>
      <BarButton>홈</BarButton>
      <BarButton>여행</BarButton>
      <BarButton>요리</BarButton>
      <BarButton>헤어</BarButton>
      <BarButton>패션</BarButton>
      <BarButton>맛집</BarButton>
    </Bar>
  )
}

const Bar = styled.div`
width: 866px;
height:20px;
top: 214px;
left: 323px;
padding: 10px;
gap: 10px;
border-radius: 6px;
opacity: 0px;
display: flex;
align-items: center;
margin-bottom: 30px;
background: #BC050AB2;
`

const BarButton = styled.div`
width: 141px;
height: 17px;
gap: 0px;
opacity: 0px;
font-family: 210 Cheoeumcheoreom;
font-size: 16px;
font-weight: 400;
line-height: 18px;
text-align: center;
color: #E8E8E8;
&:hover{
  cursor: pointer;
}
`

export default MenuBar;