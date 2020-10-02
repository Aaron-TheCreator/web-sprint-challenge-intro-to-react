import React, {useEffect} from "react";
import styled from "styled-components";


const StyledDiv =styled.div`
display: flex;
flex-direction:row;
justify-content: space-between;
`;

const StyledTxtBx =styled.div`
display: flex;

justify-self: center;
`;

const StyledButton =styled.button`
display: flex;
flex-direction: row;
justify-self:flex-end;
text-decoration: none;
`;

const StyledHeader =styled.h2`
color: #C0C0C0;
`;


const ChCard = ({ props }) => {
    
    // const buttonFn = () => {
    //     return (
    //         <StyledTxtBx className="description">

    //         </StyledTxtBx>
    //     )
    // };

    return (
        <StyledDiv className="chCard">
            <StyledTxtBx className="name">
                <StyledHeader>{props.name}</StyledHeader>
            </StyledTxtBx>
            <StyledTxtBx className="description"></StyledTxtBx>
            <StyledButton>+</StyledButton>
        </StyledDiv>
    );
}

export default ChCard;