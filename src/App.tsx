import React from "react";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Slider } from "@mui/material";
import Delete from "@mui/icons-material/Delete";

import { makeStyles, useTheme } from "./theme/index";

const useAppStyles = makeStyles({
  container: {
    margin: "50px",

    " & > * ": {
      marginBottom: "30px",
    },
  },

  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

const useIconStyles = makeStyles((theme) => ({
  icon: {
    // color: (props: IconType) => (props.done ? "green" : "red"),
    color: (props: IconType) =>
      props.done
        ? theme.palette.background.main
        : theme.palette.primary.lightBlue,
  },
}));

type IconType = {
  done: Boolean;
};

const testObj = {
  itemList: [{ done: false }, { done: true }],
};

function DeleteIcon(props: IconType) {
  const classes = useIconStyles(props);
  return <Delete className={classes.icon} />;
}

function App() {
  const classes = useAppStyles();
  console.log("hello");

  return (
    <Container className={classes.container}>
      <Button className={classes.button}>Hello World</Button>
      <Slider />
      <>
        {testObj.itemList.map((item, index) => {
          return <DeleteIcon done={item.done} key={index} />;
        })}
      </>
    </Container>
  );
}

export default App;
