import { useState } from "react";
import Button from "@/components/Button/Button";
import add from "@/assets/add.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button
        label="Compteur + 1"
        iconUrl={add}
        primary={true}
        onClick={() => setCount(count + 1)}
      />
      <Button label="Reset" onClick={() => setCount(0)} />
      <p>Le bouton a été pressé {count} fois</p>
    </>
  );
}

export default App;
