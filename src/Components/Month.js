import React from "react";
import styled from "styled-components";

const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 20px;
  left: 250px;
`;

const UserMonth = styled.li`
  width: 100px;
  padding: 15px 15px;
  text-align: center;
  border: 1px solid black;
`;

const Month = props => {
  function monthClick(event) {
    console.log(event.target.innerText)
  }

  const monthArray = [
    "January","February","March","April","May","June","July",
  "August","September","October","November","December"
  ]
  
  const month = monthArray.map(item => {
    return <UserMonth onClick = {monthClick}>{item}</UserMonth>
  })

  return(
    <Wrapper>{month}</Wrapper>
  )
};

export default Month;
