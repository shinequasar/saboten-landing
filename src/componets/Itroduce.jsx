import styled from "styled-components";
import IntroCardL from "./Introduce/IntroCardL";
import IntroCardR from "./Introduce/IntroCardR";
import Card_1 from "../asset/Introduce/Card_1.png"
import Card_2 from "../asset/Introduce/Card_2.png"
import Card_3 from "../asset/Introduce/Card_3.png"
import { MainContainer } from "../style/styledComponentModule.";

const Introduce = () => {
    return (
        <Container>
          <MainContainer>
            <Text data-aos="zoom-out-up">밸런스게임 커뮤니티, 선인장</Text>
            <IntroCardL 
              text="인터넷에서 밸런스게임 검색할 필요없이"
              title="함께 즐기는 밸런스 게임"
              img={Card_1}/>
            <IntroCardR 
              text="치열한 토론, 다른 사람은 어떻게 생각할까?"
              title="한눈에 확인하는 선택결과!"
              img={Card_2}/>
            <IntroCardL 
              text="내가 원하는 주제로 제대로 즐겨보자!"
              title={`이야기가 끝나지 않는
               다양한 카테고리`}
              img={Card_3}/>
          </MainContainer>
        </Container>
      );
}
export default Introduce;

const Container = styled.div`
    width: 100%;
    padding: 30px 30px 80px 30px;
    text-align: center;
`;
const Text = styled.h1`
    margin: 150px;
    font-size: 60px;
    color: var(--saboten-green-700);
    @media (max-width: 1200px) {
      font-size: 50px;
      margin: 100px 30px;
    }
    @media (max-width: 720px) {
      font-size: 20px;
      margin: 50px 30px;
    }
`;