import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35rem;
    font-size: 0.9rem;
    color: #929292;
`;

const News = () => {
    const [list, setList] = useState("목록없음");
    return (
        <Wrapper> {list} </Wrapper>
    )
}

export default News;