import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Navigator from "./homenavbar";
import OpenModal from "./popup";
import styled from "styled-components";
import { useRef } from "react";
import Cb from "./check";

function Form({ children }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  const [gender, setGender] = useState("");
  const [dept, setDept] = useState("");
  const [tech, setTech] = useState("");
  const [parent, setParent] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [data, setData] = useState(() => {
    if (localStorage.getItem("data")) {
      return JSON.parse(localStorage.getItem("data"));
    } else return [];
  });

  const isMounted = useRef(false);
  console.log("data at start", data);
  // console.log("data checked");

  useEffect(() => {
    console.log("data saved", data);
    if (isMounted.current) {
      const value = localStorage.getItem("data");
      if (value) {
        const values = JSON.parse(value);
        localStorage.setItem("data", JSON.stringify([...values, data]));
      } else {
        localStorage.setItem("data", JSON.stringify(data));
      }
    } else {
      isMounted.current = true;
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("button clicked");
    // if (!name) return false;
    setData([name, surname, dob, age, id, gender, dept]);
    // console.log(data);
    reset();
  };

  const reset = () => {
    setName("");
    setSurname("");
    setDob("");
    setAge("");
    setId("");
    setGender("");
    setDept("");
    setTech("");
    setParent("");
    setMobile("");
    setAddress("");
  };

  return (
    <>
      <form className="List" id="myForm" onSubmit={(e) => e.preventDefault(e)}>
        <br />
        <label>First Name</label>
        <br />
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label> Last Name</label>
        <br />
        <input
          name="surname"
          type="text"
          value={surname}
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        />
        <br />
        <label>Date of Birth</label>
        <br />
        <input
          name="dob"
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <br />
        <label>Age</label>
        <br />
        <input
          name="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <label>ID</label>
        <br />
        <input
          name="id"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <br />
        <label>Gender</label>
        <div name="gender">
          <input
            type="radio"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
            checked={gender === "Male"}
          />{" "}
          Male
          <input
            type="radio"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Female
          <input
            type="radio"
            value="Other"
            checked={gender === "Other"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Other
        </div>
        <br />
        <select
          name="dept"
          value={dept}
          onChange={(e) => setDept(e.target.value)}>
          <option>Choose Department</option>
          <option value="Aerospace">Aerospace</option>
          <option value="CS">CS</option>
          <option value="IT">IT</option>
          <option value="Elec"> Elec </option>
        </select>
        <br />
        {/* <Cb details={(tech) => setTech(tech)} /> */}
        <br />
tech is : {tech}
        {children}

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "http://walmart.com";
          }}>
          Explore Walmart
        </button>
        <br />
        <br />
        <button
          type="button"
          onClick={(e) => {
            handleSubmit(e);
          }}>
          Submit
        </button>
      </form>
      <br />
    </>
  );
}

function Modal() {
  const [parent, setParent] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  return (
    <Popup
      trigger={<OpenModal details={(parent) => setParent(parent)} />}></Popup>
  );
}

export default function App() {
  const count = JSON.parse(localStorage.getItem("data"))?.length || 0;
  return (
    <div className="App">
      <Navigator
      />
      <div className="List">
        <Form >
          {/* <Cb details={(tech) => setTech(tech)} /> */}
          <br />
          <br />
          <Modal />
          <br />
          <br />
        </Form>
      </div>
    </div>
  );
}
