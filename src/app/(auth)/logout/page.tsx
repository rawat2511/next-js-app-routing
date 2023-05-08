"use client";
import React from "react";

const Logout = async () => {
  console.log("Logout");
  let data = await fetch("https://api.github.com/users")
    .then((data) => data.json())
    .then((data) => data);

  console.log(data);
  return <div>{data && JSON.stringify(data)}</div>;
};

export default Logout;
