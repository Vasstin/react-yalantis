import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  border: 1px solid gray;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  border-radius: 5px;
  width: 200px;
  margin: 15px 15px;
`;

const UserName = styled.p`
  margin: 0px 5px 10px 5px;
`;

const UserDate = styled.p`
  margin: 0px 5px 0px 5px;
`;

const User = props => {
  const date = new Date(props.date)
  const strDate = date.toLocaleString()

  return (
    <Wrapper>
      <UserName>{props.firstName}</UserName>
      <UserName>{props.lastName}</UserName>
      <UserDate>{strDate}</UserDate>
    </Wrapper>
  )
};

export default User;
