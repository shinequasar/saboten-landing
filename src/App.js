import Title from "./componets/Title";
import Introduce from "./componets/Itroduce";
import "./style/colorToken.scss"
import Intro from "./componets/Intro";
import { Reset } from 'styled-reset'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CategoryList from './componets/CategoryList'
import Downloads from "./componets/Downloads";
import Makers from "./componets/Makers";

const App = () => {
  AOS.init();
  return (
    <div className="App">
        <Title/>
        <Introduce/>
        <Intro/>
        <CategoryList/>
        <Downloads/>
        <Makers/>
    </div>
  );
}

export default App;

