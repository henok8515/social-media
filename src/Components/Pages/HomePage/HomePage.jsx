import { faMale } from "@fortawesome/free-solid-svg-icons";
import "./HomePage.scss";
import Left from "../../Left/Left";
import Center from "../../Center/Center";
import Right from "../../Right/Right";
function HomePage() {
  return (
    <div className="home-page">
      <Left />
      <Center />
      <Right />
      <faMale />
    </div>
  );
}

export default HomePage;
