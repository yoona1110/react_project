import styled from 'styled-components';

const Button = styled.button`
    width: auto;
    height: 2rem;
    color: #BEBEBE;
    background-color: #F5F5F5;
    font-size: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;

    &:active {
        font-weight: bold;
        color: white;
        background-color: black;
    }
`;
export default function OptionButton({ btnName, onClick, style }) {
    return (
        <Button onClick={onClick} style={style}>
            {btnName}
        </Button>
    )
}