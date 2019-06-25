import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#d6a0d5",
    display: "flex",
    justifyContent: "space-around",
    padding: '10px',
    margin: "10px",
    boxShadow: "0 3px 2px #947d8a"
  },
  btn: {
    backgroundColor: "teal",
    border: "1px solid white",
    "&:hover": {
      backgroundColor: "white"
    }
  }
});

const BoxExample = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root}`}>
      <Button className={`${classes.btn}`}>Click me</Button>
    </div>
  );
};
export default BoxExample;
