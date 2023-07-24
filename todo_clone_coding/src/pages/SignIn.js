import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PrimaryButton from '../components/PrimaryButton';
import styled from 'styled-components';
import back from '../images/back.png';

const Wrapper = styled.section`
    text-align: center;
    margin-top: 2rem;
`;

const Title = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 1.6rem;
    margin-right: 1rem;
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
    outline: none;
    display: block;
`;

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cuEmail, setCuEmail] = useState(false);
    const [cuPassword, setCuPassword] = useState(false);

    const movePage = useNavigate();

    const toastMsg = {
        position: 'bottom-center',
        closeButton: false,
        autoClose: "1000",
        hideProgressBar: "true"
    }

    const Back = () => movePage('/');
    const goMain = () => movePage('/Main');

    const Login = () => {
        if (email == "") {
            toast('이메일을 입력해주세요.', toastMsg);
        } else if (password == "") {
            toast('비밀번호를 입력해주세요.', toastMsg);
        } else {
            goMain();
            toast('로그인에 성공하였습니다', toastMsg);
        }
    }

    return (
        <Wrapper>
            <BackImg 
                src={back} 
                onClick={Back} 
            />
            <Title> 로그인 </Title>
            <Input 
                type='email' 
                placeholder='이메일' 
            />
            <Input 
                type='password' 
                placeholder='비밀번호' 
            />
            <PrimaryButton 
                btnName={"로그인"}
                onClick={Login}
                style={{ marginTop: '10px' }}>
            </PrimaryButton>
        </Wrapper>    
    )
}

export default SignIn;