import React, { useEffect, useState } from "react";
import User from "./Components/User";
import Month from "./Components/Month";

const Main = props => {
  const [users, usersSetState] = useState([])

  useEffect(() => {
    const users = fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
    .then(response => response.json())
    .then(data => usersSetState(data))
  },[])
  
  let usersMap = users.map(item => {
    return (
      <User
        key = {item.id}
        id = {item.id} 
        firstName = {item.firstName} 
        lastName = {item.lastName}
        date = {item.dob}/>
    )
  })
  
  return(
    <div>
      <div>{usersMap}</div>
      <Month />
    </div>
  )
};

export default Main;
