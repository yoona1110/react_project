import Footer from "../components/Footer";
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Friends from './Notification_Detail/Friends';
import Like from "./Notification_Detail/Like";
import News from './Notification_Detail/News';

const Wrapper = styled.section`
    text-align: center;
    margin-top: 1.5rem;
    width: 60rem;
`;

const Title = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
`;

const OptionButton = styled.button`
    width: auto;
    height: 1.9rem;
    font-size: 0.8rem;
    border: none;
    border-radius: 1rem;
    padding: 0rem 0.9rem;
    margin-top: 0.2rem;
    margin-left: 0.7rem;
    cursor: pointer;
`;

const UserInfo = () => {
    const [isClick, setIsClick] = useState("friends");
    const movePage = useNavigate();

    const onSelect = (props) => setIsClick(props);

    return (
        <Wrapper>
            <Title> 알림 </Title>
            <section style={{display: "flex"}}>
                <OptionButton
                    onClick={() => onSelect("friends")}
                    style={(isClick === "friends") ? {
                            color: "white",
                            backgroundColor: "black",
                            fontWeight: "bold"
                            // marginRight: "14.4rem"
                    } : {
                            color: "black",
                            backgroundColor: "#F5F5F5",
                    }}
                > 친구의 할 일
                </OptionButton>
                <OptionButton
                    onClick={() => onSelect("like")}
                    style={(isClick === "like") ? {
                        color: "white",
                        backgroundColor: "black",
                        fontWeight: "bold"
                    } : {
                        color: "black",
                        backgroundColor: "#F5F5F5",
                    }}> 받은 좋아요
                </OptionButton>
                <OptionButton
                    onClick={() => onSelect("news")}
                    style={(isClick === "news") ? {
                        color: "white",
                        backgroundColor: "black",
                        fontWeight: "bold"
                    } : {
                        color: "black",
                        backgroundColor: "#F5F5F5",
                    }}> 소식
                </OptionButton>
            </section>
            {(isClick === "friends") && <Friends/>}
            {(isClick === "like") && <Like/>}
            {(isClick === "news") && <News/>}
            <Footer/>
        </Wrapper>
    )
}

export default UserInfo;