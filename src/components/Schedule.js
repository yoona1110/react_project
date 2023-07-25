import { styled } from "styled-components";

const Dot = styled.div`
    position: relative;
    width: 14px;
    height: 14px;
    background-color: #F0F0F0;
    border: none;
    border-radius: 100%;
    opacity: 85%;
    float: left;
`;

export default function Schedule({ 
    onClick, 
    color1,
    color2,
    color3,
    color4
}) {
    return (
        <>
            <Dot 
                onClick={onClick} 
                style={{ background: `${color1}`}}>
            </Dot>
            <Dot 
                onClick={onClick} 
                style={{ 
                    right: '5px',
                    background: `${color2}`
            }}>    
            </Dot>
            <Dot 
                onClick={onClick}
                style={{
                    clear: 'both',
                    bottom: '5px',
                    background: `${color3}`
            }}>
            </Dot>
            <Dot onClick={onClick} 
                style={{ 
                    right: '5px',
                    bottom: '5px',
                    background: `${color4}`
            }}> 
            </Dot>
        </>
    )
}