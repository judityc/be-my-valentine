import { Box, Heading, Image } from "@chakra-ui/react";
import styles from "./YesState.module.css";

const YesState = () => {
  return (
    <Box className={styles.container}>
      <Image src="/kristigocouple2024.gif" alt="He said yes yes yes!" />
      <Heading>My Fiance Said Yes!</Heading>
    </Box>
  );
};

export default YesState;
