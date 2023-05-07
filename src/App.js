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
import styled, { ThemeProvider } from 'styled-components';
import MoveLogo from "./componets/MoveLogo";

const App = () => {
  AOS.init();
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = prefersDarkMode ? darkTheme : lightTheme;
  
  return (
    <Main className="App">
       <ThemeProvider theme={theme}>
          <Title/>
          <Introduce/>
          <MoveLogo/>
          <Intro/>
          <CategoryList/>
          <Downloads/>
          <Makers/>
        </ThemeProvider>
    </Main>
  );
}

export default App;

const Main = styled.div`
  width: 100%;
  overflow: hidden;
`;

const lightTheme = {
  body: '#FFFFFF',
  text: '#000000',
};

const darkTheme = {
  body: '#1C1C1E',
  text: '#FFFFFF',
};