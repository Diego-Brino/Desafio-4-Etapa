import React, {useContext} from "react";
import {useTheme} from '@mui/system';
import CadastroForm from "../features/Cadastro/CadastroForm";
import {LayoutContext} from "../providers/LayoutProvider";
import LayoutAuth from "../layouts/LayoutAuth";

function PageCadastro() {

    const theme = useTheme();
    const layout = useContext(LayoutContext);

    return (
        <LayoutAuth content={<CadastroForm/>}/>
    );
}

export default PageCadastro;