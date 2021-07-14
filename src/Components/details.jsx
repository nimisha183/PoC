import React from "react";
import Navigator from "./detailsnavbar";
import { Link } from "react-router-dom";

function Details() {
  const value = localStorage.getItem("data");
  const values = JSON.parse(value);
  // console.log({ value });
  // const count = values.length - 6;
  return (
    <div>
      {/* full string: {values}
      <br />
      <br />
      array: {value} */}
      <br />
      {/* display badge: {count} */}
      <br />
      <br />
      {values.map(function (d, idx) {
        return (
          <li key={idx}>
            {d[0]} {d[1]}
            <br />
            <Link
              className="details"
              to={{
                pathname: "/about",
                state: { key: { idx } },
              }}>
              About intern #{idx}
            </Link>
            <br />
            <br />
          </li>
        );
      })}
    </div>
  );
}

function App() {
  const count = JSON.parse(localStorage.getItem("data"))?.length || 0;
  return (
    <div>
      <Navigator badge={count} />
      <Details />
    </div>
  );
}

export default App;
