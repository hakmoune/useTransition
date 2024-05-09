import { useState, useTransition } from "react";

function App() {
  const [input, setInput] = useState("");
  const [list, setlist] = useState([]);

  // All the states inside the function "startTransition" is going to be low priority by default
  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 20000;

  const handleChange = (e) => {
    setInput(e.target.value);

    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setlist(l);
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default App;
