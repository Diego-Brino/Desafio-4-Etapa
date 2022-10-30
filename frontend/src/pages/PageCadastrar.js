import React, {useContext} from "react";
import {useTheme} from '@mui/system';
import CadastrarForm from "../features/Cadastrar/CadastrarForm";
import {LayoutContext} from "../providers/LayoutProvider";
import LayoutEntrarCadastrar from "../layouts/LayoutEntrarCadastrar";

function PageCadastrar() {

    const theme = useTheme();
    const layout = useContext(LayoutContext);

    return (
        <CadastrarForm/>
    );
}

export default PageCadastrar;