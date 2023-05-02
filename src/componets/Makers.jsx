import styled from "styled-components";
import { MainContainer } from "../style/styledComponentModule.";

const Makers = () => {
    return (
        <Container>
            <MainContainer>
             <Text>GDSC-DJU</Text>
             <Text>DEVELOPERS & DESIGNERS</Text>
             <SmallText>HARRY . PANDA . WANT . CINDY . WINNI . 
                SOOPEACH . PEONY
             </SmallText>
             <MiniText>HAZEL . TOBY </MiniText>
            </MainContainer>
        </Container>
      );
}
export default Makers;

const Container = styled.div`
    width: 100%;
    height: 300px;
    padding: 10px;
    background-color: var(--saboten-gray-100);
    text-align: center;
    overflow: hidden;
    @media (max-width: 720px) {
        height: 200px;
    }
`;
const Text = styled.p`
    font-size: 23px;
    font-weight: 700;
    color: var(--saboten-gray-700);
    @media (max-width: 720px) {
        font-size: 15px;
    }
`;
const SmallText = styled(Text)`
    font-weight: 500;
    color: var(--saboten-gray-600);
`;
const MiniText  = styled(Text)`
    font-size: 20px;
    font-weight: 400;
    color: var(--saboten-gray-500);
    @media (max-width: 720px) {
        font-size: 15px;
    }
`;