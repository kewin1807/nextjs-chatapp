import React from 'react';
import Head from "next/head";
import styled from "styled-components";
import { Button } from "@material-ui/core"
import Image from 'next/image';
import { auth, provider } from "../firebase"


function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(error => { })
    }
    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Image src={"/logo.png"} alt="" width="500" height="300" />
                <Button onClick={signIn} variant="outlined">Sign in with google</Button>
            </LoginContainer>



        </Container>
    );
}

export default Login;

const Container = styled.div`
    display:grid;
    place-items:center;
    height:100vh;
    background-color: whitesmoke;
`;
const LoginContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:white;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0, 0,0,0.7);
`;