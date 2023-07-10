import styled from 'styled-components';

const Button = styled.button`
    width: 36.5rem;
    height: 3rem;
    color: #BEBEBE;
    background-color: #F5F5F5;
    font-size: 0.9rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
        color: black;
        background-color: #E7E7E7;
    }
`;

export default function PrimaryButton({ btnName, onClick, style }) {
    return (
        <Button onClick={onClick} style={style}> 
            {btnName} 
        </Button>
    );
};
