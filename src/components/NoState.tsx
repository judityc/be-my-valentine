import { Box, Button, Heading, Image } from "@chakra-ui/react";
import styles from "./NoState.module.css";
import { WRONG_ANSWERS } from "../constants";

interface Props {
  handleClickYes: () => void;
  handleClickNo: () => void;
  noPressed: number;
  yesButtonSize?: number;
}

const NoState = ({
  handleClickNo,
  handleClickYes,
  noPressed,
  yesButtonSize,
}: Props) => {
  return (
    <Box className={styles.container}>
      <Image
        className={styles.img}
        src="milk-and-mocha-hugs.gif"
        alt="He said No"
      />
      <Heading textAlign="center">Will You Be My Valentine?</Heading>
      <Box className={styles.buttons}>
        <Button
          onClick={handleClickYes}
          padding="8px 16px"
          fontSize={yesButtonSize != 0 ? yesButtonSize : "20"}
          backgroundColor="red.500"
          height="auto"
        >
          Yes!
        </Button>
        <Button
          onClick={handleClickNo}
          padding="8px 16px"
          backgroundColor="red.500"
          fontSize={20}
        >
          {WRONG_ANSWERS[Math.min(noPressed, WRONG_ANSWERS.length - 1)]}
        </Button>
      </Box>
    </Box>
  );
};

export default NoState;
