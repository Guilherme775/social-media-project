import styled from 'styled-components';
import Shimmer from 'react-shimmer-effect';

const Wrapper = styled.div`
    border: 0px solid rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, .1);
    border-radius: 4px;
    background-color: var(--white);
    display: flex;
    padding: 16px;
    width: 200px;
`;

const Circle = styled.div`
    height: 56px;
    width: 56px;
    border-radius: 50%;
`;

const Line = styled.div`
    width: 96px;
    height: 8px;
    align-self: center;
    margin-left: 16px;
    border-radius: 8px;
`;

export const ShimmerLoader = () => (
    <Wrapper>
        <Shimmer>
            <Circle />
            <Line />
        </Shimmer>
    </Wrapper>
);

export default ShimmerLoader;
