import styled from "styled-components";
import {Outlet, NavLink} from "react-router-dom";

const Sidebar = () => {
  return(
  <>
    <Div>
      <div>카테고리</div>
      <NavLink />
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
