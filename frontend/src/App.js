import React, {createContext, useState} from "react";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import store from "./services/store";
import {Box, ThemeProvider} from "@mui/system";
import theme from "./themes";
import CssBaseline from "@mui/material/CssBaseline";
import PageLogin from "./pages/PageLogin";
import {Provider} from "react-redux";
import PageCadastro from "./pages/PageCadastro";
import PagePesquisarProjetos from "./pages/PagePesquisarProjetos";
import PagePerfil from "./pages/PagePerfil";
import PageMeusProjetos from "./pages/PageMeusProjetos";

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
                            <Route path='perfil' element={<PagePerfil/>}/>
                            <Route path='meus-projetos' element={<PageMeusProjetos/>}/>
                            <Route path='pesquisar-projetos' element={<PagePesquisarProjetos/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    )
}

export default App;