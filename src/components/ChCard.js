import React, {useEffect} from "react";
import styled from "styled-components";



const StyledDiv =styled.div`
display: flex;
flex-direction:column;
justify-content: space-between;
width: 80%;
border: 3px solid #bf770b;
border-radius: 25px;
padding:1%;
margin: 10%;
box-shadow: 2px 8px 8px #6e5024;
`;

const StyledTxtBx =styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-self: center;
`;


const StyledButton =styled.div`
display: flex;
flex-direction: row;
align-self:center;
text-decoration: none;
width: 10;
`;

const StyledHeader =styled.h2`
color: #bf770b;
`;


const ChCard = ({ props }) => {
    
    // const buttonFn = () => {
    //     const evDiv = document.querySelector(".description");
    //     const but = document.querySelector("button");
    //     but.textContent = "+" ? evDiv.style.display = "flex" : evDiv.style.display = "none";
    //     but.textContent = "+"; 
    //     // return (
    //     //     <StyledTxtBx className="description">
    //     //         <span>Height: <p>{props.height}</p></span>
    //     //         <span>Mass: <p>{props.mass}</p></span>
    //     //         <span>Hair Color: <p>{props.hair_color}</p></span>
    //     //         <span>Skin Color: <p>{props.skin_color}</p></span>
    //     //         <span>Eye Color: <p>{props.eye_color}</p></span>
    //     //         <span>Birthyear: <p>{props.birth_year}</p></span>
    //     //         <span>Gender: <p>{props.gender}</p></span>
    //     //     </StyledTxtBx>
    //     // )
    // };

    return (
        <StyledDiv className="chCard" key={props.created}>
            <StyledTxtBx className="name">
                <StyledHeader>{props.name}</StyledHeader>
            </StyledTxtBx>
            <StyledTxtBx className="description">
                <h3>Height: </h3><p>{props.height}</p>
                <h3>Mass: </h3><p>{props.mass}</p>
                <h3>Hair Color: </h3><p>{props.hair_color}</p>
                <h3>Skin Color: </h3><p>{props.skin_color}</p>
                <h3>Eye Color: </h3><p>{props.eye_color}</p>
                <h3>Birthyear: </h3><p>{props.birth_year}</p>
                <h3>Gender: </h3><p>{props.gender}</p>
            </StyledTxtBx>
            {/* <StyledButton onClick={ () => buttonFn()} >+</StyledButton> */}
        </StyledDiv>
    );
}

export default ChCard;