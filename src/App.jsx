import { useState } from "react";
import "./App.css";

import { Box,Center } from "@chakra-ui/react";
import Fondo from "./components/Fondo";
import Pantalla from "./components/Pantalla";
import Botonera from "./components/Botonera";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       <Box position='relative'>
        <Fondo/>
       {/*  <Pantalla numero={count+1234567890}/> */}
        <Botonera/>
       </Box>
    </>
  );
}

export default App;
