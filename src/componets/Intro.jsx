import styled from "styled-components";
import mockup1 from "../asset/image/clickApp.png"
import { MainContainer } from "../style/styledComponentModule.";

const Intro = () => {
    return (
        <Container>
            <MainContainer>
                <Text>"와 이건 황금밸런스인데?"</Text>
                <Text2>"진짜 뭘 고르지!"</Text2>
                <MockUpImg data-aos="zoom-in" src={mockup1}/>
            </MainContainer>
        </Container>
      );
}
export default Intro;

const Container = styled.div`
    width: 100%;
    padding: 10px;
    background-color: var(--saboten-green-500);
    text-align: center;
    overflow: hidden;
`;
const Text = styled.h1`
    padding-top: 150px;
    font-size: 40px;
    color: var(--saboten-green-700);
    position: absolute;
    left: 12%;
    @media (max-width: 1200px) {
        font-size: 22px;
        padding-top: 50px;
        left: 10%;
    }
    @media (max-width: 720px) {
        font-size: 15px;
        margin: 0 auto;
        padding-top: 10px;
        left: defalt;
    }
`;
const Text2 = styled(Text)`
    left: auto;
    right: 13%;
    margin-top: 700px;
    @media (max-width: 1200px) {
        font-size: 20px;
        display: none;
    }
`;
const MockUpImg = styled.img`
    width: 80%;
    max-width: 1500px;
    position: relative;
    margin: 0 auto;
    @media (max-width: 1200px) {
        width: 90%;
    }
    @media (max-width: 720px) {
        margin: 0 auto;
        padding: 30px 0 0 0;
    }
`;