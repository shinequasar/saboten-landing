import styled from "styled-components";

const IntroCardL = (props) => {
    return (
        <Container data-aos="fade-right">
          <Text>{props.text}</Text>
          <Title>{props.title}</Title>
          <Img src={props.img}/>
        </Container>
      );
}
export default IntroCardL;

const Container = styled.div`
    width: 50%;
    padding: 10px;
    border-radius: 40px;
    background-color: var(--saboten-green-100);
    box-shadow: 5px 5px 10px 2px var(--saboten-gray-200);
    margin: 50px auto 20px 20px;
    &:hover{
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.4, 0.95);
        background-color: var(--saboten-green-200);
    }
    @media (max-width: 1200px) {
        width: 60%;
    }
    @media (max-width: 720px) {
        width: 100%;
        margin-left: 0;
    }
`;
const Text = styled.p`
    font-size: 18px;
    color: var(--saboten-gray-600);
    margin: 30px auto 0 auto;
    @media (max-width: 1200px) {
        font-size: 15px;
    }
`;
const Title = styled.p`
    font-size: 35px;
    color: var(--saboten-gray-800);
    margin: 0;
    font-weight: 800;
    @media (max-width: 1200px) {
        font-size: 22px;
    }
`;
const Img = styled.img`
    width: 300px;
    @media (max-width: 1200px) {
        width: 300px;
    }
`;