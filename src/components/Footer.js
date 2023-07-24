import React, { useState } from 'react';
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

const IconsTitle = styled.p`
    font-size: 12px;
    margin-top: -1px;
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
                style={{
                    marginLeft: '0rem', 
                    marginTop: "11px",
                    color: `${(clicked === "Main") ? "black" : "#929292"}`
                }}
                onClick={() => checkIcons("Main")}
            >
                <RiHome6Fill
                    size="30"
                    color={(clicked === "Main") ? 
                        "black" : "#929292"}
                /> 
                <IconsTitle> 홈 </IconsTitle>
            </SubWrapper>

            <SubWrapper 
                style={{ 
                    marginTop: "12px",
                    color: `${(clicked === "Notification") ? "black" : "#929292"}` 
                }}
                onClick={() => checkIcons("Notification")}
            >
                <RiNotification4Fill 
                    size="28" 
                    color={(clicked === "Notification") ? 
                        "black" : "#929292"}
                />
                <IconsTitle> 알림 </IconsTitle>
            </SubWrapper>

            <SubWrapper 
                style={{ 
                    marginTop: "14px",
                    color: `${(clicked === "UserInfo") ? "black" : "#929292"}` 
                }}
                onClick={() => checkIcons("UserInfo")}>
                <FaUser 
                    size="25" 
                    color={(clicked === "UserInfo") ? 
                        "black" : "#929292"}
                />
                <IconsTitle 
                    style={{ marginTop: '1px' }}
                > 
                    MY 
                </IconsTitle>
            </SubWrapper>
        </Wrapper>
    );
}

export default Footer;