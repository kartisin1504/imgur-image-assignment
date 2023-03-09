import { NavLink } from "react-router-dom";
const MainNavigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/static"> StaticImgContent</NavLink>
      </li>
      <li>
        <NavLink to="/service"> FetchImgApi</NavLink>
      </li>
    
    </ul>
  );
};
export default MainNavigation;
