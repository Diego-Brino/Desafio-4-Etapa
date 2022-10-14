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
            main: '#00ADB5'
        },
        secondary: {
            main: '#393E46',
        },
        tertiary: {
            main: '#222831'
        },
        text: {
            primary: '#EEEEEE',
            secondary: '#222831',
        },
        background: {
            default: '#222831',
        },
        error: {
            main: '#f00'
        }
    },
});
theme = createTheme(theme,{
    components: {
        MuiLink: {
            variants: [
                {
                    props: { variant: "underline-black"},
                    style: {
                        color: theme.palette.common.black,
                        textDecoration: "none",
                        '&:hover': {
                            color: theme.palette.common.black,
                            textDecoration: "underline" + theme.palette.common.black,
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
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& > fieldset" : {
                        borderColor: theme.palette.text.primary
                    }
                }
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
        }
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
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
