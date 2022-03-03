import styled, { keyframes } from "styled-components";

const slideLeft = keyframes`
100%{
  transform: scale(1.05) translateX(-5px);
}
`

export const Table = styled.table`
  /* border: 1px solid #000; */
  -webkit-box-shadow: 0px 18px 28px 13px rgba(66, 68, 90, 1);
-moz-box-shadow: 0px 18px 28px 13px rgba(66, 68, 90, 1);
box-shadow: 0px 18px 28px 13px rgba(66, 68, 90, 1);
margin-top: 10px;

> thead {
    font-size: 2.5em;
    text-align: center;
}

 > tbody > tr {

  :hover{
    animation: ${slideLeft} 0.2s ease;
    animation-fill-mode: forwards;
 }}


`
export const Td = styled.td`
  border-bottom: 1px solid #000;
  text-align: center;
  background-color: ${(props) => props.bgColor ? props.bgColor : "transparent"};
`

export const Select = styled.select`
background-color: rgb(100,100,100);
border: none;
border-radius: 10px;
padding: 5px 15px;
margin: 20px 0px;
color: white;
-webkit-box-shadow: 0px 5px 9px 5px rgba(66, 68, 90, 1);
-moz-box-shadow: 0px 5px 9px 5px rgba(66, 68, 90, 1);
box-shadow: 0px 5px 9px 5px rgba(66, 68, 90, 1);
`

export const ShowBestButton = styled.div`
background-color: rgb(100,100,100);
border: none;
border-top-right-radius: 10px;
padding: 5px 15px;
margin: 20px 0px;
color: white;
-webkit-box-shadow: 0px 5px 9px 5px rgba(66, 68, 90, 1);
-moz-box-shadow: 0px 5px 9px 5px rgba(66, 68, 90, 1);
box-shadow: 0px 5px 9px 5px rgba(66, 68, 90, 1);
position: fixed;
left:0px;
top: 0px;
width: 100px;
height: 30px;
text-align: center;
font-size: 1.5em;
opacity: ${props => props.show ? 1 : 0};
`;

export const ShowBestModal = styled.div`
background-color: rgb(100,100,100);
border: none;
border-top-right-radius: 10px;
padding: 5px 15px;
margin: 20px 0px;
color: white;
-webkit-box-shadow: 0px 0px 4px 2px rgba(66, 68, 90, 1);
-moz-box-shadow: 0px 0px 4px 2px rgba(66, 68, 90, 1);
box-shadow: 0px 0px 4px 2px rgba(66, 68, 90, 1);
position: absolute;
top: 80px;
left: 0px;
width: 300px;
/* height: 300px; */
display: ${props => props.showModal ? "flex" : "none"};
flex-direction: column;
align-items: center;
padding: 10px 20px;

> p{
  text-align: left;
}
`



