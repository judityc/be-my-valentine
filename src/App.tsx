import { Box } from "@chakra-ui/react";
import { useState } from "react";
import NoState from "./components/NoState";
import YesState from "./components/YesState";

function App() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noPressed, setNoPressed] = useState(0);

  function handleClickNo() {
    setNoPressed(noPressed + 1);
  }
  const yesButtonSize = ((noPressed * 15) + 20);

  return (
    <Box
      backgroundColor="red.900"
      w="100%"
      h="100vh"
      p="20px"
      color="white"
      paddingTop="200px"
    >
      {yesPressed ? (
        <YesState />
      ) : (
        <NoState
          noPressed={noPressed}
          handleClickYes={() => setYesPressed(true)}
          handleClickNo={handleClickNo}
          yesButtonSize={yesButtonSize}
        />
      )}
    </Box>
  );
}

export default App;
