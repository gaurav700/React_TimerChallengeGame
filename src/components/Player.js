import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const [name, setName] = useState();
  const names = useRef();
  function handleButton() {
    setName(names.current.value);
    names.current.value = "";
  }

  return (
    <section id="player">
      <h2>
        Welcome &nbsp;
        {name ? name : "unknown entity"}
      </h2>
      <p>
        <input type="text" ref={names} />
        <button onClick={handleButton}>Set Name</button>
      </p>
    </section>
  );
}
