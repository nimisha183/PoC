import { useState } from "react";

export default function FormInput({ name, label, onChange = () => {} }) {
  const [state, setState] = useState("");

  function handleChange(e) {
    setState(e.target.value);
  }

  function handleBlur() {
    onChange(state);
  }
  return (
    <div>
      <label>
        {label}
        <input
          type="text"
          // style={textFieldStyle}
          name={name}
          value={state}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </label>
    </div>
  );
}
