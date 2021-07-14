import React, { useState } from "react";
import styled from "styled-components";

// Creating a custom hook
const checkboxesList = ["Java", "Python", "C++", "JavaScript"];

const getDefaultCheckboxes = () =>
  checkboxesList.map((checkbox) => ({
    name: checkbox,
    checked: false,
  }));
export function useCheckboxes(defaultCheckboxes) {
  const [checkboxes, setCheckboxes] = useState(
    defaultCheckboxes || getDefaultCheckboxes()
  );
  function setCheckbox(index, checked) {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].checked = checked;
    setCheckboxes(newCheckboxes);
  }
  return {
    setCheckbox,
    checkboxes,
  };
}
const Checkbox = styled.input`
  margin: 0px 10px 0px !important;
  cursor: pointer;
`;
const CheckboxLabel = styled.label`
  cursor: pointer;
  display: block;
  font-weight: normal;
`;
export function Checkboxes({ checkboxes, setCheckbox }) {
  return (
    <>
      {checkboxes.map((checkbox, i) => (
        <CheckboxLabel key={i}>
          <Checkbox
            type="checkbox"
            checked={checkbox.checked}
            onChange={(e) => {
              setCheckbox(i, e.target.checked);
            }}
          />
          {checkbox.name}
        </CheckboxLabel>
      ))}
    </>
  );
}
export function CheckboxRadioExample() {
  const [tech, setTech] = useState();
  const checkboxes = useCheckboxes();

  return (
    <div>
      <Checkboxes {...checkboxes} />
    {/* {checkboxes.checkboxes.filter((t) => t.checked)
          .map((checkbox) => checkbox.name)
        .join(", ")}
      */}
      <span>
        Tech Stack:
        {checkboxes.checkboxes.filter((t) => t.checked)
        .map((checkbox) => checkbox.name)
        .join(", ")}
      </span>
    </div>
  );
}

// Usage in App
export default function App({ details }) {
  //define details func and give tech as argument
  return (
    <div>
      <CheckboxRadioExample  />
    </div>
  );
}
