import React from "react";
import { useLocation } from "react-router-dom";
import Navigator from "./aboutnavbar";

function About() {
  const value = localStorage.getItem("data");
  const values = JSON.parse(value);
  const location = useLocation();
  const { key } = location.state;
  console.log({ values });
  // console.log(key);
  const count = JSON.parse(localStorage.getItem("data"))?.length || 0;

  const checkGender = () => {
    if (values[key.idx][5] === "Male")
      return (
        <div>
          <br />
          His date of birth is {values[key.idx][2]} and present age is{" "}
          {values[key.idx][3]}
        </div>
      );
    if (values[key.idx][5] === "Female")
      return (
        <div>
          <br />
          Her date of birth is {values[key.idx][2]} and present age is{" "}
          {values[key.idx][3]}
        </div>
      );
    else
      return (
        <div>
          <br />
          Their date of birth is {values[key.idx][2]} and present age is{" "}
          {values[key.idx][3]}
        </div>
      );
  };
  return (
    <div className="about">
      <Navigator badge={key.idx + 1} />
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7"></div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">About Intern</h1>
            <p>
              <br /> The name of the intern is {values[key.idx][0]}{" "}
              {values[key.idx][1]}.
              <br />
              {checkGender()}
              <br />
              Intern ID is {values[key.idx][4]} and department is{" "}
              {values[key.idx][6]}.{/* {values[key.idx]} */}
              {/* {console.log(key.idx)} */}
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
