import React, {useContext} from "react";
import {useTheme} from '@mui/system';
import CadastrarForm from "../features/Cadastrar/CadastrarForm";
import {LayoutContext} from "../providers/LayoutProvider";
import LayoutLogin from "../layouts/LayoutLogin";

function PageCadastrar() {

    return (
        <CadastrarForm/>
    );
}

export default PageCadastrar;