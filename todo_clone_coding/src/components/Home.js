import { useNavigate } from 'react-router-dom';
import image from '../images/start_image.png';
import styled from 'styled-components';

const Wrapper = styled.section`
    text-align: center;
    padding: 10rem;
`;

const Img = styled.img`
    width: 16rem;
    height: 12rem;
`;

const Title = styled.h1`
    font-size: 3rem;
`;

const SubTitle = styled.p `
    font-size: 1rem;
    margin-top: -2.6rem;
    margin-bottom: 11.5rem;
    color: #787878;
`;

const Button = styled.button`
    width: 35rem;
    height: 3rem;
    font-size: 0.9rem;
    background-color: #F5F5F5;
    border: none;
    margin-top: 10px;
    border-radius: 0.5rem;
    text-align: center;
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
            <Button onClick={goSignIn}> 로그인 </Button>
            <Button onClick={goSignUp}> 회원가입 </Button>
        </Wrapper>
    );
}

export default Home;