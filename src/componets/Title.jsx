import styled from "styled-components";
import logo from "../asset/image/logo.svg"
import Category from "./Title/Category";

const Title = () => {
    const categoryData = [
        '음식','연애','MBTI','쇼핑','일상','일/취업','사회','제테크',
        '음식','연애','MBTI','쇼핑','일상','일/취업','사회','제테크',
        '음식','연애','MBTI','쇼핑','일상','일/취업','사회','제테크',
    ]
    return (
        <Container>
          <Text>
            <BoldText>선</BoldText>
            택이 어려운 
            <BoldText>인</BoldText>
            간들의 
            <BoldText>장</BoldText>
            소
            </Text>
          <Logo src={logo}/>
        <Inner>
            {categoryData.map((category, i)=>{
                return <Category text={category} key={i}/>
            })}
        </Inner>
        <Inner2>
            {categoryData.map((category, i)=>{
                return <Category text={category} key={i}/>
            })}
        </Inner2>
        <Inner>
            {categoryData.map((category, i)=>{
                return <Category text={category} key={i}/>
            })}
        </Inner>
        </Container>
      );
}
export default Title;

const Container = styled.div`
    width: 100%;
    padding: 80px 30px;
    background-color: var(--saboten-green-500);
    text-align: center;
`;
const Inner = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    scroll-behavior: smooth; /* 슬라이드 이동을 부드럽게 만듭니다. */
    ::-webkit-scrollbar {
    display: none;
    }
`;
const Inner2 = styled(Inner)`
   margin-left: 40px;
`;
const Logo = styled.img`
    width: 400px;
    @media (max-width: 1200px) {
        width: 220px;
    }
`;
const Text = styled.h1`
    font-size: 30px;
    color: white;
    font-weight: 300;
    @media (max-width: 1200px) {
        font-size: 20px;
    }
`;
const BoldText = styled(Text)`
    font-weight: 800;
    display: inline;
`;