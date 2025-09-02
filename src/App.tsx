import { useState } from 'react'
import Button from './Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button label="Compteur + 1" primary={true} onClick={() => setCount(count + 1)} />
      <Button label="Reset" onClick={() => setCount(0)} />
      <p>Le bouton a été pressé {count} fois</p>
    </>
  )
}

export default App
