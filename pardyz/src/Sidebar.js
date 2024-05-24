import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <BigDiv>
      <Div>
        <div>카테고리</div>
        <Menus>
          <div>여행</div>
          <div>요리</div>
          <div>머리</div>
          <div>패션</div>
          <div>맛집</div>
        </Menus>
      </Div>
      <Outlet />
    </BigDiv>
  );
};

const BigDiv = styled.div`
  display: flex;
  white-space: nowrap;
`;
const Div = styled.div`
  gap: 23.6px;
  width: 153px;
  height: auto;
  display: flex;
  flex-direction: column;

  font-size: 34px;
  color: #000;
  font-family: "Apple SD Gothic Neo";
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
`;

const Menus = styled.div`
  display: flex;
  flex-direction: column;
  color: #222;
  font-family: "Hiragino Kaku Gothic Pro";
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  gap: 19.89px;
`;

export default Sidebar;
