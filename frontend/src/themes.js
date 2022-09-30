import {createTheme} from "@mui/material/styles";
import {responsiveFontSizes} from "@mui/material";
import {breakpoints} from "@mui/system";

let theme = createTheme();
let mode;
theme = createTheme({
    components: {
        MuiLink: {
            variants: [
                {
                    props: { variant: "underline-black"},
                    style: {
                        color: '#0d0d0d',
                        textDecoration: "none",
                        '&:hover': {
                            color: '#0d0d0d',
                            textDecoration: "underline #0d0d0d",
                        }
                    },
                },
                {
                    props: { variant: "underline-secondary"},
                    style: {
                        color: '#fa2061',
                        textDecoration: "none",
                        "&:hover": {
                            color: '#fa2061',
                            textDecoration: "underline #fa2061",
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
                }
            }
        },
        MuiTypography: {
            variants: [
                {
                    props: {variant: "h1"},
                    style: {
                        fontWeight: "bold",
                    },
                },
                {
                    props: {variant: "h2"},
                    style: {
                        fontWeight: "bold",
                    },
                },
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
        MuiButton: {
            styleOverrides: {
                root: {
                    height: "47.5px",
                    minWidth: "100px"
                }
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
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
                    [theme.breakpoints.up('sm')]: {
                        fontSize: "18px"
                    },
                    [theme.breakpoints.down('sm')]: {
                        fontSize: "16px"
                    },
                },
            },
        }
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        button: {
            textTransform: 'none'
        },
    },
    breakpoints: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1440,
        xl: 1920,
    },
    palette: {
        primary: {
            main: '#4cc5cd'
        },
        secondary: {
            main: '#fa2061'
        },
        base: {
            white: '#f2f2f2',
            black: '#0d0d0d'
        }
    },
});
theme = responsiveFontSizes(theme);

export default theme;
