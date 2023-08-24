import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35rem;
    font-size: 0.9rem;
    color: #929292;
`;

const List = styled.ul`

`;

const Friends = () => {
    const [boardList, setBoardList] = useState([
        {
            id: 0,
            name: "좀미",
            plan: "자동차 보험 연장해주기"
        },
        {
            id: 1,
            name: "콜록 콜록 콜손록",
            plan: "서버 켜는 법 배우기"
        }
    ]);

    return (
        <Wrapper>
            <List> 
                {boardList.map((item) => {
                    return (
                        <div>{`${item.name}님이 "${item.plan}" 할 일을 완수했습니다.`}</div>
                    )
                })}
            </List>
        </Wrapper>
    )
}

export default Friends;