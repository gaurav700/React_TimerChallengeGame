import { useState } from "react";

export default function Player() {
  const [name, setName] = useState();
  const [buttonClicked, setButtonClicked] = useState(false);
  function handleChange(name) {
    setButtonClicked(false);
    setName(name);
  }
  function handleButton() {
    setButtonClicked(true);
  }
  return (
    <section id="player">
      <h2>Welcome {buttonClicked ? name : "unknown entity"} </h2>
      <p>
        <input
          type="text"
          onChange={(e) => handleChange(e.target.value)}
          value={name}
        />
        <button onClick={handleButton}>Set Name</button>
      </p>
    </section>
  );
}
