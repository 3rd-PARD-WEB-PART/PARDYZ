import React from "react";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";

<<<<<<< HEAD
function BoardItem(props) {
  console.log(props);

=======
function BoardItem() {
>>>>>>> origin/kye
  return (
    <Item>
      <ItemImage />
      <Desc>
<<<<<<< HEAD
        <ItemTitle>{props.member.id}</ItemTitle>
        <ItemCreator>{props.member.name}</ItemCreator>
=======
        <ItemTitle>바나나 밟다</ItemTitle>
        <ItemCreator>김영채</ItemCreator>
>>>>>>> origin/kye
      </Desc>
    </Item>
  )
}

const Item = styled.div`
width: 306px;
height: 258.93px;
gap: 0px;
opacity: 0px;
display : block;
<<<<<<< HEAD
margin-right: 29px;
=======
>>>>>>> origin/kye
`

const ItemImage = styled.div`
width: 306px;
height: 234px;
gap: 0px;
background: #E1E1E1;
display : flex;
`

const Desc = styled.div`
margin-top: 3px;
display: flex;
justify-content: right;
height: 23.93px;
width: 306px;
`

const ItemTitle = styled.div`
display: flex;
width: 112.47px;
height: 16.93px;
top: 242px;
left: 127px;
gap: 0px;
opacity: 0px;
font-family: Apple SD Gothic Neo;
font-size: 22px;
font-weight: 600;
line-height: 20px;
text-align: left;
color: #929292;
`


const ItemCreator = styled.div`
width: 60px;
height: 15px;
top: 242px;
left: 246px;
gap: 0px;
opacity: 0px;
font-family: Apple SD Gothic Neo;
font-size: 22px;
font-weight: 500;
line-height: 20px;
text-align: left;
color: #929292;
`

export default BoardItem;