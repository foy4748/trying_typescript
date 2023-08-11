import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import MainLayout from "./StyledComponents/Layouts/MainLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainLayout>
        <Counter />
      </MainLayout>
    </>
  );
}

export default App;
