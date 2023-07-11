import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PrimaryButton from '../components/PrimaryButton';
import styled from 'styled-components';
import back from '../images/back.png';

const Wrapper = styled.section`
    text-align: center;
    margin-top: 2rem;
`;

const SubWrapper = styled.section`
    text-align: center;
`;

const Title = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
`;

const BackImg = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    float: left;
    transform: rotate(180deg);
    cursor: pointer;
`;

const Input = styled.input`
    width: 35rem;
    height: 3rem;
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid #E7E7E7;
    outline: none;
    padding-left: 1rem;
`;

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const movePage = useNavigate();

    const Back = () => movePage('/');
    const goMain = () => movePage('/Main');

    function Login() {
        goMain();
        toast('로그인에 성공하였습니다', {
            position: 'bottom-center',
            closeButton: false,
            autoClose: 1000,
            hideProgressBar: true
        });
    }

    return (
        <Wrapper>
            <BackImg src={back} onClick={Back} />
            <Title> 로그인 </Title>
            <SubWrapper>
                <Input 
                    type='email' 
                    placeholder='이메일' 
                />
            </SubWrapper>
            <Input 
                type='password' 
                placeholder='비밀번호' 
            />
            <SubWrapper>
                <PrimaryButton 
                    btnName={"로그인"}
                    onClick={Login}
                    style={{ marginTop: '10px' }}>
                </PrimaryButton>
            </SubWrapper>
        </Wrapper>    
    )
}

export default SignIn;