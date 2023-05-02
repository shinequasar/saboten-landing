import styled, { keyframes } from "styled-components";

const ScrollText = (props) => {
    return (
        <FlowBox>
            <FlowWrap>
              {props.direction === "R"?
              <FlowR>
                <span>{props.text} &nbsp;</span>
                <span>{props.text} &nbsp;</span>
                <span>{props.text} &nbsp;</span>
                <span>{props.text} &nbsp;</span>
              </FlowR> :
              <FlowL>
                <span>{props.text} &nbsp;</span>
                <span>{props.text} &nbsp;</span>
                <span>{props.text} &nbsp;</span>
                <span>{props.text} &nbsp;</span>
              </FlowL>
            }
            </FlowWrap>
        </FlowBox>
      );
}
export default ScrollText;

const FlowBox = styled.div`
    position: absolute;
    width: 100%;
    left: 0;
    padding-top: 10%;
    overflow: hidden;
`
const FlowWrap = styled.div`
    display: flex;
    top: 0;
    left: 0;
    align-items: center;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
`

const FlowingL = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`;
const FlowingR = keyframes`
  0% {
    transform: translate3d(-50%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;
const FlowR = styled.div`
    font-size: clamp(15px, 10vw, 8rem);
    animation: ${FlowingR} 15s linear infinite;
    span{
        display:inline-block;
        font-size: 150px;
        font-weight: 800;
        color: var(--saboten-green-200);
        padding:0 20px;
    }
    @media (max-width: 720px) {
      span{
        font-size: 28px;
        padding:0;
      }
    }
  `;
const FlowL = styled(FlowR)`
  animation: ${FlowingL} 15s linear infinite;
`;