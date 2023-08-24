import { useNavigate } from 'react-router-dom';
import image from '../images/start_image.png';
import styled from 'styled-components';
import PrimaryButton from '../components/PrimaryButton';

const Wrapper = styled.section`
    text-align: center;
`;

const Img = styled.img`
    width: 16rem;
    height: 12rem;
    margin-top: 6rem;
`;

const Title = styled.h1`
    font-size: 2.8rem;
`;

const SubTitle = styled.p `
    font-size: 1rem;
    margin-top: -2.6rem;
    margin-bottom: 15rem;
    color: #787878;
`;

const BtnWrapper = styled.p `
    text-align: center;
`;

const Home = () => {
    const movePage = useNavigate();

    const goSignIn = () => movePage('./SignIn');
    const goSignUp = () => movePage('./SignUp');

    return (
        <Wrapper className=''>
            <Img src={image} alt=''/>
            <Title> todomate </Title>
            <SubTitle> 할 일을 작성, 계획, 관리하세요. </SubTitle>
            <BtnWrapper>
                <PrimaryButton 
                    btnName={"로그인"}
                    onClick={goSignIn}
                    style={{ 
                        marginBottom: '-8px' 
                    }}>
                </PrimaryButton>
            </BtnWrapper>
            <PrimaryButton 
                btnName={"회원가입"}
                onClick={goSignUp}>
            </PrimaryButton>
        </Wrapper>
    );
}

export default Home;