import React, {createContext, useState} from "react";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import store from "./services/store";
import {ThemeProvider} from "@mui/system";
import theme from "./themes";
import CssBaseline from "@mui/material/CssBaseline";
import PageLogin from "./pages/PageLogin";
import {Provider} from "react-redux";
import PageCadastro from "./pages/PageCadastro";

function App(){

    return(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <BrowserRouter>
                    <Routes>
                        <Route path='/'>
                            <Route path='login' element={<PageLogin/>}/>
                            <Route path='cadastro' element={<PageCadastro/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    )
}

export default App;