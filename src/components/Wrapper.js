import Buttons from "./Buttons";
import SideNavBar from "./SideNavBar";
import "./Styles.css";

export default function Wrapper() {
  return (
    <div className="wrapper">
      <SideNavBar />
      <Buttons />
    </div>
  );
}
