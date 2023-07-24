import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35rem;
    font-size: 0.9rem;
    color: #929292;
`;

const Friends = () => {
    const [boardList, setBoardList] = useState([]);

    // const getBoardList = () => {


    // }

    useEffect(() => {
        getBoardList();
    }, []);

    return (
        <Wrapper>

        </Wrapper>
    )
}

export default Friends;