import styled from "styled-components";

const Category = (props) => {
    return (
        <Container>
          <Text>{props.text}</Text>
        </Container>
      );
}
export default Category;

const Container = styled.div`
    text-align: center;
    width: 80px;
    min-width: 80px;
    padding: 3px 6px;
    border: 3px solid white;
    border-radius: 40px;
    margin: 10px 15px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1200px) {
      margin: 5px;
      min-width: 70px;
      border-radius: 30px;
      padding: 3px 6px;
      height: 40px;
    }
`;
const Text = styled.p`
  color: white;
  font-size: 18px;
  margin: 0;
  @media (max-width: 1200px) {
      font-size: 18px;
    }
`;