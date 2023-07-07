import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import back from '../images/back.png';

const Wrapper = styled.section`
    text-align: center;
    margin-top: -24.5rem;
`;

const IBWrapper = styled.section`
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
    padding-left: 1rem;
`;

const Button = styled.button`
    width: 37rem;
    height: 3rem;
    color: #BEBEBE;
    background-color: #E7E7E7;
    font-size: 0.9rem;
    border: none;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    cursor: pointer;
`;

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pwCheck, setPwCheck] = useState("");

    const movePage = useNavigate();

    function Register() {
        toast('회원가입에 성공하였습니다.', {
            position: 'bottom-center',
            closeButton: false,
            autoClose: 1000,
            hideProgressBar: true
        });
        movePage('../SignIn');
    }

    function Back() {
        movePage('../');
    }

    return (
        <Wrapper>
            <BackImg src={back} onClick={Back}/>
            <Title> 로그인 </Title>
            <IBWrapper>
                <Input type='email' placeholder='이메일' />
            </IBWrapper>
            <IBWrapper>
                <Input type='password' placeholder='비밀번호' />
            </IBWrapper>
            <Input type='password' placeholder='비밀번호 확인' />
            <IBWrapper>
                <Button onClick={Register}> 확인 </Button>
            </IBWrapper>
        </Wrapper>    
    )
}

export default SignUp;