import React, { useRef, useState } from 'react';
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

const Main = styled(RiHome6Fill)`
    margin-top: 11px;
    /* background: linear-gradient(to right, #4880EC, #019CAD); */
`;

const Notification = styled(RiNotification4Fill)`
    margin-top: 12px;
`;

const UserInfo = styled(FaUser)`
    margin-top: 14px;
`;

const Footer = () => {
    const [clicked, setClicked] = useState("Main");
    const movePage = useNavigate();

    const checkIcons = (props) => {
        setClicked(props);
        movePage(`../${props}`);
    };

    return (
        <Wrapper>
            <SubWrapper 
                style={{marginLeft: '0rem'}}
                onClick={() => checkIcons("Main")}>
                <Main
                    size="30"
                    color={(clicked === "Main") ? 
                        "black" : "#929292"}
                /> 
                <IconsTitle 
                    color={(clicked === "Main") ? 
                        "black" : "#929292"}
                > 홈 
                </IconsTitle>
            </SubWrapper>

            <SubWrapper onClick={() => checkIcons("Notification")}>
                <Notification 
                    size="28" 
                    color={(clicked === "Notification") ? 
                        "black" : "#929292"}
                />
                <IconsTitle 
                    color={(clicked === "Notification") ? 
                        "black" : "#929292"}
                > 알림 
                </IconsTitle>
            </SubWrapper>

            <SubWrapper onClick={() => checkIcons("UserInfo")}>
                <UserInfo 
                    size="25" 
                    color={(clicked === "UserInfo") ? 
                        "black" : "#929292"}
                />
                <IconsTitle 
                    style={{marginTop: '1px'}}
                    color={(clicked === "UserInfo") ? 
                        "black" : "#929292"}
                > 
                    MY 
                </IconsTitle>
            </SubWrapper>
        </Wrapper>
    );
}

export default Footer;