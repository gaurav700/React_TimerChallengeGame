import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const [name, setName] = useState();
  // function handleChange(name) {
  //   setButtonClicked(false);
  //   setName(name);
  // }
  // function handleButton() {
  //   setButtonClicked(true);
  // }

  let names = useRef();
  function handleButton() {
    setName(names.current.value);
  }

  return (
    <section id="player">
      <h2>
        Welcome &nbsp;
        {name ? name : "unknown entity"}
      </h2>
      <p>
        <input
          type="text"
          ref={names}
          // onChange={(e) => handleChange(e.target.value)}
          value={name}
        />
        <button onClick={handleButton}>Set Name</button>
      </p>
    </section>
  );
}
