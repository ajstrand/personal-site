import { ThemeProvider } from "styled-components";
import React from "react";
const foo = {
  colors:{
    red:"#f495a3",
    lightBlue:"#4aa0d5",
    darkBlue:"#131316",
    blueGrey:"#d8e9f0",
  }
 
}

const Theme = ({ children }) => (
  <ThemeProvider theme={{mode:'light'}}>{children}</ThemeProvider>
);

export default Theme