import styled  from "styled-components";

export default function Form() {
  return ( 
  <form>
   
      <Divider className="divider" role="none" />

      <label htmlFor="text"> Type your thoughts </label> 
      <input type="text" id="text"/> 

     <label htmlFor="name"> Name </label>
      <input type="name" id="name"/> 
      </form>  );
  
} 

 const Divider = styled.hr`
  border: none;
  width: 100%;
  margin: 0;
  height: 1px;
  background: black;
`; 
