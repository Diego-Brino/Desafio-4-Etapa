import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import store from "./services/store";
import {ThemeProvider} from "@mui/system";
import theme from "./themes";
import CssBaseline from "@mui/material/CssBaseline";
import {Provider} from "react-redux";
import PagePesquisarProjetos from "./pages/PagePesquisarProjetos";
import PageMeusProjetos from "./pages/PageMeusProjetos";
import {LayoutProvider} from "./providers/LayoutProvider";
import PageCadastro from "./pages/PageCadastro";
import PageLogin from "./pages/PageLogin";
import LayoutAuth from "./layouts/LayoutAuth";

function App(){

    return(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                    <LayoutProvider>
                        <CssBaseline/>
                        <HashRouter>
                            <Routes>
                                <Route path='/'>
                                    <Route element={<LayoutAuth/>}>
                                        <Route path='cadastro' element={<PageCadastro/>}/>
                                        <Route path='login' element={<PageLogin/>}/>
                                    </Route>
                                    <Route path='meus-projetos' element={<PageMeusProjetos/>}/>
                                    <Route path='pesquisar-projetos' element={<PagePesquisarProjetos/>}/>
                                </Route>
                            </Routes>
                        </HashRouter>
                    </LayoutProvider>
            </ThemeProvider>
        </Provider>
    )
}

export default App;