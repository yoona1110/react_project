import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RiHome6Fill, RiNotification4Fill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';

const Wrapper = styled.section`
        width: 100%;
        height: 4.5rem;
        left: 0;
        bottom: 0;
        text-align: center;
        justify-content: center;
        display: flex;
        position: absolute;
        box-shadow: 10px 10px 20px 15px #EFEDED;
`

const SubWrapper = styled.section`
    height: auto;
    text-align: center;
    justify-content: center;
    margin-left: 7rem;
    cursor: pointer;
`;

const IconsTitle = styled.section`
    font-size: 12px;
    margin-top: -1px;
`;

export default function Footer() {
    const [clicked, setClicked] = useState("Main");
    const movePage = useNavigate();

    const MainIcons = document.querySelector('HomeIcons');
    const MainTexts = document.querySelector('go');

    const CheckIcons = (props) => {
        setClicked(props);
        movePage(`../${props}`);
    };
    

    return (
        <Wrapper>
            <SubWrapper 
                onClick={() => checkIcons("Main")}
            >
                <RiHome6Fill 
                    size="34" 
                    style={{ marginTop: '11px' }}
                /> 
                <IconsTitle className='go'> 홈 </IconsTitle>
            </SubWrapper>
            <SubWrapper 
                onClick={() => checkIcons("Notification")}
            >
                <RiNotification4Fill 
                    size="32" 
                    style={{ marginTop: '12px' }}
                />
                <IconsTitle> 알림 </IconsTitle>
            </SubWrapper>
            <SubWrapper 
                onClick={() => checkIcons("UserInfo")}
            >
                <FaUser 
                    size="29" 
                    style={{ marginTop: '14px' }}
                />
                <IconsTitle style={{marginTop: '1px'}}> MY </IconsTitle>
            </SubWrapper>
        </Wrapper>
    );
}