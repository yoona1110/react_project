import styled from 'styled-components';
import menu from '../images/menubar.png';

const Wrapper = styled.div`
    text-align: center;
    margin-top: 3rem;
`;

const Title = styled.h2`
    font-size: 1.5rem;
    float: left;
`; 

const Menu = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    background-color: #F0F0F0;
    border-radius: 50%;
    transform: rotate(90deg);
    cursor: pointer;
`;

const Main = () => {
    return (
        <Wrapper>
            <Title> todomate </Title>
            <Menu src={menu}/>
        </Wrapper>        
    )
}

export default Main;