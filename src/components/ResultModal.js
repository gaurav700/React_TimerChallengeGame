import { useRef } from "react";
export default function ResultModal({ ref, result, targetTime }) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the time with <strong>X </strong> seconds.
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
