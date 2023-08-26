import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { RiSettings3Line } from 'react-icons/ri';

const Wrapper = styled.section`
    text-align: center;
    margin-top: 0.5rem;
    width: 60rem;
`;

const SubWrapper = styled.section`
    display: flex;
    justify-content: flex-end;
    clear: both;
    margin: 1rem;
`;

const Title = styled.h2`
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0;
`;

const Setting = styled(RiSettings3Line)`
    margin-left: auto;
    cursor: pointer;
`;

const UserInfo = () => {
    const nickname = "이름없음";
    const movePage = useNavigate();

    const goSetting = () => movePage('./Setting');

    return (
        <Wrapper>
            <SubWrapper>
                <Title> {nickname} </Title>
                <Setting 
                    size="24"
                    onClick={goSetting}/>
            </SubWrapper>
        </Wrapper>
    )
}

export default UserInfo;