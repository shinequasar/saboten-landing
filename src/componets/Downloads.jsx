import styled from "styled-components";
import { Button, Flex, MainContainer } from "../style/styledComponentModule.";
import QRImg from "../asset/image/sabotenQR.png"
import storeImg from "../asset/image/google-play-badge.png"
const Downloads = () => {
    return (
        <Container>
            <MainContainer>
                <Text>지금 
                    <BoldText>구글 플레이스토어</BoldText>에서 만나보세요!</Text>
                <Flex>
                    <Img src={QRImg}/>
                    <a href={`https://play.google.com/store/apps/details?id=app.saboten.androidApp&hl=ko`} 
                        target="_blank" 
                        rel="noopener noreferrer">
                    <Logo src={storeImg}/>
                    {/* <DownloadBtn>
                        <Logo src={storeImg}/>
                        {`PlayStore에서 다운로드하기`}
                    </DownloadBtn> */}
                    </a>
                </Flex>
                <SmallText>* QR접속 혹은 버튼을 누르면 다운로드 페이지로 이동됩니다.</SmallText>
            </MainContainer>
        </Container>
      );
}
export default Downloads;

const Container = styled.div`
    width: 100%;
    padding: 10px;
    background-color: var(--saboten-green-500);
    text-align: center;
    overflow: hidden;
    padding-bottom: 100px;
`;
const Text = styled.p`
    color: white;
    font-size: 40px;
    font-weight: 500;
    margin: 100px;
    @media (max-width: 720px) {
        font-size: 20px;
        margin: 30px;
    }
`;
const SmallText = styled(Text)`
    font-size: 20px;
    color: var(--saboten-green-700);
    @media (max-width: 720px) {
        font-size: 15px;
    }
`;
const BoldText = styled(Text)`
  font-weight: 800;
  display: inline;
  margin: 5px;
  color: var(--saboten-yello-200);
`;
const Img = styled.img`
    width: 300px;
    @media (max-width: 720px) {
        width: 200px;
    }
`;
const Logo = styled.img`
    width: 400px;
    @media (max-width: 720px) {
        width: 200px;
    }
`;
const DownloadBtn = styled(Button)`
    font-weight: 600;
    padding: 20px;
    cursor: pointer;
    background: #3e6b5e; 
    background: -webkit-linear-gradient(to right, #3e6b5e, #339502); 
    background: linear-gradient(to right,#3e6b5e, #339502); 
    color: white;
   
    &:hover{
        background: #a8ff78;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #78ffd6, #a8ff78);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #78ffd6, #a8ff78); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        color: var(--saboten-green-700);
    }
    border: 3px solid white;
`;
