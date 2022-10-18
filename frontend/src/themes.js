import {createTheme} from "@mui/material/styles";
import {responsiveFontSizes} from "@mui/material";
import {breakpoints} from "@mui/system";

let theme = createTheme();

theme = createTheme({
    breakpoints: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
    },
    palette: {
        primary: {
            main: '#222831'
        },
        secondary: {
            main: '#FEFEFE'
        },
        tertiary: {
            main: '#00ADB5',
        },
        text: {
            primary: '#222831',
            secondary: '#FEFEFE',
        },
        background: {
            default: '#222831',
            other: '#393E46',
        },
    },
});
theme = createTheme(theme,{
    components: {
        MuiLink: {
            variants: [
                {
                    props: { variant: "primary"},
                    style: {
                        color: theme.palette.primary.main,
                        textDecoration: "none",
                        '&:hover': {
                            color: theme.palette.primary.main,
                            textDecoration: "underline" + theme.palette.primary.main,
                        }
                    },
                },
                {
                    props: { variant: "underline-secondary"},
                    style: {
                        color: theme.palette.primary.main,
                        textDecoration: "none",
                        "&:hover": {
                            color: theme.palette.primary.main,
                            textDecoration: "underline " + theme.palette.primary.main,
                        },
                    },
                },
                {
                    props: { variant: "no-underline"},
                    style: {
                        color: theme.palette.text.primary,
                        textDecoration: "none",
                        "&:hover": {
                            color: theme.palette.text.primary,
                            textDecoration: "none",
                        },
                    },
                }
            ]
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.primary,
                }
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.primary,
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.primary,
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.primary,
                },
                variants:[
                    {
                        props: { variant: 'black' },
                        style: {
                            "& > fieldset" : {
                                borderColor: theme.palette.text.secondary
                            }
                        },
                    }
                ]
            }
        },
        MuiDivider: {
            styleOverrides:{
                root:{
                    backgroundColor: theme.palette.text.primary
                }
            }
        },
        MuiChip: {
            styleOverrides:{
                root:{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.text.secondary,
                    ".MuiChip-deleteIcon": {
                        color: theme.palette.common.black
                    }
                }
            }
        },
        MuiCheckbox: {
            styleOverrides:{
                root:{
                    color: theme.palette.primary.main,
                }
            }
        }
    },
    typography: {
        fontFamily: 'Helvetica, sans-serif',
        color: theme.palette.text.primary,
        button: {
            textTransform: 'none'
        },
    },
    breakpoints: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440,
    },
});
theme = responsiveFontSizes(theme);

export default theme;