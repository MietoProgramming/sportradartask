import styled from "styled-components";

export const Table = styled.table`
  border: 1px solid #000;

> thead {
    font-size: 2.5em;
    text-align: center;
}

 & > td {
    border: 1px solid #000;
  };
`
export const Td = styled.td`
  /* border: 1px solid #000; */
  border-bottom: 1px solid #000;
  text-align: center;
  background-color: ${(props) => props.bgColor ? props.bgColor : "white"}
  `

