import { useNavigate } from 'react-router-dom';
import image from '../images/start_image.png';
import styled from 'styled-components';

const Wrapper = styled.section`
    text-align: center;
    margin-top: 7rem;
    margin-bottom: 1rem;
`;

const Img = styled.img`
    width: 16rem;
    height: 12rem;
`;

const Title = styled.h1`
    font-size: 2.8rem;
`;

const SubTitle = styled.p `
    font-size: 1rem;
    margin-top: -2.6rem;
    margin-bottom: 14rem;
    color: #787878;
`;

const BtnWrapper = styled.p `
    text-align: center;
`;

const Button = styled.button`
    width: 35rem;
    height: 3rem;
    font-size: 0.9rem;
    background-color: #F5F5F5;
    border: none;
    border-radius: 0.5rem;
    margin-top: -0.5rem;
    cursor: pointer;
`;

const Home = () => {
    const movePage = useNavigate();

    function goSignIn() {
        movePage('./SignIn');
    }

    function goSignUp() {
        movePage('./SignUp');
    }

    return (
        <Wrapper className=''>
            <Img src={image} alt=''/>
            <Title> todomate </Title>
            <SubTitle> 할 일을 작성, 계획, 관리하세요. </SubTitle>
            <BtnWrapper>
                <Button onClick={goSignIn}> 로그인 </Button>
            </BtnWrapper>
            <Button onClick={goSignUp}> 회원가입 </Button>
        </Wrapper>
    );
}

export default Home;