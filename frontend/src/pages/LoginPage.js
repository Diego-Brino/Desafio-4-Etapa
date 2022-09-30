import React from "react";
import LoginForm from "../features/Login/LoginForm";
import {Stack, styled} from '@mui/system';
import {Container, Box, useTheme} from "@mui/system";
import {Button, Grid, Link, TextField, Typography} from "@mui/material";
import theme from "../themes";
import Center from "../layouts/Center";
import Header from "../layouts/Header";
import BaseGridLayout from "../layouts/BaseGridLayout";
import LoginBackground from "../features/Login/LoginBackground";

function LoginPage(){

    const theme = useTheme();

    return(
        <>
            <LoginBackground/>
            <BaseGridLayout showHeader={true}>
                <Center>
                    <LoginForm/>
                </Center>
            </BaseGridLayout>
        </>
    );
}

export default LoginPage;