import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import App from "./App.js";
import LoginPage from "./pages/LoginPage";

import {theme} from "./providers/themes";
import {ThemeProvider} from "@mui/system";
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App/>}>
                        <Route path='login' element={<LoginPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </>
);