import styled from "styled-components";

export const MainContainer = styled.div`
    margin: auto;
    max-width: 2000px;
`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;

export const CenteredFlex = styled(Flex)`
  justify-content: center;
`;

export const Button = styled.button`
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
    font-size: 30px;
    cursor: pointer;
    
    &:active{
      background-color: var(--saboten-green--500);
    }
`;