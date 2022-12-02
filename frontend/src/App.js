import React, {useEffect} from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import store from "./services/store";
import { ThemeProvider } from "@mui/system";
import theme from "./themes";
import CssBaseline from "@mui/material/CssBaseline";
import {Provider, useDispatch} from "react-redux";
import { LayoutProvider } from "./providers/LayoutProvider";
import PageCadastrar from "./pages/PageCadastrar";
import PageEntrar from "./pages/PageEntrar";
import LayoutLogin from "./layouts/LayoutLogin";
import LayoutDashboard from "./layouts/LayoutDashboard";
import PagePerfil from "./pages/PagePerfil";
import PageProjetos from "./pages/PageProjetos";
import {setToken} from "./services/slices/authSlice";
import PageCientistas from "./pages/PageCientistas";
import PageMeusProjetos from "./pages/PageMeusProjetos";

function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LayoutProvider>
          <CssBaseline />
          <HashRouter>
            <Routes>
              <Route path="/">
                <Route element={<LayoutLogin />}>
                  <Route path="entrar" element={<PageEntrar />} />
                  <Route path="cadastrar" element={<PageCadastrar />} />
                </Route>
                <Route element={<LayoutDashboard />}>
                  <Route path="perfil" element={<PagePerfil />} />
                  <Route path="meusprojetos" element={<PageMeusProjetos />} />
                  <Route path="projetos" element={<PageProjetos />} />
                  <Route path="cientistas" element={<PageCientistas />} />
                </Route>

              </Route>
            </Routes>
          </HashRouter>
        </LayoutProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
