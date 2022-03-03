import styled from "styled-components";

export const MainContainer = styled.div`
  background-image: url("https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-size: cover;
width: calc(100vw - 100px);
height: calc(100vh - 100px);
display: flex;
flex-direction:row;
justify-content: space-around;
padding: 50px;
`

export const Card = styled.div`
  border-radius: 20px;
  background: rgb(13,125,0);
background: linear-gradient(90deg, rgba(13,125,0,0.6) 0%, rgba(0,158,30,0.4) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 30vw;
  padding: 10px;
`

export const Ul = styled.ul`
  list-style-type: none;
  `

export const StatsContainer = styled.div`
border-radius: 20px;
  background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(190,255,203,0.4) 100%);
display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 20vw;
  `