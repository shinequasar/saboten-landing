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
    width: 150px;
    min-width: 120px;
    border: 3px solid white;
    border-radius: 40px;
    margin: 50px 15px 0 15px;
    @media (max-width: 1200px) {
      margin: 5px;
      min-width: 80px;
      border-radius: 30px;
    }
`;
const Text = styled.p`
  color: white;
  font-size: 30px;
  margin: 0;
  @media (max-width: 1200px) {
      font-size: 20px;
    }
`;