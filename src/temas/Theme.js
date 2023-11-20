import { extendTheme } from "@chakra-ui/react";
const theme = {
  styles: {
    global: {
      "html, body": {
        bg: "#E6E6E6",
        maxW: "1200px;",
        maxH: "100vh",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",

        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",

        "@font-face": {
          fontFamily: "Calculator",
          /* src: "url('src/assets/pocket_calcuatlor_tt.ttf')", */
          /* src: "url('./src/fonts/calculator/pocket_calcuatlor_tt.ttf')", */
          src: "url('pocket_calcuatlor_tt.ttf')",
          fontWeight: "normal",
          fontStyle: "normal",
        },
        fonts: {
          body: "Calculator",
        }
      },
    },
  },
};

export default theme;
