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
        xl: 1920,
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
        },
        background: {
            default: '#222831',
        },
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
                        color: '#0d0d0d',
                        textDecoration: "none",
                        "&:hover": {
                            color: '#0d0d0d',
                            textDecoration: "none",
                        },
                    },
                }
            ]
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    height: "100%",
                    [theme.breakpoints.up('lg')]: {
                        maxWidth: "1920px"
                    },
                    width: '85%',
                    [theme.breakpoints.down('sm')]: {
                        width: '100%',
                    },
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.primary,
                }
            },
            variants: [
                {
                    props: {variant: "body1"},
                    style: {
                        [theme.breakpoints.up('sm')]: {
                            fontSize: "18px"
                        },
                        [theme.breakpoints.down('sm')]: {
                            fontSize: "16px"
                        },
                    },
                },
                {
                    props: {variant: "button"},
                    style: {
                        [theme.breakpoints.up('sm')]: {
                            fontSize: "18px"
                        },
                        [theme.breakpoints.down('sm')]: {
                            fontSize: "16px"
                        },
                    },
                },
            ]
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.primary,
                    [theme.breakpoints.up('sm')]: {
                        fontSize: "18px"
                    },
                    [theme.breakpoints.down('sm')]: {
                        fontSize: "16px"
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.primary,
                    [theme.breakpoints.up('sm')]: {
                        fontSize: "18px"
                    },
                    [theme.breakpoints.down('sm')]: {
                        fontSize: "16px"
                    },
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
        xl: 1920,
    },
});
theme = responsiveFontSizes(theme);

export default theme;
