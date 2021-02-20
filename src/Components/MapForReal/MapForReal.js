import react from "react";

const MapForReal = (props) => {
  return (
    <ul>
      {/* map auto returns... forEach will not auto return */}
      {props.names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};

export default MapForReal;
