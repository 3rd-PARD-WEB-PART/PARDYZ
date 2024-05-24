import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <Div>
        <div>카테고리</div>
        <div>
          <div>여행</div>
          <div>요리</div>
          <div>머리</div>
          <div>패션</div>
          <div>맛집</div>
        </div>
      </Div>
    </>
  );
};

const Div = styled.div`
  width: 153px;
  height: auto;
  background: beige;
`;
export default Sidebar;
