import "./styles.css";
import data from "./data/data.json";
import React from "react";

export default function App() {
  return (
    <React.Fragment>
      {data
        .filter((d) => d.edad > 30)
        .map((d, index) => {
          return <p key={index}>{d.nombre}</p>;
        })}
      ;
    </React.Fragment>
  );
}
