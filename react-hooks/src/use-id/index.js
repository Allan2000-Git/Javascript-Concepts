import { useId } from "react";

export const UseIdExample = () => {
  const id1 = useId();
  const id2 = useId();
  return (
    <div>
      <label htmlFor={id1}>Enter your name:</label>
      <input id={id1} type="text" />

      <label htmlFor={id2}>Enter your name:</label>
      <input id={id2} type="text" />
    </div>
  );
};