import styled from "styled-components";

const IntroCardR = (props) => {
    return (
        <Container data-aos="fade-left">
          <Text>{props.text}</Text>
          <Title>{props.title}</Title>
          <Img src={props.img}/>
        </Container>
      );
}
export default IntroCardR;

const Container = styled.div`
    width: 60%;
    padding: 10px;
    border-radius: 40px;
    background-color: var(--saboten-green-100);
    box-shadow: 5px 5px 10px 2px var(--saboten-gray-200);
    margin: 50px 20px 20px auto;
    &:hover{
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.4, 0.95);
        background-color: var(--saboten-green-200);
    }
    @media (max-width: 1200px) {
        width: 60%;
    }
    @media (max-width: 720px) {
        width: 100%;
        margin-right: 0;
    }
`;
const Text = styled.p`
    font-size: 30px;
    color: var(--saboten-gray-600);
    margin: 30px auto 0 auto;
    @media (max-width: 1200px) {
        font-size: 18px;
    }
`;
const Title = styled.p`
    font-size: 50px;
    color: var(--saboten-gray-800);
    margin: 0;
    font-weight: 800;
    @media (max-width: 1200px) {
        font-size: 26px;
    }
`;
const Img = styled.img`
    width: 500px;
    @media (max-width: 1200px) {
        width: 300px;
    }
`;