import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import store from "./services/store";
import { ThemeProvider } from "@mui/system";
import theme from "./themes";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { LayoutProvider } from "./providers/LayoutProvider";
import PageCadastrar from "./pages/PageCadastrar";
import PageEntrar from "./pages/PageEntrar";
import LayoutLogin from "./layouts/LayoutLogin";
import LayoutDashboard from "./layouts/LayoutDashboard";
import PagePerfil from "./pages/PagePerfil";

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
