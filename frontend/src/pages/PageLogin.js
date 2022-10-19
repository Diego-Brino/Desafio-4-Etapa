import React, {useContext} from "react";
import {useTheme} from '@mui/system';
import LoginForm from "../features/Login/Form/LoginForm";
import {LayoutContext} from "../providers/LayoutProvider";
import LayoutAuth from "../layouts/LayoutAuth";

function PageLogin() {

    const theme = useTheme();
    const layout = useContext(LayoutContext);

    return (
        <LayoutAuth content={<LoginForm/>}/>
    );
}

export default PageLogin;