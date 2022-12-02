
import styled  from "styled-components";
import Form from "../Form"; 


export default function Footer() {
    return (
        <>
          <StyledFooter>  <Form/> </StyledFooter>
        </>
      ); 
 }; 
   

    const StyledFooter = styled.footer`
    width: 100%; 
    height: 120px; 
    position: absolute; 
    bottom: 0; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    background-color: beige; 
    `; 
