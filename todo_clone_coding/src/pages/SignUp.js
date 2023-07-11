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

const SubWrapper = styled.section`
    text-align: center;
`;

const Title = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 1.6rem;
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
`;

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pwCheck, setPwCheck] = useState("");

    const onChangeEmail = (e) => {
        const emailCurrent = e.target.value;
        setEmail(emailCurrent);
    }

    const onChangePw = (e) => {
        const PwCurrent = e.target.value;
        setPassword(PwCurrent);
    }

    const onChangePwCheck = (e) => {
        const PwCheckCurrent = e.target.value;
        setPwCheck(PwCheckCurrent);
    }

    const movePage = useNavigate();

    function Register() {
        movePage('../SignIn');
        toast('회원가입에 성공하였습니다', {
            position: 'bottom-center',
            closeButton: false,
            autoClose: 1000,
            hideProgressBar: true
        });
    }

    function Back() {
        movePage('../');
    }

    return (
        <Wrapper>
            <BackImg src={back} onClick={Back}/>
            <Title> 회원가입 </Title>
            <SubWrapper>
                <Input 
                    type='email' 
                    placeholder='이메일' 
                    onChange={onChangeEmail}
                />
            </SubWrapper>
            <SubWrapper>
                <Input 
                    type='password' 
                    placeholder='비밀번호'
                    onChange={onChangePw} 
                />
            </SubWrapper>
            <Input 
                type='password' 
                placeholder='비밀번호 확인'
                onChange={onChangePwCheck} 
            />
            <SubWrapper>
                <PrimaryButton 
                    btnName={"확인"}
                    onClick={Register}
                    style={{ marginTop: '10px'}}>
                </PrimaryButton>
            </SubWrapper>
        </Wrapper>    
    )
}

export default SignUp;