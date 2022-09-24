import {createTheme} from "@mui/material/styles";


export const theme = createTheme({
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#fa2061',
                    textDecoration: "none",
                    ":hover": {
                        color: '#fa2061',
                        textDecoration: "underline #fa2061",
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {

                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    padding: '8px 0',
                    fontSize: 18
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontSize: 18
                }
            }
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        button: {
            textTransform: 'none'
        },
    },
    palette: {
        primary: {
            main: '#4cc5cd'
        },
        secondary: {
            main: '#fa2061'
        },
        background: {
            default: "#f2f2f2"
        },
        base: {
            white: '#f2f2f2',
            black: '#0d0d0d'
        }
    },
    breakpoints: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1440,
        xl: 1920,
    },
});