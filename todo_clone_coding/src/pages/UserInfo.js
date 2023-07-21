import Footer from "../components/Footer";
import styled from 'styled-components';

const Wrapper = styled.section`
    text-align: center;
    margin-top: 1.5rem;
`;

const Title = styled.p`
    font-size: 1rem;
    font-weight: bold;

`;

const UserInfo = () => {
    return (
        <Wrapper>
            <Title> 닉네임 </Title>
            <Footer/>
        </Wrapper>
    )
}

export default UserInfo;