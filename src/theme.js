import { createTheme } from "@mui/material"

export const colors = {
    primary: {
      100: "#e5efef",
      200: "#cbe0e0",
      300: "#b2d0d0",
      400: "#98c1c1",
      500: "#7eb1b1",
      600: "#658e8e",
      700: "#4c6a6a",
      800: "#324747",
      900: "#192323"
    },
    secondary: {
      100: "#fcefe8",
      200: "#f9e0d1",
      300: "#f5d0bb",
      400: "#f2c1a4",
      500: "#efb18d",
      600: "#bf8e71",
      700: "#8f6a55",
      800: "#604738",
      900: "#30231c"
    }, 
    grey: {
      100: "#e4e4e4",
      200: "#c9c9c9",
      300: "#adadad",
      400: "#929292",
      500: "#777777",
      600: "#5f5f5f",
      700: "#474747",
      800: "#303030",
      900: "#181818"
    },
    
  }
  export const theme = createTheme({
    palette: {
      primary: {
        main: colors.primary[500]
      },
      secondary: {
        main: colors.secondary[500]
      }
    }
  })