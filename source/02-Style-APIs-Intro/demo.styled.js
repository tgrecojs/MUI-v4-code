import React from "react";
import { Button } from "@material-ui/core";
import { styled } from "@material-ui/styles";

const StyledDiv = styled('div')({
  backgroundColor: "#d6a0d5",
  display: "flex",
  justifyContent: "space-around",
  padding: 10,
  margin: "10px",
  boxShadow: "0 3px 2px #947d8a"
});

const StyledButton = styled(Button)({
  backgroundColor: "teal",
  border: "1px solid white",
  "&:hover": {
    backgroundColor:  "white"
  }
});

const Demo = () => {
  return (
    <StyledDiv>
      <StyledButton>Styled Button - Me!</StyledButton>
    </StyledDiv>
  );
};
export default Demo;
