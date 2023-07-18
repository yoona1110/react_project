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
    const [color, setColor] = useState("#929292");
    const selected = useRef();
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
                    ref={selected}
                    size="34"
                    color={color}
                /> 
                <IconsTitle color={color}> 홈 </IconsTitle>
            </SubWrapper>

            <SubWrapper onClick={() => checkIcons("Notification")}>
                <Notification 
                    size="32" 
                    color={color}
                    // style={{color: (clicked === "Notification") ? "#000000" : "#929292"}}
                />
                <IconsTitle color={color}> 알림 </IconsTitle>
            </SubWrapper>

            <SubWrapper onClick={() => checkIcons("UserInfo")}>
                <UserInfo 
                    size="29" 
                    color={color}
                />
                <IconsTitle 
                    style={{marginTop: '1px'}}
                    color={color}
                > 
                    MY 
                </IconsTitle>
            </SubWrapper>
        </Wrapper>
    );
}

export default Footer;