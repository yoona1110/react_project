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
`;

const SubWrapper = styled.section`
    text-align: center;
    justify-content: center;
    margin-left: 7rem;
    cursor: pointer;

    .MainSelect {
        marginTop: 11px;
        color: #1963B9;
    }

    .NotiSelect {
        marginTop: 12px;
        color: #1963B9;
    }

    .UserSelect {
        marginTop: 14px;
        color: #1963B9;
    }
`;

const IconsTitle = styled.section`
    font-size: 12px;
    margin-top: -1px;
`;

export default function Footer() {
    const [clicked, setClicked] = useState("Main");
    const movePage = useNavigate();

    return (
        <Wrapper>
            <SubWrapper 
                onClick={() => {
                    setClicked("Main");
                    movePage('../Main');
                }}
            >
                <RiHome6Fill 
                    // className='MainIcon'
                    className={"Main" + (clicked === "Main" ? "Select" : "")}
                    size="34" 
                    // style={{marginTop: '11px'}}
                /> 
                <IconsTitle> 홈 </IconsTitle>
            </SubWrapper>
            <SubWrapper 
                onClick={() => {
                    setClicked("Notification");
                    movePage('../Notification');
                }}
            >
                <RiNotification4Fill 
                    className={"Noti" + (clicked === "Notification" ? "Select" : "")}
                    size="32" 
                />
                <IconsTitle> 알림 </IconsTitle>
            </SubWrapper>
            <SubWrapper 
                onClick={() => {
                    setClicked("UserInfo");
                    movePage('../UserInfo');
                }}
            >
                <FaUser 
                    // className='UserIcon'
                    className={"User" + (clicked === "UserInfo" ? "Select" : "")}
                    size="29" 
                    // style={{marginTop: '14px'}}
                />
                <IconsTitle style={{marginTop: '1px'}}> MY </IconsTitle>
            </SubWrapper>
        </Wrapper>
    );
}