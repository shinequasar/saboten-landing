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
import { ThemeProvider } from 'styled-components';

const App = () => {
  AOS.init();
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = prefersDarkMode ? darkTheme : lightTheme;
  
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
          <Title/>
          <Introduce/>
          <Intro/>
          <CategoryList/>
          <Downloads/>
          <Makers/>
        </ThemeProvider>
    </div>
  );
}

export default App;


const lightTheme = {
  body: '#FFFFFF',
  text: '#000000',
};

const darkTheme = {
  body: '#1C1C1E',
  text: '#FFFFFF',
};