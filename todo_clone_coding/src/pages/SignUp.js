import { useState, useCallback } from 'react';
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
`;

const ErrorMsg = styled.p`
    width: 100%;
    font-size: small;
    color: #929292;
    margin-top: 5px;
    margin-left: 1rem;
    text-align: left;
`;

const SignUp = () => {
    // 입력값 -----------------------------------------------
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pwCheck, setPwCheck] = useState("");

    // 에러문구 ----------------------------------------------
    const [emailMsg, setEmailMsg] = useState("");
    const [passwordMsg, setPasswordMsg] = useState("");
    const [pwCheckMsg, setPwCheckMsg] = useState("");

    // 입력여부 ----------------------------------------------
    const [cuEmail, setCuEmail] = useState(false);
    const [cuPassword, setCuPassword] = useState(false);
    const [cuPwCheck, setCuPwCheck] = useState(false);

    const onChangeEmail = useCallback((e) => {
        const emailValid = 
            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        const emailCurrent = e.target.value;
        setEmail(emailCurrent);

        if (!emailValid.test(emailCurrent)) {
            setEmailMsg("유효하지 않은 이메일");
            setCuEmail(false);
        } else {
            setEmailMsg("유효한 이메일 양식");
            setCuEmail(true);
        }
    }, []);

    const onChangePassword = useCallback((e) => {
        const pwValid = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{9,12}$/;        
        const passwardCurrent = e.target.value;
        setPassword(passwardCurrent);

        if (!pwValid.test(passwardCurrent)) {
            setPasswordMsg("숫자+영문자+특수문자[8글자]");
            setCuPassword(false);
        } else {
            setPasswordMsg("비밀번호 보안 높음");
            setCuPassword(true);
        }
    }, []);

    const onChangePwChcek = useCallback((e) => {
        const pwCheckCurrent = e.target.value;
        setPwCheck(pwCheckCurrent);

        if (password === pwCheckCurrent) {
            setPwCheckMsg("비밀번호가 일치합니다.");
            setCuPwCheck(true);
        } else {
            setPwCheckMsg("비밀번호가 일치하지 않습니다.");
            setCuPwCheck(false);
        }
    }, [password]);

    const movePage = useNavigate();

    const toastMsg = {
        position: 'bottom-center',
        closeButton: false,
        autoClose: 1000,
        hideProgressBar: true
    }

    const Back = () => movePage('/');
    const goSignIn = () => movePage('/SignIn');

    const Register = () => {
        if (email == "") {
            toast('이메일을 입력해주세요.', toastMsg);
        } else if (password == "") {
            toast('비밀번호를 입력해주세요.', toastMsg);
        } else {
            goSignIn();
            toast('회원가입에 성공하였습니다', toastMsg);
        }
    }

    return (
        <Wrapper>
            <BackImg src={back} onClick={Back}/>
            <Title> 회원가입 </Title>
            <Input 
                type='email' 
                placeholder='이메일' 
                onChange={onChangeEmail}
            />
            <ErrorMsg> {emailMsg} </ErrorMsg>
            <Input 
                type='password' 
                placeholder='비밀번호'
                onChange={onChangePassword}
            />
            <ErrorMsg> {passwordMsg} </ErrorMsg>
            <Input 
                type='password' 
                placeholder='비밀번호 확인'
                onChange={onChangePwChcek}
            />
            <ErrorMsg> {pwCheckMsg} </ErrorMsg>
            <PrimaryButton 
                btnName={"확인"}
                onClick={Register}
                style={{ marginTop: '10px'}}>
            </PrimaryButton>
        </Wrapper>    
    )
}

export default SignUp;