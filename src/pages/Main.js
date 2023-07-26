import { useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import menu from '../images/menubar.png';
import Dots from '../components/Schedule';
import Calendar from 'react-calendar';
import CalenderCSS from '../styles/Calendar.css';
import 'react-calendar/dist/Calendar.css';      // css import

const Wrapper = styled.section`
    text-align: center;
    margin-top: 0.5rem;
    width: 60rem;
`;

const SubWrapper = styled.section`
    display: flex;
    justify-content: flex-end;
    clear: both;
    margin-left: 1rem;
    margin-right: 1rem;
`;

const ProfileImg = styled.img`
    width: 2.9rem;
    height: 2.9rem;
    float: left;
    background-color: #F0F0F0;
    border-radius: 50%;
    margin: 1rem;
`;

const Left = styled.section`

`;

const Right = styled.section`
    margin-left: auto;
`;

const Title = styled.h2`
    font-size: 1.5rem;
    margin: 0;
`; 

const Menu = styled.img`
    width: 1.7rem;
    height: 1.7rem;
    background-color: #F0F0F0;
    margin-left: auto;
    border-radius: 50%;
    transform: rotate(90deg);
    cursor: pointer;
`;

const Main = () => {
    const [day, setDay] = useState(new Date());

    return (
        <Wrapper>
            <SubWrapper>
                <Title> todomate </Title>
                <Menu 
                    src={menu} 
                />
            </SubWrapper>
            <ProfileImg/>
            <SubWrapper>
                <Left>
                    닉네임
                    자기소개
                    <Calendar 
                        value={day}
                        formatDay={(locale, date) =>
                            date.toLocaleDateString('en', {day : 'numeric'})
                        }
                        prev2Label={null}
                        next2Label={null}
                        showNeighboringMonth={false}
                        calendarType='US'
                    />
                    <Dots 
                        color1={'red'}
                        color2={'orange'}
                        color3={'yellow'}
                        color4={'green'}
                    >
                    </Dots>
                </Left>
                <Right>
                    <div>오른쪽</div>
                </Right>
            </SubWrapper>
            <Footer/>
        </Wrapper>        
    )
}

export default Main;